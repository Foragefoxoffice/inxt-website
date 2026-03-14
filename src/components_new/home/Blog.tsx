import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import LinkButton from '../ui/button/LinkButton';

import { Blog as ApiBlog, NewsItem, NewsletterIssue, resolveMediaUrl } from '@/utils/api';
import { formatDate } from '@/utils/formatDate';

interface BlogProps {
  blogs: ApiBlog[];
  news: NewsItem[];
  newsletters: NewsletterIssue[];
}

const Blog = ({ blogs, news, newsletters }: BlogProps) => {
  // Map Blogs
  const mappedBlogs: IBlogPost[] = (blogs || []).map((blog) => ({
    tag: blog.category || 'Blog',
    author: blog.author || 'Anonymous',
    authorImage: '/images/ns-avatar-1.png',
    publishDate: formatDate(blog.publishDate),
    rawDate: new Date(blog.publishDate),
    title: blog.title,
    description: blog.excerpt || blog.content?.substring(0, 150) || '',
    thumbnail: resolveMediaUrl(blog.featuredImage) || '/images/ns-img-325.png',
    readTime: `${blog.readingTime || 5} min read`,
    slug: blog.slug,
    content: blog.content || '',
    featured: blog.status === 'published',
  }));

  // Map News & Events
  const mappedNews: IBlogPost[] = (news || []).map((item) => ({
    tag: item.category === 'event' ? 'Event' : 'News',
    author: item.author || 'By TechNXT',
    authorImage: '/images/ns-avatar-1.png',
    publishDate: formatDate(item.publishDate),
    rawDate: new Date(item.publishDate),
    title: item.title,
    description: item.excerpt || item.content?.substring(0, 150) || '',
    thumbnail: resolveMediaUrl(item.featuredImage) || '/images/ns-img-325.png',
    readTime: '5 min read',
    slug: item.slug,
    content: item.content || '',
    featured: item.status === 'published',
  }));

  // Map Newsletters
  const mappedNewsletters: IBlogPost[] = (newsletters || []).map((issue) => ({
    tag: 'Newsletter',
    author: issue.author || 'By TechNXT',
    authorImage: '/images/ns-avatar-1.png',
    publishDate: formatDate(issue.issueDate),
    rawDate: new Date(issue.issueDate),
    title: issue.title,
    description: issue.description || '',
    thumbnail: resolveMediaUrl(issue.featuredImage) || '/images/ns-img-325.png',
    readTime: 'PDF Resource',
    slug: `newsletter`, // Linking to newsletter page as specific slugs might not be used same way
    content: '',
    featured: true,
  }));

  // Combine and sort by date (most recent first)
  const allInsights = [...mappedBlogs, ...mappedNews, ...mappedNewsletters]
    .sort((a: any, b: any) => b.rawDate.getTime() - a.rawDate.getTime())
    .slice(0, 3);

  return (
    <section
      className="bg-background-3 dark:bg-background-5 pt-24 pb-24 md:pt-28 md:pb-32 lg:pt-[100px] lg:pb-[120px] xl:pt-[120px] xl:pb-[170px]"
      aria-label="Blog posts and insights">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Insights</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Our recent
              <span className="text-primary-500"> news, events &amp; newsletters </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[738px]">
              Explore our latest blogs, news announcements, and periodic newsletters. Stay informed with our 
              thought leadership and industry events shaping the future of insurance technology.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {allInsights?.map((item, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={`${item.tag}-${item.slug}-${index}`}>
              <BlogCardV1 blog={item} />
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.7}>
          <div className="mt-7 flex justify-center md:mt-14 space-x-4">
            <LinkButton
              href="/blog"
              className="btn hover:btn-primary dark:btn-accent btn-secondary btn-md md:btn-xl"
              aria-label="View all blogs">
              Blogs
            </LinkButton>
            <LinkButton
              href="/news-events"
              className="btn hover:btn-primary dark:btn-accent btn-secondary btn-md md:btn-xl"
              aria-label="View news and events">
              News & Events
            </LinkButton>
            <LinkButton
              href="/newsletter"
              className="btn hover:btn-primary dark:btn-accent btn-secondary btn-md md:btn-xl"
              aria-label="View newsletters">
              Newsletters
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
