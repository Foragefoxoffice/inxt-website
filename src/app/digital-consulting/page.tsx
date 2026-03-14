import DigitalHero from '@/components_new/digital-consulting/DigitalHero';
import DigitalMission from '@/components_new/digital-consulting/DigitalMission';
import DigitalCapabilities from '@/components_new/digital-consulting/DigitalCapabilities';
import DigitalHowItWorks from '@/components_new/digital-consulting/DigitalHowItWorks';
import DigitalFaq from '@/components_new/digital-consulting/DigitalFaq';
import DigitalCTA from '@/components_new/digital-consulting/DigitalCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Digital Consulting || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <DigitalHero />
      <DigitalMission />
      <DigitalCapabilities />
      <DigitalHowItWorks />
      <DigitalFaq />
      <DigitalCTA />
    </main>
  );
};

export default page;
