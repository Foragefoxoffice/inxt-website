'use client';
import { useState } from 'react';
import { NewsletterIssue, resolveMediaUrl } from '@/utils/api';
import RevealAnimation from '../animation/RevealAnimation';
import NewsletterCard from '../shared/card/NewsletterCard';
import NewsletterAccessModal from '../shared/NewsletterAccessModal';

interface NewsletterShowcaseProps {
  issues: NewsletterIssue[];
}

const NewsletterShowcase = ({ issues }: NewsletterShowcaseProps) => {
  const [selectedIssue, setSelectedIssue] = useState<NewsletterIssue | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (issue: NewsletterIssue) => {
    setSelectedIssue(issue);
    setIsModalOpen(true);
  };

  return (
    <section className="py-14 md:py-16 lg:pt-[88px] xl:pt-[150px] xl:pb-20">
      <div className="main-container">
        <RevealAnimation delay={0.05}>
          <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60 mb-8">
            <a href="/" className="hover:text-primary-500 transition-colors duration-300">Home</a>
            <span className="text-[10px]">●</span>
            <span className="text-secondary font-medium">Newsletter</span>
          </nav>
        </RevealAnimation>
        
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Our monthly <span className="text-primary-500 inline-block">newsletters</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px] text-lg text-secondary/60">
              Stay informed with our periodic newsletter issues. Download our latest updates and insights directly as PDF resources.
            </p>
          </RevealAnimation>
        </div>

        {issues && issues.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
            {issues.map((issue, index) => (
              <RevealAnimation key={issue._id} delay={0.3 + index * 0.1}>
                <NewsletterCard issue={issue} onReadMore={handleReadMore} />
              </RevealAnimation>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[30px] border-2 border-dashed border-slate-200">
            <p className="text-secondary/60 text-lg font-medium">No newsletters available at the moment.</p>
            <p className="text-secondary/40 text-sm mt-3 max-w-sm mx-auto">
              Our team is working on the latest tech insights and updates. Check back soon for our new edition!
            </p>
          </div>
        )}
      </div>

      {selectedIssue && (
        <NewsletterAccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          newsletterId={selectedIssue._id}
          newsletterTitle={selectedIssue.title}
          pdfUrl={selectedIssue.documents?.[0]?.url ? resolveMediaUrl(selectedIssue.documents[0].url) : undefined}
        />
      )}
    </section>
  );
};

export default NewsletterShowcase;
