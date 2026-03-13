import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const servicesData = [
  {
    slug: 'industry-expertise',
    icon: 'ns-shape-25',
    title: 'End-to-End Digital Transformation Solutions',
  },
  {
    slug: 'innovative-tech',
    icon: 'ns-shape-19',
    title: 'Innovation Tailored for the Insurance Industry',
  },
  {
    slug: 'global-scalability',
    icon: 'ns-shape-17',
    title: 'Rapid Implementation with Scalable Architecture',
  },
  {
    slug: 'client-centric',
    icon: 'ns-shape-34',
    title: 'Proven Track Record Across Diverse Markets',
  },
  {
    slug: 'operational-excellence',
    icon: 'ns-shape-2',
    title: 'Dedicated to Customer Success and Satisfaction',
  },
];

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px] lg:text-left">
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <RevealAnimation delay={0.3}>
              <h2>Why Choose Iorta TechNXT?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[518px] text-center lg:mx-0 lg:text-left">
                Iorta TechNXT drives fast, scalable digital transformation with a focus on insurance innovation and customer success.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mb-14 grid grid-cols-12 gap-y-8 md:gap-x-8">
          {servicesData.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.5 + index * 0.1}>
              <div
                className={cn(
                  'dark:bg-background-6 col-span-12 flex flex-col items-start space-y-6 rounded-[20px] bg-white px-6 py-8 sm:col-span-6',
                  index >= 3 ? 'lg:col-span-6' : 'lg:col-span-4',
                )}>
                <span className={cn('text-secondary dark:text-accent text-[52px]', item.icon)}> </span>
                <h5 className="max-md:text-heading-6 mb-2">{item.title}</h5>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
