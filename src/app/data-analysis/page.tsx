import DataHero from '@/components_new/data-analysis/DataHero';
import DataMission from '@/components_new/data-analysis/DataMission';
import DataCapabilities from '@/components_new/data-analysis/DataCapabilities';
import DataHowItWorks from '@/components_new/data-analysis/DataHowItWorks';
import DataFaq from '@/components_new/data-analysis/DataFaq';
import DataCTA from '@/components_new/data-analysis/DataCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Data Analytics || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <DataHero />
      <DataMission />
      <DataCapabilities />
      <DataHowItWorks />
      <DataFaq />
      <DataCTA />
    </main>
  );
};

export default page;
