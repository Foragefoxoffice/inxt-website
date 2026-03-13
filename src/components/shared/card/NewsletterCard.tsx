import { NewsletterIssue, resolveMediaUrl } from '@/utils/api';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';
import { ArrowUpRight } from 'lucide-react';

interface NewsletterCardProps {
  issue: NewsletterIssue;
  onReadMore?: (issue: NewsletterIssue) => void;
  className?: string;
}

const NewsletterCard = ({ issue, onReadMore, className }: NewsletterCardProps) => {
  const thumbnail = resolveMediaUrl(issue.featuredImage) || 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=2070&auto=format&fit=crop';
  
  return (
    <article 
      className={cn("group cursor-pointer", className)}
      onClick={() => onReadMore?.(issue)}
    >
      <div className="relative mb-6 aspect-[1/1.3] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]">
        <Image
          src={thumbnail}
          fill
          alt={issue?.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="space-y-4 px-2 flex flex-col h-full">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary-500" />
          <time className="text-tagline-2 font-medium text-secondary/70">
            {issue?.issueDate ? formatDate(issue.issueDate) : 'Recent'}
          </time>
        </div>
        
        <h3 className="transition-colors group-hover:text-primary-500 line-clamp-2 leading-snug min-h-14">
          {issue.title}
        </h3>

        <div className="inline-flex items-center gap-2 text-tagline-1 font-medium text-secondary transition-all group-hover:gap-3 group-hover:text-primary-500 pt-1">
          <span>Read More</span>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:scale-110" />
        </div>
      </div>
    </article>
  );
};

export default NewsletterCard;
