import TalentHero from '@/components_new/talent-services/TalentHero';
import TalentMission from '@/components_new/talent-services/TalentMission';
import TalentCapabilities from '@/components_new/talent-services/TalentCapabilities';
import TalentHowItWorks from '@/components_new/talent-services/TalentHowItWorks';
import TalentFaq from '@/components_new/talent-services/TalentFaq';
import TalentCTA from '@/components_new/talent-services/TalentCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Talent Services || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <TalentHero />
      <TalentMission />
      <TalentCapabilities />
      <TalentHowItWorks />
      <TalentFaq />
      <TalentCTA />
    </main>
  );
};

export default page;
