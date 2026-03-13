import { cn } from '@/utils/cn';
import holdMobile from '@public/images/ns-img-206.png';
import gradient from '@public/images/ns-img-503.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Limited Innovation',
    description: 'Legacy systems make it difficult to quickly launch new products or adapt to changing market demands.',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Operational Inefficiencies',
    description: 'Manual processes and disconnected systems increase operational complexity and reduce productivity.',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'High Maintenance Costs',
    description: 'A significant portion of IT resources is spent maintaining outdated infrastructure instead of driving innovation.',
  },
  {
    id: 4,
    icon: 'ns-shape-35',
    title: 'Faster Product Innovation',
    description: 'Modern digital platforms enable rapid product development and faster time-to-market.',
  },

  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Automated Workflows',
    description: 'Intelligent automation streamlines operations, reduces manual tasks, and improves efficiency.',
  },
  {
    id: 6,
    icon: 'ns-shape-30',
    title: 'Scalable Digital Architecture',
    description: 'Modern systems support seamless integrations, scalability, and long-term technology growth.',
  },
];

const WhyChooseNextSaas = () => {
  return (
    <section className="py-20 md:py-[90px] lg:py-[100px]" aria-label="Why choose NextSaaS">
      <div className="main-container">
        <div className="dark:bg-background-8 relative overflow-hidden rounded-4xl bg-white px-5 pt-16 max-lg:pb-10 sm:px-7 md:px-14 md:pt-[100px]">
          <RevealAnimation delay={0.8} duration={0.9} offset={200} direction="up">
            <figure className="pointer-events-none absolute top-[-407px] right-[-145px] size-[650px] rotate-[240deg] rounded-t-4xl opacity-90 select-none md:top-[-354px] md:right-[-149px] md:rotate-[238deg]">
              <Image src={gradient} alt="Gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="space-y-[70px]">
            {/* heading  */}
            <div className="space-y-[20px] text-center md:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-yellow">Business & Technology Alignment</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Bridging the Gap Between Business and IT</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Insurance organizations often face a disconnect between business goals and legacy technology limitations. Modernizing core systems helps align technology with business objectives, enabling faster innovation, improved operational efficiency, and better customer experiences.</p>
                </RevealAnimation>
              </div>
            </div>
            {/* content  */}
            <div className="mx-auto flex max-w-[1178px] flex-col items-center gap-10 lg:flex-row lg:gap-0">
              <div className="flex w-full flex-col gap-8 md:flex-row lg:mr-4 lg:flex-col xl:mr-0">
                <RevealAnimation delay={0.6} direction="left">
                  <div className="w-full space-y-3 md:max-w-[300px]">
                    <span className={cn('text-secondary dark:text-accent block text-[36px]', data[0].icon)} />
                    <div>
                      <h3 className="text-tagline-1 font-medium">{data[0].title}</h3>
                      <p className="text-tagline-2">{data[0].description}</p>
                    </div>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.7} direction="left">
                  <div className="w-full space-y-3 md:max-w-[300px]">
                    <span className={cn('text-secondary dark:text-accent block text-[36px]', data[1].icon)} />
                    <div>
                      <h3 className="text-tagline-1 font-medium">{data[1].title}</h3>
                      <p className="text-tagline-2">{data[1].description}</p>
                    </div>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.8} direction="left">
                  <div className="w-full space-y-3 md:max-w-[300px]">
                    <span className={cn('text-secondary dark:text-accent block text-[36px]', data[2].icon)} />
                    <div>
                      <h3 className="text-tagline-1 font-medium">{data[2].title}</h3>
                      <p className="text-tagline-2">{data[2].description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.7} duration={0.7} offset={80}>
                <figure className="order-first w-full flex-shrink-0 lg:order-none lg:mt-[66px] lg:mr-6 lg:h-[640px] lg:w-[538.95px] xl:mt-0 xl:mr-0">
                  <Image
                    src={holdMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="flex w-full flex-col gap-8 md:flex-row lg:ml-4 lg:flex-col xl:ml-0">
                {data.slice(3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="right" key={item.id}>
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <span className={cn('text-secondary dark:text-accent block text-[36px]', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNextSaas;
