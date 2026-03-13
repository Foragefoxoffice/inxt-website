import { IBlogPost } from '@/interface';
import { Blog, resolveMediaUrl } from '@/utils/api';
import RevealAnimation from '../animation/RevealAnimation';
import BlogPaginationWrapper from './BlogPaginationWrapper';
import { formatDate } from '@/utils/formatDate';

interface BlogShowcaseProps {
  blogs: Blog[];
}

const BlogShowcase = ({ blogs }: BlogShowcaseProps) => {
  // Map API Blog type to IBlogPost type expected by components
  const mappedBlogs: IBlogPost[] = blogs.map(blog => ({
    tag: blog.category || 'General',
    author: blog.author || 'Anonymous',
    authorImage: '/images/ns-avatar-1.png',
    publishDate: formatDate(blog.publishDate),
    title: blog.title,
    description: blog.excerpt || blog.content?.substring(0, 150) || '',
    thumbnail: resolveMediaUrl(blog.featuredImage) || '/images/ns-img-325.png',
    readTime: `${blog.readingTime || 5} min read`,
    slug: blog.slug,
    content: blog.content || '',
    featured: blog.status === 'published'
  }));

  return (
    <section className="py-14 md:py-16 lg:pt-[88px] xl:pt-[150px] xl:pb-20">
      <div className="main-container">
        <RevealAnimation delay={0.05}>
          <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60 mb-8">
            <a href="/" className="hover:text-primary-500 transition-colors duration-300">Home</a>
            <span className="text-[10px]">●</span>
            <span className="text-secondary font-medium">Blog</span>
          </nav>
        </RevealAnimation>
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Our recent <span className="text-primary-500 inline-block">news &amp; insights</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              Our recent news and insights highlight the latest developments, achievements, and thought leadership
              shaping our journey forward. From product innovations and strategic partnerships to industry trends
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper blogs={mappedBlogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
