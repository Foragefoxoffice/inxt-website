import heroBanner from '@public/images/ns-img-327.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import { Button } from '@/components/ui/button/Button';
import CtaInputForm from '../shared/cta/CtaInputForm';

const Hero = () => {
  return (
    <section className="pt-23 max-[1920px]:px-5">
      <div className="bg-background-12 border-background-12 relative mx-auto -mb-2 max-w-[1880px] overflow-hidden rounded-3xl border pt-20 md:pt-30 xl:rounded-4xl">
        <RevealAnimation delay={0.3} direction="up" instant>
          <div className="before:bg-stroke-3 after:bg-stroke-3 absolute top-0 left-0 z-10 hidden h-full w-full before:absolute before:top-0 before:left-[7%] before:z-10 before:h-[100%] before:w-px before:content-[''] after:absolute after:top-0 after:right-[7%] after:z-10 after:h-[100%] after:w-px after:content-[''] md:block 2xl:before:left-[16%] 2xl:after:right-[16%]">
            <div className="bg-stroke-3 before:ring-stroke-3 after:ring-stroke-3 absolute top-[44%] h-px w-[100%] before:absolute before:-top-2 before:left-[6.3%] before:z-20 before:size-3 before:rounded-full before:bg-white before:ring-6 before:drop-shadow-[0,1px,2px,#AFB9C6] before:content-[''] after:absolute after:-top-[7px] after:right-[6.3%] after:z-20 after:size-3 after:rounded-full after:bg-white after:ring-6 after:drop-shadow-[0,1px,2px,#AFB9C6] after:content-[''] xl:top-[43%] 2xl:before:left-[15.7%] 2xl:after:right-[15.7%]" />
          </div>
        </RevealAnimation>
        <div className="main-container relative z-30">
          <div className="mb-12 text-center lg:mb-20 xl:mb-33">
            <RevealAnimation delay={0.1}>
              <h1 className="mb-3 font-medium opacity-0 leading-[1.2]">
                <span className="hero-text-gradient hero-text-color-2 block">
                  Project Pulse <br className="hidden md:block" /> Project Management Platform
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto mb-7 max-w-[750px] md:mb-14">
                Project Pulse helps teams organize tasks, monitor project progress, and collaborate seamlessly across departments. With real-time insights and centralized project tracking, organizations can manage resources more effectively and deliver projects on time.
              </p>
            </RevealAnimation>

            <div className="flex flex-col items-center justify-center space-y-4">
                          <div className="flex justify-center w-full">
                            <CtaInputForm 
                              btnClass="btn-md"
                              btnStyle={{ background: '#000000', color: '#ffffff', borderColor: '#000000' }}
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
            <figure className="mx-auto -mb-3 max-w-[620px] min-[1800px]:!max-w-[1166px] lg:max-w-[840px] xl:max-w-[1000px] 2xl:max-w-[1016px]">
              <Image src={heroBanner} alt="Hero banner" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
