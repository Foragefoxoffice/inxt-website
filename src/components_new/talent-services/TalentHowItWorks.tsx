import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import StepCard, { StepCardProps } from '@/components_new/shared/StepCard';
import StepDirection from '@/components_new/shared/StepDirection';

const TalentHowItWorks = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Consultation & Strategy',
      description: 'We collaborate with your leadership team to understand business objectives, define hiring requirements, and create a tailored recruitment strategy.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Sourcing & Screening',
      description: 'Our recruitment specialists identify and evaluate qualified candidates using targeted sourcing strategies and structured screening processes.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Onboarding & Integration',
      description: 'We assist with onboarding processes to ensure new hires integrate smoothly into your teams and operational workflows.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Ongoing Support',
      description: 'Our partnership continues beyond placement, providing ongoing support to ensure long-term talent success and retention.',
    },
  ];

  return (
    <section className="pt-10 pb-12 md:pb-16 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-20" aria-labelledby="how-it-works-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge bg-[#D3E7F8]">How It Works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">
                End-to-End Recruitment Process
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-[#323A44] max-w-[700px] mx-auto" itemProp="description">
                Our structured recruitment process ensures that organizations find the right talent efficiently while maintaining quality and alignment with business goals.
              </p>
            </RevealAnimation>
          </div>
          <div className="relative flex items-center justify-center gap-x-3 gap-y-6 max-xl:flex-wrap" aria-label="Step-by-step process">
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard key={step.id} {...step} className={`${cn(index % 2 === 0 ? 'bg-background-3' : 'bg-[#D3E7F8]')} lg:min-h-[430px]`} />
              </RevealAnimation>
            ))}
            <RevealAnimation delay={0.6} direction="left">
              <StepDirection className="left-[23.5%] md:block" />
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <StepDirection className="left-1/2 -translate-x-1/2 lg:block" />
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="left">
              <StepDirection className="right-[23.5%] md:block" />
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

TalentHowItWorks.displayName = 'TalentHowItWorks';
export default TalentHowItWorks;
