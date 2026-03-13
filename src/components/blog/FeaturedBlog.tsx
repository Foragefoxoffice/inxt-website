import { IBlogPost } from '@/interface';
import { Blog, resolveMediaUrl } from '@/utils/api';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedBlogSwiper from './FeaturedBlogSwiper';
import { formatDate } from '@/utils/formatDate';

interface FeaturedBlogProps {
  blogs: Blog[];
}

const FeaturedBlog = ({ blogs }: FeaturedBlogProps) => {
  // Map API Blog type to IBlogPost type expected by components
  const mappedBlogs: IBlogPost[] = blogs.map(blog => ({
    tag: blog.category || 'General',
    author: blog.author || 'Anonymous',
    authorImage: '/images/ns-avatar-1.png', // Using existing placeholder
    publishDate: formatDate(blog.publishDate),
    title: blog.title,
    description: blog.excerpt || blog.content?.substring(0, 150) || '',
    thumbnail: resolveMediaUrl(blog.featuredImage) || '/images/ns-img-325.png', // Using existing placeholder
    readTime: `${blog.readingTime || 5} min read`,
    slug: blog.slug,
    content: blog.content || '',
    featured: blog.status === 'published' // Or add a featured field to backend
  }));

  const featuredBlogs = mappedBlogs.slice(0, 3);

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[700px] text-center">Latest articles published by NextSaaS</h2>
          </RevealAnimation>
          <FeaturedBlogSwiper featuredBlogs={featuredBlogs} />
        </div>
      </div>
    </section>
  );
};

FeaturedBlog.displayName = 'FeaturedBlog';
export default FeaturedBlog;
