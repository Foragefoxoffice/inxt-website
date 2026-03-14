import AIHero from '@/components_new/ai-ml-solutions/AIHero';
import AIMission from '@/components_new/ai-ml-solutions/AIMission';
import AICapabilities from '@/components_new/ai-ml-solutions/AICapabilities';
import AIHowItWorks from '@/components_new/ai-ml-solutions/AIHowItWorks';
import AIFaq from '@/components_new/ai-ml-solutions/AIFaq';
import AICTA from '@/components_new/ai-ml-solutions/AICTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI & ML Solutions || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <AIHero />
      <AIMission />
      <AICapabilities />
      <AIHowItWorks />
      <AIFaq />
      <AICTA />
    </main>
  );
};

export default page;
