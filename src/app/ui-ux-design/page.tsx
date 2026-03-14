import Hero from '@/components_new/design/Hero';
import OurMission from '@/components_new/design/OurMission';
import FeatureV2 from '@/components_new/design/FeatureV2';
import HowItWorks from '@/components_new/design/HowItWorks';
import Faq from '@/components_new/design/Faq';
import { defaultMetadata } from '@/utils/generateMetaData';
import CTA from '@/components_new/design/CTA';  
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Design || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <Hero />
      <OurMission />
      <FeatureV2 />
      <HowItWorks />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
