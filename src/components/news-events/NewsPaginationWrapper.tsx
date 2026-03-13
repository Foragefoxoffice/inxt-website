'use client';

import { INewsItem } from '@/interface';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import NewsCard from '../shared/card/NewsCard';
import Pagination from '../shared/Pagination';

interface NewsPaginationWrapperProps {
  news: INewsItem[];
}

const NewsPaginationWrapper = ({ news }: NewsPaginationWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

  // Calculate pagination
  const totalPages = Math.ceil(news.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = news?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      {/* News grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
        {currentNews?.map((item, index) => (
          <RevealAnimation key={item?.slug} delay={0.3 + index * 0.1}>
            <div>
              <NewsCard news={item} />
            </div>
          </RevealAnimation>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.6}>
            <div>
              <Pagination
                totalItems={news.length}
                itemsPerPage={newsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                className="mt-14"
              />
            </div>
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

export default NewsPaginationWrapper;
