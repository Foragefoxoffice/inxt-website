
import CTA from '@/components_new/home/Cta';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Result from '@/components/home/Result';
import Steps from '@/components/home/Steps';
import VoiceSamples from '@/components/home/VoiceSamples';
import VoiceStyle from '@/components/home/VoiceStyle';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

import HeroFinMgmt from '@/components_new/home/Hero';
import Clients from '@/components_new/home/Clients';
import HowItsWork from '@/components_new/home/HowItsWork';
import TimelineIntegration from '@/components_new/home/TimelineIntegration';
import Services from '@/components_new/home/Services';
import Feature from '@/components_new/home/Feature';
import Growth from '@/components_new/home/growth';
import Ind from '@/components_new/home/ind';
import Expertise from '@/components_new/home/Expertise';
import AutomationPlatform from '@/components_new/home/AutomationPlatform';
import Testimonial from '@/components_new/home/Testimonial';
import Blog from '@/components_new/home/Blog';
// import CTA from '@/components_new/shared/cta/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Voice Generator - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <HeroFinMgmt />
      <Clients />
      <HowItsWork />
      <TimelineIntegration />
      <Services />
      <Feature />
      <Growth />
      <Ind />
      <Expertise />
      <AutomationPlatform />
      <Testimonial />
      <Blog/>
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Build a complete website using the"
        spanText="assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        btnClass="hover:btn-secondary dark:hover:btn-white"
        ctaBtnText="Get started"
      /> 

    </main>
  );
};

export default page;
