'use client';

import { resolveMediaUrl } from '@/utils/api';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SearchBar from '../blog/SearchBar';
import Link from 'next/link';
import { useState } from 'react';
import { formatDate } from '@/utils/formatDate';

const NewsContent = ({ news, recentNews = [] }: { news: any; recentNews?: any[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const blocks = news.data.blocks || [];

  const filteredNews = searchQuery.trim() 
    ? recentNews.filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : recentNews;

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-24">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-16">
          {/* Main Content Area */}
          <div className="flex-1 lg:max-w-[70%]">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60">
                  <Link href="/" className="hover:text-primary-500 transition-colors duration-300">Home</Link>
                  <span className="text-[10px]">●</span>
                  <Link href="/news-events" className="hover:text-primary-500 transition-colors duration-300">News & Events</Link>
                  <span className="text-[10px]">●</span>
                  <span className="text-secondary font-medium truncate max-w-[200px] md:max-w-none">
                    {news.data.title}
                  </span>
                </nav>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[884px]">{news.data.title}</h2>
              </RevealAnimation>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-tagline-1 font-medium">{news.data.author}</h3>
                    <time
                      dateTime={news.data.publishDate}
                      className="text-tagline-2 text-secondary/60 flex items-center gap-2 font-normal">
                      {formatDate(news.data.publishDate)}
                    </time>
                  </div>
                </div>

                {news.data.category === 'event' && (
                  <div className="flex gap-6 border-l border-stroke-1 pl-6">
                    {news.data.eventDate && (
                      <div>
                        <p className="text-tagline-3 text-secondary/60 uppercase">Event Date</p>
                        <p className="text-tagline-1 font-medium">{formatDate(news.data.eventDate)}</p>
                      </div>
                    )}
                    {news.data.eventLocation && (
                      <div>
                        <p className="text-tagline-3 text-secondary/60 uppercase">Location</p>
                        <p className="text-tagline-1 font-medium">{news.data.eventLocation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <figure className="my-10 max-w-full overflow-hidden rounded-lg md:my-16 md:rounded-4xl">
                <Image
                  src={news.data.thumbnail as string | StaticImageData}
                  className="h-full w-full object-cover object-center"
                  alt="news-details-cover"
                  width={1200}
                  height={700}
                />
              </figure>
            </RevealAnimation>

            {/* News content body from Blocks */}
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
                              prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: block.data.content }}
                          />
                        );
                      case 'image':
                        return (
                          <figure key={index} className="my-16 overflow-hidden rounded-2xl border border-stroke-1">
                            <Image
                              src={resolveMediaUrl(block.data.url)}
                              alt={block.data.caption || 'news-image'}
                              width={1200}
                              height={700}
                              className="w-full object-cover"
                            />
                            {block.data.caption && (
                              <figcaption className="bg-background-1 py-4 text-center text-sm font-medium text-secondary/60 italic">
                                {block.data.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      case 'heading':
                        const HeadingTag = `h${block.data.level || 2}` as any;
                        return (
                          <HeadingTag
                            key={index}
                            className="text-heading-4 mb-8 mt-16 font-medium text-secondary first:mt-0">
                            {block.data.text}
                          </HeadingTag>
                        );
                      default:
                        return null;
                    }
                  })
                ) : (
                  <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />
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

              {filteredNews.length > 0 ? (
                <div>
                  <h3 className="text-heading-5">{searchQuery.trim() ? 'Search results' : 'Recent News'}</h3>
                  <div className="space-y-5 mt-6">
                    {filteredNews.map((n) => (
                      <div key={n.slug} className="flex items-center gap-4">
                        <figure className="w-[102px] h-[77px] overflow-hidden rounded-[5px] shrink-0">
                          <Image src={n.thumbnail} alt={n.title} className="size-full object-cover" width={102} height={77} />
                        </figure>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-tagline-1 line-clamp-2">
                            <Link href={`/news-events/${n.slug}`} className="hover:text-primary-500 transition-colors duration-300">
                              {n.title}
                            </Link>
                          </h4>
                          <p className="text-tagline-3">{formatDate(n.publishDate)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : searchQuery.trim() && (
                <div>
                  <h3 className="text-heading-5">Search results</h3>
                  <p className="mt-4 text-secondary/60">No news found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
