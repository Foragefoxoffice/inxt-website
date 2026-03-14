import CyberHero from '@/components_new/cyber-security/CyberHero';
import CyberMission from '@/components_new/cyber-security/CyberMission';
import CyberCapabilities from '@/components_new/cyber-security/CyberCapabilities';
import CyberHowItWorks from '@/components_new/cyber-security/CyberHowItWorks';
import CyberFaq from '@/components_new/cyber-security/CyberFaq';
import CyberCTA from '@/components_new/cyber-security/CyberCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cyber Security || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <CyberHero />
      <CyberMission />
      <CyberCapabilities />
      <CyberHowItWorks />
      <CyberFaq />
      <CyberCTA />
    </main>
  );
};

export default page;
