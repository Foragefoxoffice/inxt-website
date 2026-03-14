import ApiHero from '@/components_new/api-microservices/ApiHero';
import ApiMission from '@/components_new/api-microservices/ApiMission';
import ApiCapabilities from '@/components_new/api-microservices/ApiCapabilities';
import ApiHowItWorks from '@/components_new/api-microservices/ApiHowItWorks';
import ApiFaq from '@/components_new/api-microservices/ApiFaq';
import ApiCTA from '@/components_new/api-microservices/ApiCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'API & Microservices || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <ApiHero />
      <ApiMission />
      <ApiCapabilities />
      <ApiHowItWorks />
      <ApiFaq />
      <ApiCTA />
    </main>
  );
};

export default page;
