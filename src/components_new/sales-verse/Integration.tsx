'use client';
import RevealAnimation from '../animation/RevealAnimation1';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const stackCards = [
  {
    icon: 'ns-shape-19',
    title: 'Lead Conversion Improvement',
    description: 'Higher sales productivity',
  },
  {
    icon: 'ns-shape-35',
    title: 'Sales Performance Visibility',
    description: 'Real-time insights',
  },
  {
    icon: 'ns-shape-4',
    title: 'Customer Onboarding Acceleration',
    description: 'Faster onboarding',
  },
  {
    icon: 'ns-shape-21',
    title: 'Data-Driven Decisions',
    description: 'Analytics-based strategy',
  },
  {
    icon: 'ns-shape-21',
    title: 'Distribution Network Scaling',
    description: 'Efficient growth',
  }
];

const Integration = () => {
  return (
    <section className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex flex-col items-start gap-y-10 pt-14 pb-14 md:gap-y-20 md:pt-16 md:pb-16 lg:flex-row lg:gap-[100px] lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[150px]">
          <div className="mx-auto w-full max-w-[520px] text-center lg:sticky lg:top-28 lg:mx-0 lg:max-w-full lg:flex-1 lg:text-left">
            <RevealAnimation delay={0.2}>
              <span className="badge bg-[#E9F3FC] mb-5"> Business Benefits </span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 whitespace-normal">
                Drive Sales Growth and Operational Efficiency
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mb-14 lg:max-w-[620px]">
                Improve lead conversion, gain real-time sales visibility, and streamline onboarding with intelligent automation and analytics.
              </p>
            </RevealAnimation>
          </div>
          <StackCardWrapper
            topOffset="15vh"
            gap="24px"
            initDelay={100}
            className="mx-auto w-full max-w-[90%] md:max-w-[65%] lg:mx-0 lg:max-w-full lg:flex-1">
            {stackCards.map((card, index) => (
              <StackCardItem key={index + 1}>
                <div className="bg-background-1 dark:bg-background-6 border-stroke-1/90 dark:border-stroke-5 space-y-6 rounded-xl border p-8 max-sm:min-h-[255px]">
                  <span className={`block ${card.icon} text-heading-2 text-secondary dark:text-accent`} />
                  <div className="space-y-1">
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </StackCardItem>
            ))}
          </StackCardWrapper>
        </div>
      </div>
    </section>
  );
};

export default Integration;
