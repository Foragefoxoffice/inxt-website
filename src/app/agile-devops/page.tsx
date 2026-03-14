import AgileHero from '@/components_new/agile-devops/AgileHero';
import AgileMission from '@/components_new/agile-devops/AgileMission';
import AgileCapabilities from '@/components_new/agile-devops/AgileCapabilities';
import AgileHowItWorks from '@/components_new/agile-devops/AgileHowItWorks';
import AgileFaq from '@/components_new/agile-devops/AgileFaq';
import AgileCTA from '@/components_new/agile-devops/AgileCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Agile DevOps || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <AgileHero />
      <AgileMission />
      <AgileCapabilities />
      <AgileHowItWorks />
      <AgileFaq />
      <AgileCTA />
    </main>
  );
};

export default page;
