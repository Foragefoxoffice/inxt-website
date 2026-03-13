import { WhitePaper, resolveMediaUrl } from '@/utils/api';
import Hero from './Hero';
import KeyTakeWays from './KeyTakeaways';
import Overview from './Overview';

interface ContentProps {
  paper: WhitePaper;
}

const Content = ({ paper }: ContentProps) => {
  return (
    <>
      <Hero 
        badgeText={paper.category || 'Research'} 
        content={paper.content || ''} 
        title={paper.title}
      />
      <Overview
        overviewText={paper.excerpt || ''}
        img={resolveMediaUrl(paper.featuredImage) || '/images/ns-img-325.png'}
        learningPoints={[]} // Map these if backend supports it
      />
      <KeyTakeWays
        keyTakeWays={[]}
        keyTakeWaysDescription={''}
        paperLink={'#'}
      />
    </>
  );
};

Content.displayName = 'Content';
export default Content;
