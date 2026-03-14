import { Metadata } from 'next';
import Hero from '@/components_new/core-mondernization/Hero';
import FeatureV3 from '@/components_new/core-mondernization/FeatureV3';
import WhyChooseNextSaas from '@/components_new/core-mondernization/WhyChooseNextSaas';
import FeatureV4 from '@/components_new/core-mondernization/FeatureV4';
import Features from '@/components_new/core-mondernization/Features';
import Services from '@/components_new/core-mondernization/Services';
import Number from '@/components_new/core-mondernization/Number';
import Feature from '@/components_new/core-mondernization/Feature';
import Steps from '@/components_new/core-mondernization/Steps';
import Integration from '@/components_new/core-mondernization/Integration';
import CTA from '@/components_new/core-mondernization/CTA';
import Faq from '@/components_new/core-mondernization/Faq';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Design || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />      
      <FeatureV3 />
      <WhyChooseNextSaas />
      <FeatureV4 />
      <Features />
      <Services />
      <Number />
      <Feature />
      <Steps />
      <Integration />
      <Faq />
      <CTA />
      
    </main>
  );
};

export default page;
