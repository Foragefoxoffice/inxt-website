import AppHero from '@/components_new/app-dev-support/AppHero';
import AppMission from '@/components_new/app-dev-support/AppMission';
import AppCapabilities from '@/components_new/app-dev-support/AppCapabilities';
import AppHowItWorks from '@/components_new/app-dev-support/AppHowItWorks';
import AppFaq from '@/components_new/app-dev-support/AppFaq';
import AppCTA from '@/components_new/app-dev-support/AppCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'App Dev & Support || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <AppHero />
      <AppMission />
      <AppCapabilities />
      <AppHowItWorks />
      <AppFaq />
      <AppCTA />
    </main>
  );
};

export default page;
