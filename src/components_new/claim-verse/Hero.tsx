import heroBanner from '@public/images/ns-img-327.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import FloatingAnimation from '../animation/FloatingAnimation';
import CtaInputForm from '@/components_new/shared/cta/CtaInputForm';
import heroPulse1 from '@public/images/her-assist-01.svg';
import heroPulse2 from '@public/images/hero-asset-3-01.svg';
import heroPulse3 from '@public/images/hero-assist-4-01.svg';
import heroPulse4 from '@public/images/hero-assist.svg';
import { Button } from '@/components/ui/button/Button';

const Hero = () => {
  return (
    <section className="pt-12 max-[1920px]:px-5">
      <div className="bg-background-12 border-background-12 relative mx-auto -mb-2 max-w-[1880px] overflow-hidden rounded-3xl border pt-20 md:pt-30 xl:rounded-4xl">
        <RevealAnimation delay={0.3} direction="up" instant>
          <div className="before:bg-stroke-3 after:bg-stroke-3 absolute top-0 left-0 z-10 hidden h-full w-full before:absolute before:top-0 before:left-[7%] before:z-10 before:h-full before:w-px before:content-[''] after:absolute after:top-0 after:right-[7%] after:z-10 after:h-full after:w-px after:content-[''] md:block 2xl:before:left-[16%] 2xl:after:right-[16%]">
            <div className="bg-stroke-3 before:ring-stroke-3 after:ring-stroke-3 absolute top-[44%] h-px w-full before:absolute before:-top-2 before:left-[6.3%] before:z-20 before:size-3 before:rounded-full before:bg-white before:ring-6 before:drop-shadow-[0,1px,2px,#AFB9C6] before:content-[''] after:absolute after:-top-[7px] after:right-[6.3%] after:z-20 after:size-3 after:rounded-full after:bg-white after:ring-6 after:drop-shadow-[0,1px,2px,#AFB9C6] after:content-[''] xl:top-[43%] 2xl:before:left-[15.7%] 2xl:after:right-[15.7%]" />
          </div>
        </RevealAnimation>
         <div className="hidden lg:block absolute top-0 left-0 z-0 h-full w-full">
          <FloatingAnimation className="absolute top-20 left-5 z-0 rotate-5" duration={3} yDelta={15}>
            <Image src={heroPulse1} alt="Hero pulse 1" className="w-50" />
          </FloatingAnimation>
          <FloatingAnimation className="absolute top-20 right-5 z-0 -rotate-5" duration={3.5} yDelta={10} delay={0.5}>
            <Image src={heroPulse2} alt="Hero pulse 2" className="w-50" />
          </FloatingAnimation>
          <FloatingAnimation className="absolute top-100 right-30 z-0 rotate-5" duration={4} yDelta={20} delay={1}>
            <Image src={heroPulse3} alt="Hero pulse 3" />
          </FloatingAnimation>
          <FloatingAnimation className="absolute top-100 left-30 z-0 -rotate-5" duration={3.2} yDelta={12} delay={0.2}>
            <Image src={heroPulse4} alt="Hero pulse 4" />
          </FloatingAnimation>
        </div>
        <div className="main-container relative z-30">
          <div className="mb-12 text-center lg:mb-20 xl:mb-33">
            <RevealAnimation delay={0.1}>
              <h1 className="mb-3 font-medium opacity-0 leading-[1.2]">
                <span className="hero-text-gradient hero-text-color-2 block">
                  ClaimVerse <br className="hidden md:block" /> AI-Powered Insurance <br className="hidden md:block" /> Claims Management Platform
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto mb-7 max-w-[750px] md:mb-14">
                ClaimVerse is an intelligent digital platform designed to streamline the entire insurance claims lifecycle—from claim initiation and verification to settlement and reporting. With AI-driven automation, real-time insights, and digital workflows, ClaimVerse helps insurers accelerate claim processing, improve transparency, and deliver faster, more reliable claims experiences for customers.
              </p>
            </RevealAnimation>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex justify-center w-full">
                <CtaInputForm 
                  btnClass="btn-md"
                  btnStyle={{ background: '#000000', color: '#ffffff', borderColor: '#000000' , width: '100%'}}
                  ctaBtnText="Get Information"
                />
              </div>
              <Button 
                btnClass="btn-md btn-white hover:btn-primary border-0"
                className="mt-6"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
          {/* banner */}
          <RevealAnimation delay={0.4} direction="up" instant>
            <figure className="mx-auto -mb-3 max-w-[620px] lg:max-w-[840px] xl:max-w-[1000px] 2xl:max-w-[1016px] min-[1800px]:max-w-[1166px]!">
              <Image src={heroBanner} alt="Hero banner" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
