import OracleHero from '@/components_new/oracle-coe/OracleHero';
import OracleMission from '@/components_new/oracle-coe/OracleMission';
import OracleCapabilities from '@/components_new/oracle-coe/OracleCapabilities';
import OracleHowItWorks from '@/components_new/oracle-coe/OracleHowItWorks';
import OracleFaq from '@/components_new/oracle-coe/OracleFaq';
import OracleCTA from '@/components_new/oracle-coe/OracleCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Oracle COE || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <OracleHero />
      <OracleMission />
      <OracleCapabilities />
      <OracleHowItWorks />
      <OracleFaq />
      <OracleCTA />
    </main>
  );
};

export default page;
