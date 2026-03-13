import NewsContent from '@/components/news-events/NewsContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getNewsById, getNews, resolveMediaUrl } from '@/utils/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsCard from '@/components/shared/card/NewsCard';
import { formatDate } from '@/utils/formatDate';

export async function generateStaticParams() {
  try {
    const response = await getNews('en');
    const news = response.data || [];
    return news.map((item) => ({
      slug: item.slug,
    }));
  } catch (error) {
    return [];
  }
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'News & Events Details - inxt',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  try {
    const response = await getNewsById('en', slug);
    const newsItem = response.data;

    if (!newsItem) return notFound();

    // Map API News type to INewsContent structure expected by NewsContent component
    const newsContent = {
      content: newsItem.content || '',
      data: {
        tag: newsItem.category === 'event' ? 'Event' : (newsItem.category || 'News'),
        author: newsItem.author || 'Anonymous',
        authorImage: '/images/ns-avatar-1.png',
        publishDate: newsItem.publishDate,
        title: newsItem.title,
        description: newsItem.excerpt || '',
        thumbnail: resolveMediaUrl(newsItem.featuredImage) || '/images/ns-img-325.png',
        readTime: '5 min read',
        slug: newsItem.slug,
        featured: newsItem.status === 'published',
        blocks: newsItem.blocks || [],
        category: newsItem.category,
        eventDate: newsItem.eventDate,
        eventLocation: newsItem.eventLocation
      },
      isEmpty: false,
      excerpt: newsItem.excerpt || '',
      language: 'en'
    };

    // Fetch recent news
    const recentResponse = await getNews('en');
    const allNews = recentResponse.data || [];
    
    // Filter out the current item
    const otherNews = allNews.filter(n => n.slug !== slug);

    // Prepare sidebar news (mini version)
    const sidebarNews = otherNews.slice(0, 5).map(n => ({
      title: n.title,
      slug: n.slug,
      thumbnail: resolveMediaUrl(n.featuredImage) || '/images/ns-img-325.png',
      publishDate: n.publishDate
    }));

    // Prepare bottom cards (full version)
    const bottomCards = otherNews.slice(0, 3).map(n => ({
      tag: n.category === 'event' ? 'Event' : (n.category || 'News'),
      author: n.author || 'Anonymous',
      authorImage: '/images/ns-avatar-1.png',
      publishDate: n.publishDate,
      title: n.title,
      description: n.excerpt || '',
      thumbnail: resolveMediaUrl(n.featuredImage) || '/images/ns-img-325.png',
      readTime: '5 min read',
      slug: n.slug,
      content: n.content || '',
      category: n.category,
      eventDate: n.eventDate,
      eventLocation: n.eventLocation
    }));

    return (
      <main className="bg-white">
        <NewsContent news={newsContent as any} recentNews={sidebarNews} />
        
        {bottomCards.length > 0 && (
          <section className="bg-background-2 dark:bg-background-7 py-16 lg:pb-32">
            <div className="main-container">
              <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row lg:mb-16">
                <h2 className="text-heading-3">Related News & Events</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bottomCards.map((cardItem) => (
                  <NewsCard key={cardItem.slug} news={cardItem as any} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    );
  } catch (error) {
    console.error('Error fetching news details:', error);
    return notFound();
  }
};

export default page;
