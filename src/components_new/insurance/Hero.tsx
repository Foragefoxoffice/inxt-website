/* hero section  */
'use client';
import { useModalContext } from '@/context/ModalContext';
import avatar20 from '@public/images/ns-avatar-20.png';
import heroBg from '@public/images/ns-img-339.png';
import hero from '@public/images/ns-img-340.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import Link from 'next/link';
import HeroBottomOverlay from './HeroBottomOverlay';
import HeroDivider from './HeroDivider';
import HeroRating from './HeroRating';
const Hero = () => {
  const { videoModal } = useModalContext();
  return (
    <section className="relative overflow-hidden pt-[112px] pb-[80px] md:pb-[112px] lg:pt-[180px] lg:pb-[60px] xl:pt-[236px] xl:pb-0 2xl:pb-15">
      <RevealAnimation delay={0.1} offset={50} instant>
        <figure className="absolute inset-0 h-full w-full min-[2550px]:!h-[calc(100%-1px)]">
          <Image src={heroBg} alt="hero bg banner" className="h-full w-full object-cover" />
        </figure>
      </RevealAnimation>
      {/* section overlay for md devices  */}
      <div className="absolute left-1/2 size-full w-[120%] -translate-x-1/2 bg-linear-to-t from-white from-58% to-transparent blur-[18px] md:hidden" />
      <div className="main-container">
        <div className="relative w-full space-y-10 md:space-y-0">
          {/* hero img */}
          <RevealAnimation delay={0.1} offset={50} instant>
            <figure className="lp:!max-w-[1290px] lp:!h-[725px] bg-accent/40 mx-auto w-full max-w-[900px] overflow-hidden rounded-[20px] p-2 md:h-[384px] lg:h-[580px] xl:max-w-[1140px]">
              <Image src={hero} alt="hero" className="rounded-[16px] object-cover" />
            </figure>
          </RevealAnimation>
          {/* hero content  */}
          <div className="lp:!max-w-[1290px] lp:!bottom-[90px] bottom-[15%] z-1 mx-auto w-full max-w-[900px] md:absolute md:left-1/2 md:-translate-x-1/2 lg:bottom-[-9%] xl:bottom-[66px] xl:max-w-[1140px]">
            <div className="space-y-8 xl:space-y-10.5">
              {/* text + btn  */}
              <div className="space-y-7 xl:space-y-14">
                <div className="space-y-3 text-center md:text-left">
                  <RevealAnimation delay={0.2} offset={50} instant>
                    <h1>Digital Platforms for Modern Insurance Operations</h1>
                  </RevealAnimation>

                  <RevealAnimation delay={0.3} offset={50} instant>
                    <p className="max-w-[400px] text-center text-[18px] leading-[150%] font-normal md:max-w-[612px] md:text-left">
                      Automate insurance sales, policy management, and claims processing while modernizing legacy systems
                      with intelligent digital platforms.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section overlay for md or upper   */}

      <HeroBottomOverlay />
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
