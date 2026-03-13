import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import AiChatbot from '@/components_new/shared/AiChatbot';
import HeroCardImg from './HeroCardImg';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1} instant>
      <section
        className="mx-[8px] mt-[8px] min-h-[950px] overflow-hidden rounded-2xl bg-linear-to-b from-[#1D74BA] to-[#edf2ff] md:rounded-3xl lg:min-h-[1150px] lg:rounded-4xl xl:rounded-[56px] pb-20"
        aria-label="Hero section - AI platform introduction">
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

            {/* credit card round img  */}
            <div className="mt-20 flex justify-center">
              <RevealAnimation delay={0.9} instant>
                <HeroCardImg />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Hero.displayName = 'Hero';
export default Hero;
