import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Operational Efficiency',
    icon: 'ns-shape-32',
    description: 'Streamline insurance workflows and improve operational productivity across policy management, claims processing, and underwriting.',
    link: '#',
  },
  {
    id: 2,
    title: 'Faster Product Innovation',
    icon: 'ns-shape-35',
    description: 'Launch new insurance products faster by using flexible digital platforms designed for modern insurance operations.',
    link: '#',
  },
  {
    id: 3,
    title: 'Digital Customer Engagement',
    icon: 'ns-shape-52',
    description: 'Enhance customer service through digital platforms that support seamless interactions and improved customer experiences.',
    link: '#',
  },
];

const CaseStudy = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] text-center lg:text-left">
          <RevealAnimation delay={0.2}>
            <span className="badge bg-[#D3E7F8] mb-5">Business Benefits</span>
          </RevealAnimation>
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-end">
            <RevealAnimation delay={0.3}>
              <h2>
                How InsurePrime Improves Insurance Operations
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[518px]">
                InsurePrime helps insurance organizations streamline operations, reduce manual processes, and deliver better digital experiences while enabling scalable growth.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="md:mb-14 grid grid-cols-12 md:gap-x-8 max-sm:gap-y-12 items-center">
          {data.map((item) => (
            <RevealAnimation key={item.id} delay={0.5 + item.id * 0.1}>
              <div className="col-span-12 md:col-span-4 flex flex-col items-start space-y-6">
                <span className={cn('text-[52px] text-secondary dark:text-accent', item.icon)}> </span>
                <div className="space-y-1">
                  <h5 className="max-md:text-heading-6">{item.title}</h5>
                  <p className="max-w-[337px]">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
