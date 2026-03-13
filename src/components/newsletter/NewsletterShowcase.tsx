import { NewsletterIssue, resolveMediaUrl } from '@/utils/api';
import RevealAnimation from '../animation/RevealAnimation';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';

interface NewsletterShowcaseProps {
  issues: NewsletterIssue[];
}

const NewsletterShowcase = ({ issues }: NewsletterShowcaseProps) => {
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
            <p className="mx-auto max-w-[738px]">
              Stay informed with our periodic newsletter issues. Download our latest updates and insights directly as PDF resources.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {issues?.map((issue, index) => (
            <RevealAnimation key={issue._id} delay={0.3 + index * 0.1}>
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 border border-stroke-1 hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col h-full space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="badge badge-green">Issue</span>
                    <time className="text-tagline-3 text-secondary/60">{formatDate(issue.issueDate)}</time>
                  </div>
                  
                  <h3 className="text-heading-6 line-clamp-2 min-h-14 group-hover:text-primary-500 transition-colors">
                    {issue.title}
                  </h3>
                  
                  <p className="text-tagline-2 text-secondary/60 line-clamp-3 grow">
                    {issue.description || 'No description available for this issue.'}
                  </p>

                  {issue.documents && issue.documents.length > 0 && (
                    <div className="pt-4 border-t border-stroke-1 mt-auto">
                      <p className="text-tagline-3 text-secondary/40 mb-2 font-medium uppercase tracking-wider">Resources</p>
                      <ul className="space-y-2">
                        {issue.documents.map((doc, idx) => (
                          <li key={idx}>
                            <a 
                              href={resolveMediaUrl(doc.url)} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              <span className="truncate max-w-[200px]">{doc.name}</span>
                              <span className="text-[10px] text-secondary/40">({(doc.size / 1024).toFixed(1)} KB)</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterShowcase;
