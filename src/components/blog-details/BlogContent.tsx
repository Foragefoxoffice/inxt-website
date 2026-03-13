'use client';

import { resolveMediaUrl } from '@/utils/api';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Comment from './Comment';
import ShareLink from './ShareLink';
import SearchBar from '../blog/SearchBar';
import RecentBlogs from '../blog/RecentBlogs';
import Link from 'next/link';
import { useState } from 'react';
import { formatDate } from '@/utils/formatDate';

const BlogContent = ({ blog, recentBlogs = [] }: { blog: any; recentBlogs?: any[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const blocks = blog.data.blocks || [];

  const filteredBlogs = searchQuery.trim() 
    ? recentBlogs.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : recentBlogs;

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-24">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row  justify-between gap-10 xl:gap-16">
          {/* Main Content Area */}
          <div className="flex-1 max-w-[75%]">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60">
                  <Link href="/" className="hover:text-primary-500 transition-colors duration-300">Home</Link>
                  <span className="text-[10px]">●</span>
                  <Link href="/blog" className="hover:text-primary-500 transition-colors duration-300">Blog</Link>
                  <span className="text-[10px]">●</span>
                  <span className="text-secondary font-medium truncate max-w-[200px] md:max-w-none">
                    {blog.data.title}
                  </span>
                </nav>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[884px]">{blog.data.title}</h2>
              </RevealAnimation>
              <div className="flex items-center gap-3">
                <div>
                  <RevealAnimation delay={0.3}>
                    <h3 className="text-tagline-1 font-medium">{blog.data.author}</h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <time
                      dateTime={blog.data.publishDate}
                      className="text-tagline-2 text-secondary/60 dark:text-accent/60 flex items-center gap-2 font-normal">
                      {formatDate(blog.data.publishDate)} <span>•</span> {blog.data.readTime}
                    </time>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="my-10 max-w-full overflow-hidden rounded-lg md:my-16 md:rounded-4xl">
                <Image
                  src={blog.data.thumbnail as string | StaticImageData}
                  className="h-full w-full object-cover object-center"
                  alt="blog-details-cover"
                  width={1200}
                  height={700}
                />
              </figure>
            </RevealAnimation>

            {/* Blog details-body from Blocks */}
            <RevealAnimation delay={0.5}>
              <article className="blog-content-body space-y-12 md:space-y-16">
                {blocks.length > 0 ? (
                  blocks.map((block: any, index: number) => {
                    switch (block.type) {
                      case 'richText':
                        return (
                          <div
                            key={index}
                            className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
                              prose-headings:font-medium prose-headings:text-secondary dark:prose-headings:text-accent
                              prose-p:text-secondary/80 dark:prose-p:text-accent/80 prose-p:leading-loose
                              prose-strong:text-secondary dark:prose-strong:text-accent prose-strong:font-semibold
                              prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline
                              [&_p]:mb-6 last:[&_p]:mb-0
                              [&_ul]:list-disc! [&_ol]:list-decimal!
                              [&_ul]:ps-12 [&_ol]:ps-12 [&_li]:mb-6
                              [&_li]:marker:text-secondary dark:[&_li]:marker:text-accent
                              [&_li]:before:content-none!
                              [&_li_p]:m-0 [&_li_p]:inline
                              [&_h2]:text-heading-4 md:[&_h2]:text-heading-3 [&_h2]:mt-20 [&_h2]:mb-10
                              [&_h3]:text-heading-5 md:[&_h3]:text-heading-4 [&_h3]:mt-16 [&_h3]:mb-8"
                            dangerouslySetInnerHTML={{ __html: block.data.content }}
                          />
                        );
                      case 'image':
                        return (
                          <figure key={index} className="my-16 overflow-hidden rounded-2xl border border-stroke-1 dark:border-stroke-7 shadow-sm">
                            <Image
                              src={resolveMediaUrl(block.data.url)}
                              alt={block.data.caption || 'blog-image'}
                              width={1200}
                              height={700}
                              className="w-full object-cover"
                            />
                            {block.data.caption && (
                              <figcaption className="bg-background-1 dark:bg-background-6 py-4 text-center text-sm font-medium text-secondary/60 dark:text-accent/60 italic">
                                {block.data.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      case 'heading':
                        const HeadingTag = `h${block.data.level || 2}` as any;
                        const headingClasses: Record<number, string> = {
                          1: 'text-heading-3',
                          2: 'text-heading-4',
                          3: 'text-heading-5',
                          4: 'text-heading-6',
                          5: 'text-heading-6',
                          6: 'text-heading-6',
                        };
                        return (
                          <HeadingTag
                            key={index}
                            className={`${headingClasses[block.data.level || 2]} mb-8 mt-16 font-medium text-secondary dark:text-accent first:mt-0`}>
                            {block.data.text}
                          </HeadingTag>
                        );
                      case 'quote':
                        return (
                          <blockquote
                            key={index}
                            className="my-16 border-l-4 border-primary-500 bg-background-2 dark:bg-background-7 px-10 py-12 rounded-r-2xl italic shadow-sm">
                            <p className="sm:text-heading-5 text-heading-6 font-normal text-secondary dark:text-accent leading-relaxed">
                              &ldquo;{block.data.text}&rdquo;
                            </p>
                            {block.data.author && (
                              <cite className="mt-6 block text-base font-medium not-italic text-primary-500">
                                &mdash; {block.data.author}
                              </cite>
                            )}
                          </blockquote>
                        );
                      case 'video':
                        const isUpload = block.data.mode === 'upload';
                        const videoSrc = isUpload ? resolveMediaUrl(block.data.url) : block.data.url || '';

                        if (!isUpload) {
                          let embedUrl = videoSrc;
                          if (embedUrl.includes('youtu.be')) {
                            embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0];
                          } else if (embedUrl.includes('youtube.com/watch')) {
                            embedUrl = embedUrl.replace('watch?v=', 'embed/').split('&')[0];
                          }
                          return (
                            <div key={index} className="my-16 aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
                              <iframe
                                src={embedUrl}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded video"
                              />
                            </div>
                          );
                        }

                        return (
                          <div key={index} className="my-16 w-full overflow-hidden rounded-2xl shadow-xl border border-stroke-1 dark:border-stroke-7">
                            <video
                              src={videoSrc}
                              controls
                              className="w-full h-auto"
                              poster={blog.data.thumbnail}
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        );
                      default:
                        return null;
                    }
                  })
                ) : (
                  // Fallback if no blocks but content exists
                  <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
                )}
              </article>
            </RevealAnimation>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[25%] shrink-0 self-start lg:sticky lg:top-32">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-heading-5">Search</h3>
                <SearchBar onSearch={(query) => setSearchQuery(query)} />
              </div>

              <div className="space-y-6">
                <h3 className="text-heading-5">Share this post</h3>
                <ul className="flex items-center gap-2.5">
                  {[
                    { name: 'facebook', icon: 'M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16945 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z', url: 'https://www.facebook.com' },
                    { name: 'linkedin', icon: 'M10 1.25C5.16947 1.25 1.25 5.16947 1.25 10C1.25 14.8305 5.16947 18.75 10 18.75C14.821 18.75 18.75 14.8305 18.75 10C18.75 5.16947 14.821 1.25 10 1.25ZM15.7795 5.28335C16.8235 6.55504 17.4499 8.17787 17.4688 9.93355C17.2221 9.88614 14.7546 9.38313 12.2682 9.69632C12.2112 9.57295 12.1638 9.44005 12.1068 9.30722C11.955 8.94661 11.7842 8.57648 11.6133 8.22534C14.3655 7.1055 15.6182 5.49214 15.7795 5.28335ZM10 2.54067C11.898 2.54067 13.6347 3.25244 14.9539 4.41974C14.821 4.60955 13.6917 6.11849 11.0344 7.11496C9.81018 4.86578 8.45311 3.02468 8.24431 2.73997C8.8042 2.6071 9.39264 2.54067 10 2.54067ZM6.8208 3.24295C7.02008 3.50868 8.34871 5.35927 9.59192 7.56099C6.09951 8.49106 3.01519 8.47209 2.68303 8.47209C3.16703 6.15645 4.73292 4.22993 6.8208 3.24295ZM2.52169 10.0095C2.52169 9.93355 2.52169 9.85765 2.52169 9.78174C2.84436 9.7912 6.46963 9.83867 10.1993 8.71884C10.4176 9.13637 10.6169 9.56343 10.8067 9.99048C10.7118 10.019 10.6074 10.0475 10.5125 10.0759C6.65944 11.3191 4.60955 14.7166 4.43872 15.0013C3.25244 13.6822 2.52169 11.9265 2.52169 10.0095ZM10 17.4783C8.27275 17.4783 6.67842 16.8899 5.41621 15.9029C5.54908 15.6277 7.06749 12.7047 11.2812 11.2338C11.3001 11.2242 11.3097 11.2242 11.3286 11.2148C12.382 13.9384 12.8091 16.2256 12.923 16.8804C12.0214 17.2695 11.0344 17.4783 10 17.4783ZM14.1662 16.1971C14.0903 15.7416 13.6917 13.5588 12.7142 10.8731C15.0583 10.503 17.1082 11.1104 17.3644 11.1958C17.0418 13.2741 15.846 15.0678 14.1662 16.1971Z', url: 'https://www.linkedin.com' },
                    { name: 'twitter', icon: 'M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z', url: 'https://twitter.com' }
                  ].map((social) => (
                    <li key={social.name} className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                      <Link href={social.url} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                          <path
                            d={social.icon}
                            className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {filteredBlogs.length > 0 ? (
                <div>
                  <h3 className="text-heading-5">{searchQuery.trim() ? 'Search results' : 'Recent articles'}</h3>
                  <div className="space-y-5 mt-6">
                    {filteredBlogs.map((b) => (
                      <div key={b.slug} className="flex items-center gap-4">
                        <figure className="w-[102px] h-[77px] overflow-hidden rounded-[5px] shrink-0">
                          <Image src={b.thumbnail} alt={b.title} className="size-full object-cover" width={102} height={77} />
                        </figure>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-tagline-1 line-clamp-2">
                            <Link href={`/blog/${b.slug}`} className="hover:text-primary-500 transition-colors duration-300">
                              {b.title}
                            </Link>
                          </h4>
                          <p className="text-tagline-3">{formatDate(b.publishDate)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : searchQuery.trim() && (
                <div>
                  <h3 className="text-heading-5">Search results</h3>
                  <p className="mt-4 text-secondary/60 dark:text-accent/60">No articles found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
;

export default BlogContent;
