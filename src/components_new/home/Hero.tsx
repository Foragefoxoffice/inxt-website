import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import AiChatbot from '@/components_new/shared/AiChatbot';
import HeroCardImg from './HeroCardImg';
import heroPulse1 from '@public/images/her-assist-01.svg';
import heroPulse2 from '@public/images/hero-asset-3-01.svg';
import heroPulse3 from '@public/images/hero-assist-4-01.svg';
import heroPulse4 from '@public/images/hero-assist.svg';
import FloatingAnimation from '../animation/FloatingAnimation';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1} instant>
      <section
        className="mx-[8px] mt-[8px] min-h-[750px] overflow-hidden rounded-2xl bg-linear-to-b from-[#1D74BA] to-[#edf2ff] md:rounded-3xl lg:min-h-[950px] lg:rounded-4xl xl:rounded-[56px] pb-20"
        aria-label="Hero section - AI platform introduction">
           <div className="hidden lg:block absolute top-0 left-0 z-0 h-full w-full">
          <FloatingAnimation className="absolute top-50 left-5 z-0 rotate-5" duration={3} yDelta={15}>
            <Image src={heroPulse1} alt="Hero pulse 1" className="w-30" />
          </FloatingAnimation>
          <FloatingAnimation className="absolute top-50 right-5 z-0 -rotate-5" duration={3.5} yDelta={10} delay={0.5}>
            <Image src={heroPulse2} alt="Hero pulse 2" className="w-30" />
          </FloatingAnimation>
          <FloatingAnimation className="absolute top-120 right-30 z-0 w-30 rotate-5" duration={4} yDelta={20} delay={1}>
            <Image src={heroPulse3} alt="Hero pulse 3" />
          </FloatingAnimation>
          <FloatingAnimation className="absolute top-120 left-30 z-0 w-30 -rotate-5" duration={3.2} yDelta={12} delay={0.2}>
            <Image src={heroPulse4} alt="Hero pulse 4" />
          </FloatingAnimation>
        </div>
        <div className="main-container">
          <div className="relative pt-[100px] lg:pt-[180px]">
            <div className="flex items-center justify-center gap-x-14">
              <div className="space-y-13 lg:space-y-16">
                <div className="space-y-8">
                  <div className="space-y-3 text-center">
                    <RevealAnimation delay={0.5} instant>
                      <h1 className="mx-auto max-w-[900px] font-medium text-white" itemProp="headline">
                        AI-Powered Platforms for Modern Insurance Operations
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6} instant>
                      <p
                        className="text-accent/80 mx-auto max-w-[620px] text-lg leading-[150%] font-normal lg:max-w-[750px]"
                        itemProp="description">
                        From policy administration and claims automation to financial management and AI-driven insights, our platforms help insurers modernize legacy systems, improve operational efficiency and deliver smarter digital experiences.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>

                <RevealAnimation delay={0.7} instant>
                  <AiChatbot />
                </RevealAnimation>
  
              </div>
            </div>

          
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Hero.displayName = 'Hero';
export default Hero;
