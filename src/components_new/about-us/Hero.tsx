import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components_new/ui/button/LinkButton';
import HeroPerspective from '@/components/home/HeroPerspective';

const Hero = () => {
  return (
    <section className="bg-[url('/images/ns-img-55.svg')] bg-top bg-no-repeat pt-[160px] lg:pt-[180px] xl:pt-[228px] dark:bg-[url('/images/ns-img-dark-34.svg')]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="flex flex-col items-center">
            <div className="space-y-3 md:mx-10 md:space-y-4 lg:mx-0">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[842px] text-center">Empowering Insurers Simplifying Technology Accelerating Growth</h1>
              </RevealAnimation>
            </div>
          </div>
          {/* video  */}
          <HeroPerspective />
        </div>
      </div>
    </section>
  );
};

export default Hero;
