import gradient36 from '@public/images/ns-img-524.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import TimelineSVG from './TimelineSVG';
import logoIcon from '@public/technext-img/home/h-logo2.svg';
const timelineData = [
  {
    id: 1,
    title: 'Seamless Modernization',
    delay: '1.2',
    bgClass: 'bg-background-1 dark:bg-background-7',
    textClass: 'text-secondary/60 dark:text-accent/60',
    items: [
      'Modernize legacy AS400 and core systems',
      'Maintain business continuity with minimal disruption',
      'Enable faster integration with modern applications',
    ],
  },
  {
    id: 2,
    title: 'Intelligent Automation',
    delay: '1.3',
    bgClass: 'bg-secondary dark:bg-accent',
    textClass: 'text-accent dark:text-secondary',
    items: [
      'Use AI to automate underwriting, claims, and workflows',
      'Reduce manual processes and operational complexity',
      'Improve operational efficiency and decision-making',
    ],
  },
  {
    id: 3,
    title: 'Future-Ready Architecture',
    delay: '1.4',
    bgClass: 'bg-background-1 dark:bg-background-7',
    textClass: 'text-secondary/60 dark:text-accent/60',
    items: [
      'Introduce scalable and composable system architecture',
      'Accelerate product innovation and digital services',
      'Build a flexible technology foundation for growth',
    ],
  },
];

const TimelineIntegration = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="bg-background-3 dark:bg-background-5 dark:border-background-9 relative mx-5 max-w-[1464px] overflow-hidden rounded-[20px] border-8 border-white px-2.5 py-10 sm:border-[12px] sm:px-5 xl:px-[50px] xl:py-[120px] 2xl:mx-auto">
        {/* background image  */}

        <RevealAnimation delay={0.7} direction="up">
          <div className="pointer-events-none absolute -top-[20%] -right-[54%] max-w-[420px] rotate-90 select-none max-[400px]:-top-[20%] max-[400px]:-right-[70%] max-[400px]:rotate-[73deg] min-[550px]:-right-[20%] sm:-top-[24%] md:-top-[30%] md:-right-[28%] md:max-w-[700px] md:rotate-[6deg] lg:-top-[44%] lg:-right-[20%] xl:-right-[18%] xl:max-w-[900px] 2xl:max-w-[1080px]">
            <Image
              src={gradient36}
              alt="Timeline integration vector background"
              className="h-full w-full object-cover"
            />
          </div>
        </RevealAnimation>
        <div className="mb-14 text-center md:mb-20 lg:mb-32 2xl:mb-[183px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-3.5 md:mb-5">Core Modernization</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3 max-w-[700px] mx-auto">
              AI-Driven Modernization for <span className="text-[#3D5AF1] inline-block">Legacy Insurance</span> Systems
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto lg:max-w-[560px]">
              Transform legacy AS400 and core systems into modern digital infrastructure using AI, scalable architecture, and seamless integrations. Modernize operations without disrupting existing business workflows while enabling faster innovation and improved efficiency.
            </p>
          </RevealAnimation>
          <div className="relative z-30 flex justify-center items-center">
            <RevealAnimation delay={0.4}>
              <div className="sm:text-heading-5 text-heading-6 bg-black relative z-10 mt-14 inline-block rounded-[365px] font-normal w-[100px] h-[100px] flex justify-center items-center 2xl:mt-[70px]">
                <Image src={logoIcon} alt="NextSaaS" className="h-auto w-[60px]" priority />
              </div>
            </RevealAnimation>

            {/* timeline svg  */}
            <TimelineSVG />
          </div>
        </div>
        <div className="relative z-30 grid grid-cols-12 gap-6">
          {timelineData.map((card, index) => (
            <RevealAnimation delay={Number(card.delay)} key={card.id}>
              <div className={`${card.bgClass} col-span-12 rounded-[20px] p-8 md:col-span-6 lg:col-span-4`}>
                <h3
                  className={`sm:text-heading-5 text-heading-6 mb-4 font-normal ${index === 1 ? 'text-accent dark:text-secondary' : ''}`}>
                  {card.title}
                </h3>
                <ul className="ml-4 space-y-4 sm:ml-6 sm:space-y-6">
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex + 1}
                      className={`text-tagline-2 sm:text-tagline-1 ${card.textClass} list-disc font-normal`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineIntegration;
