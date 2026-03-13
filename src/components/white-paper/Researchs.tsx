//white paper research
import { IWhitePaper } from '@/interface';
import { WhitePaper, resolveMediaUrl } from '@/utils/api';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedCard from './FeaturedCard';
import ResearchCard from './ResearchCard';

interface ResearchProps {
  whitepapers: WhitePaper[];
}

const Research = ({ whitepapers }: ResearchProps) => {
  // Map API WhitePaper type to IWhitePaper structure expected by components
  const mappedWhitepapers: IWhitePaper[] = whitepapers.map(paper => ({
    title: paper.title,
    description: paper.excerpt || '',
    img: resolveMediaUrl(paper.featuredImage) || '/images/ns-img-325.png',
    featured: paper.status === 'published', // Mapping for demo
    badgeText: paper.category || 'Research',
    OverviewText: paper.content || '',
    learn: [], // Backend could store these in blocks or separate fields
    keyTakeWays: [],
    keyTakeWaysDescription: '',
    paperLink: '#',
    slug: paper.slug,
    content: paper.content || ''
  }));

  const featuredCard = mappedWhitepapers.find((item) => item.featured === true) || mappedWhitepapers[0];

  return (
    <section>
      <div className="mx-5">
        <div className="bg-background-12 dark:bg-background-7 mx-auto max-w-[1880px] rounded-[30px] py-16 md:py-20 lg:py-[120px] xl:py-[174px]">
          <div className="main-container">
            <div className="grid grid-cols-12 items-stretch gap-6">
              {/* FEATURED CARD    */}
              {featuredCard && (
                <RevealAnimation delay={0.1}>
                  <FeaturedCard card={featuredCard as IWhitePaper} />
                </RevealAnimation>
              )}

              {mappedWhitepapers
                .filter((item) => item !== featuredCard)
                .map((item, index) => {
                  const delay = 0.2 + index * 0.1;
                  return (
                    <RevealAnimation key={item.slug} delay={delay}>
                      <ResearchCard item={item} />
                    </RevealAnimation>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Research.displayName = 'Research';
export default Research;
