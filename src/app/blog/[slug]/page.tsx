import BlogContent from '@/components/blog-details/BlogContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getBlogById, getBlogs, resolveMediaUrl } from '@/utils/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCard } from '@/components/blog/BlogCard';
import { formatDate } from '@/utils/formatDate';

export async function generateStaticParams() {
  const response = await getBlogs('en');
  const blogs = response.data || [];
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog Details - AI Voice Generator || NextSaaS',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  try {
    const response = await getBlogById('en', slug);
    const blog = response.data;

    if (!blog) return notFound();

    // Map API Blog type to IBlogContent structure expected by BlogContent component
    const blogContent = {
      content: blog.content || '',
      data: {
        tag: blog.category || 'General',
        author: blog.author || 'Anonymous',
        authorImage: '/images/ns-avatar-1.png',
        publishDate: formatDate(blog.publishDate),
        title: blog.title,
        description: blog.excerpt || '',
        thumbnail: resolveMediaUrl(blog.featuredImage) || '/images/ns-img-325.png',
        readTime: `${blog.readingTime || 5} min read`,
        slug: blog.slug,
        featured: blog.status === 'published',
        blocks: blog.blocks || []
      },
      isEmpty: false,
      excerpt: blog.excerpt || '',
      language: 'en'
    };

    // Fetch recent blogs
    const recentResponse = await getBlogs('en');
    const allBlogs = recentResponse.data || [];
    
    // Filter out the current blog
    const otherBlogs = allBlogs.filter(b => b.slug !== slug);

    // Prepare sidebar blogs (mini version)
    const sidebarBlogs = otherBlogs.slice(0, 5).map(b => ({
      title: b.title,
      slug: b.slug,
      thumbnail: resolveMediaUrl(b.featuredImage),
      publishDate: formatDate(b.publishDate)
    }));

    // Prepare bottom cards (full version)
    const bottomCards = otherBlogs.slice(0, 3).map(b => ({
      tag: b.category || 'General',
      author: b.author || 'Anonymous',
      authorImage: '/images/ns-avatar-1.png',
      publishDate: formatDate(b.publishDate),
      title: b.title,
      description: b.excerpt || '',
      thumbnail: resolveMediaUrl(b.featuredImage) || '/images/ns-img-325.png',
      readTime: `${b.readingTime || 5} min read`,
      slug: b.slug,
      content: b.content || ''
    }));

    return (
      <main className="bg-white">
        <BlogContent blog={blogContent as any} recentBlogs={sidebarBlogs} />
        
        {bottomCards.length > 0 && (
          <section className="bg-background-2 dark:bg-background-7 py-16 lg:pb-32">
            <div className="main-container">
              <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row lg:mb-16">
                <h2 className="text-heading-3">Recent articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bottomCards.map((cardBlog) => (
                  <BlogCard key={cardBlog.slug} blog={cardBlog} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog:', error);
    return notFound();
  }
};

export default page;
