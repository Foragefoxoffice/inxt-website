import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import StepCard, { StepCardProps } from '@/components_new/shared/StepCard';
import StepDirection from '@/components_new/shared/StepDirection';

const HowItWorks = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Research & Discovery',
      description: 'We begin by understanding your business goals, user needs, and market landscape to ensure a strong foundation.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Prototyping & Wireframing',
      description: 'Low- and high-fidelity prototypes are created to visualize structure, flow, and interactions before development begins.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'UI/UX Design',
      description: 'User-centered interfaces are designed to be intuitive, engaging, and aligned with your brand identity.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Testing & Iteration',
      description: 'Designs and features are tested with real users and iterated for continuous improvement and optimal performance.',
    },
  ];

  return (
    <section
      className="pt-10 pb-12 md:pb-16 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-20"
      aria-labelledby="how-it-works-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">How it works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">
                From Vision to Execution
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-[#323A44]" itemProp="description">
                Our process focuses on understanding your business needs and customer expectations todesign custom solutions that align with your goals.
              </p>
            </RevealAnimation>
          </div>
          {/* cards  */}
          <div
            className="relative flex items-center justify-center gap-x-3 gap-y-6 max-xl:flex-wrap"
            aria-label="Step-by-step process to use NextSaaS">
            {/* card one  */}
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard key={step.id} {...step} className={`${cn(index % 2 === 0 ? 'bg-background-3' : 'bg-[#D3E7F8]')} min-h-[430px]`} />
              </RevealAnimation>
            ))}

            {/* -> line 1  */}
            <RevealAnimation delay={0.6} direction="left">
              <StepDirection className="left-[23.5%] md:block" />
            </RevealAnimation>
            {/* -> line 2  */}
            <RevealAnimation delay={0.4} direction="left">
              <StepDirection className="left-1/2 -translate-x-1/2 lg:block" />
            </RevealAnimation>
            {/* -> line 3  */}
            <RevealAnimation delay={0.8} direction="left">
              <StepDirection className="right-[23.5%] md:block" />
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

HowItWorks.displayName = 'HowItWorks';
export default HowItWorks;
