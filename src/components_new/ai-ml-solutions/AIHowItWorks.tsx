import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import StepCard, { StepCardProps } from '@/components_new/shared/StepCard';
import StepDirection from '@/components_new/shared/StepDirection';

const AIHowItWorks = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Research & Discovery',
      description: 'We analyze business challenges, data sources, and operational goals to define the AI strategy.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'AI Model Development',
      description: 'Custom machine learning models are designed and trained using advanced data science techniques.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Implementation & Testing',
      description: 'AI solutions are integrated with existing systems and validated for performance and accuracy.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Optimization & Continuous Learning',
      description: 'We monitor model performance and refine algorithms to ensure long-term success.',
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
              <span className="badge bg-[#D3E7F8]">How We Work</span>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">
                From Strategy to AI Implementation
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-[#323A44] max-w-[700px] mx-auto" itemProp="description">
                Our AI development process focuses on understanding business objectives, designing intelligent models, and deploying scalable AI solutions that drive measurable results.
              </p>
            </RevealAnimation>
          </div>
          {/* cards  */}
          <div
            className="relative flex items-center justify-center gap-x-3 gap-y-6 max-xl:flex-wrap"
            aria-label="Step-by-step process">
            {/* card one  */}
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard key={step.id} {...step} className={`${cn(index % 2 === 0 ? 'bg-background-3' : 'bg-[#D3E7F8]')} lg:min-h-[430px]`} />
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

AIHowItWorks.displayName = 'AIHowItWorks';
export default AIHowItWorks;
