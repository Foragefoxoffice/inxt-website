import RequestDemo from '@public/images/ns-img-207.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import DownloadApp from './DownloadApp';
import Process from './Process';

interface Service {
  id: string;
  text: string;
}

const servicesData: Service[] = [
  {
    id: '1',
    text: 'Digital customer onboarding and identity verification',
  },
  {
    id: '2',
    text: 'Customer service and engagement management',
  },
  {
    id: '3',
    text: 'Customer communication and interaction tracking',
  },
  {
    id:'4',
    text:'Customer behavior analytics and experience insights'
  },
  {
    id:'5',
    text:'Customer lifecycle management and retention strategies'
  }
];

const Services = () => {
  return (
    <section className="relative py-16 md:py-20 lg:pt-[40px] xl:pt-[40px]">
      <div className="main-container">
        {/* Request demo */}
        <div className="my-24 lg:my-[100px]">
          <div className="bg-background-2 dark:bg-background-5 flex flex-col gap-y-14 rounded-2xl px-6 py-10 sm:px-8 sm:py-10 md:px-[42px] md:py-14 lg:flex-row lg:gap-20 lg:rounded-4xl xl:gap-[165px]">
            <div className="flex-1">
              <div>
                <div className="mb-6 space-y-3 md:mb-8">
                  <RevealAnimation delay={0.1}>
                    <h2 className="xl:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5 md:max-w-[620px]">
                      Applications of CustomerVerse
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p>CustomerVerse enables organizations to deliver seamless digital engagement experiences by connecting customer interactions, service operations, and analytics across the entire customer lifecycle.</p>
                  </RevealAnimation>
                </div>
                <ul className="mb-10 space-y-3 sm:mb-14 md:space-y-4">
                  {servicesData.map((service, index) => (
                    <RevealAnimation key={service.id} delay={0.3 + index * 0.1}>
                      <li className="flex items-center gap-2.5 sm:gap-3">
                        <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={7}
                            viewBox="0 0 10 7"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                              className="dark:fill-secondary fill-white"
                            />
                          </svg>
                        </span>
                        <p className="text-secondary dark:text-accent">{service.text}</p>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <RevealAnimation delay={0.7}>
                <figure className="w-full max-w-full overflow-hidden rounded-3xl lg:max-w-[521px]">
                  <Image src={RequestDemo} alt="services" className="h-full w-full" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default Services;
