import QualityHero from '@/components_new/quality-analysis/QualityHero';
import QualityMission from '@/components_new/quality-analysis/QualityMission';
import QualityCapabilities from '@/components_new/quality-analysis/QualityCapabilities';
import QualityHowItWorks from '@/components_new/quality-analysis/QualityHowItWorks';
import QualityFaq from '@/components_new/quality-analysis/QualityFaq';
import QualityCTA from '@/components_new/quality-analysis/QualityCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Quality Analysis || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <QualityHero />
      <QualityMission />
      <QualityCapabilities />
      <QualityHowItWorks />
      <QualityFaq />
      <QualityCTA />
    </main>
  );
};

export default page;
