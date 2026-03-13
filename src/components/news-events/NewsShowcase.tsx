import { INewsItem } from '@/interface';
import { NewsItem, resolveMediaUrl } from '@/utils/api';
import RevealAnimation from '../animation/RevealAnimation';
import NewsPaginationWrapper from './NewsPaginationWrapper';
import { formatDate } from '@/utils/formatDate';

interface NewsShowcaseProps {
  news: NewsItem[];
}

const NewsShowcase = ({ news }: NewsShowcaseProps) => {
  // Map API News type to INewsItem type expected by components
  const mappedNews: INewsItem[] = news.map(item => ({
    tag: item.category === 'event' ? 'Event' : (item.category || 'News'),
    author: item.author || 'Anonymous',
    authorImage: '/images/ns-avatar-1.png',
    publishDate: formatDate(item.publishDate),
    title: item.title,
    description: item.excerpt || item.content?.substring(0, 150) || '',
    thumbnail: resolveMediaUrl(item.featuredImage) || '/images/ns-img-325.png',
    readTime: '5 min read',
    slug: item.slug,
    content: item.content || '',
    featured: item.status === 'published',
    category: item.category,
    eventDate: item.eventDate,
    eventLocation: item.eventLocation
  }));

  return (
    <section className="py-14 md:py-16 lg:pt-[88px] xl:pt-[150px] xl:pb-20">
      <div className="main-container">
        <RevealAnimation delay={0.05}>
          <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60 mb-8">
            <a href="/" className="hover:text-primary-500 transition-colors duration-300">Home</a>
            <span className="text-[10px]">●</span>
            <span className="text-secondary font-medium">News & Events</span>
          </nav>
        </RevealAnimation>
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Our recent <span className="text-primary-500 inline-block">news &amp; events</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              Stay updated with the latest news, announcements, and upcoming events from our team. 
              Explore our journey and join us in shaping the future.
            </p>
          </RevealAnimation>
        </div>

        {/* News grid with pagination wrapper */}
        <NewsPaginationWrapper news={mappedNews} />
      </div>
    </section>
  );
};

NewsShowcase.displayName = 'NewsShowcase';
export default NewsShowcase;
