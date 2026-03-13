import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import HeroCardImg from './HeroCardImg';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1} instant>
      <section
        className="mx-[8px] mt-[8px] h-[830px] overflow-hidden rounded-2xl bg-linear-to-b from-[#1D74BA] to-[#edf2ff] max-[376px]:h-[850px] sm:h-[920px] md:rounded-3xl lg:h-[1078px] lg:rounded-4xl xl:rounded-[56px]"
        aria-label="Hero section - Financial management platform introduction">
        <div className="main-container">
          <div className="relative pt-[160px] lg:pt-[286px]">
            <div className="flex items-center justify-center gap-x-14">
              {/* text content  */}
              <div className="space-y-13 lg:space-y-16 xl:space-y-19">
                {/* content  */}
                <div className="space-y-8">
                  
                  {/* text  */}
                  <div className="space-y-3 text-center">
                    <RevealAnimation delay={0.5} instant>
                      <h1 className="mx-auto max-w-[900px] font-medium text-white" itemProp="headline">
                        AI-Powered Platforms for Modern Insurance Operations
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6} instant>
                      <p
                        className="text-accent/80 mx-auto max-w-[620px] text-lg leading-[150%] font-normal lg:max-w-[682px]"
                        itemProp="description">
                        From policy administration and claims automation to financial management and AI-driven insights, our platforms help insurers modernize legacy systems, improve operational efficiency and deliver smarter digital experiences.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>
  
              </div>
            </div>
            {/* credit card round img  */}
            <RevealAnimation delay={0.9} instant>
              <HeroCardImg />
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Hero.displayName = 'Hero';
export default Hero;
