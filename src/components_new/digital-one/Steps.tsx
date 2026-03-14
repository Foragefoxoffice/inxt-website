import Step1 from '@public/images/ns-img-210.png';
import Step2 from '@public/images/ns-img-211.png';
import Step3 from '@public/images/ns-img-212.png';
import Step2Dark from '@public/images/ns-img-dark-143.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

type StaticImageData = typeof Step1;

interface Step {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageDark?: StaticImageData;
}

const stepsData: Step[] = [
  {
    id: '1',
    title: 'Enterprise System Integration',
    description: 'Connect with enterprise applications to synchronize operational and customer data.',
    image: Step1,
  },
  {
    id: '2',
    title: 'CRM & Customer Engagement Platforms',
    description: 'Integrate with CRM tools to manage customer relationships and engagement.',
    image: Step2,
    imageDark: Step2Dark,
  },
  {
    id: '3',
    title: 'Analytics & Digital Experience Platforms',
    description: 'Leverage analytics platforms to gain insights into digital engagement and performance.',
    image: Step3,
  }
];

const Steps = () => {
  return (
    <section
      className="bg-background-2 dark:bg-background-5 relative py-16 md:py-20 lg:py-[100px] xl:py-[200px]"
      aria-label="Hero section">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-10 max-lg:justify-items-center lg:gap-10 xl:gap-[68px]">
          <div className="col-span-12 lg:sticky lg:top-28 lg:col-span-6">
            <div className="space-y-5 text-center md:space-y-8 lg:space-y-14 lg:text-left">
              <div className="space-y-1 sm:space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="mx-auto w-full sm:max-w-[629px] xl:mx-0">Seamless Integration with Enterprise Systems</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p>DigitalOne integrates with enterprise applications, CRM platforms, analytics systems, and digital services to create a connected digital ecosystem.</p>
                </RevealAnimation>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <StackCardWrapper
              topOffset="11vh"
              gap="24px"
              initDelay={100}
              className="mx-auto w-full max-w-full sm:max-w-[60%] md:max-w-[50%] lg:mx-0 lg:max-w-full lg:flex-1">
              {stepsData.map((step) => (
                <StackCardItem key={step.id}>
                  <div className="max-w-[383px] max-sm:min-h-[400px] sm:max-w-[483px]">
                    <div className="relative z-20 flex w-full items-center justify-center overflow-hidden rounded-[20px] p-2">
                      <div 
                        className="absolute inset-0 -z-10" 
                        style={{ background: 'linear-gradient(to top left, #ffffff 50%, #22D1EE, #3D5AF1)' }} 
                      />
                      <div className="relative z-10 w-full space-y-6 rounded-[14px] bg-white p-5 sm:p-8 dark:bg-black">
                        <div className="space-y-1">
                          <p className="md:text-heading-5 text-heading-6 text-secondary dark:text-accent">
                            {step.title}
                          </p>
                          <p className="w-full max-w-[294px]">{step.description}</p>
                        </div>
                        <figure className="w-full max-w-full overflow-hidden rounded-2xl sm:max-w-[403px]">
                          {step.imageDark ? (
                            <>
                              <Image src={step.image} alt="step" className="size-full dark:hidden" />
                              <Image src={step.imageDark} alt="step" className="hidden size-full dark:block" />
                            </>
                          ) : (
                            <Image src={step.image} alt="step" />
                          )}
                        </figure>
                      </div>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
