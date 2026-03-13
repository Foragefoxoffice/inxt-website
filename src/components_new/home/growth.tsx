import RevealAnimation from '../animation/RevealAnimation';

const Growth = () => {
  return (
    <section className="xl:py-[200px] lg:py-[100px] py-16 md:py-20 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-3 text-center mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>
              Digital Platforms for <span className="text-[#3D5AF1]">Modern </span>Operations
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[514px] mx-auto">
              Scalable digital platforms designed to support core business operations, streamline workflows, and enable seamless integration across systems.
            </p>
          </RevealAnimation>
        </div>
        <div>
          <RevealAnimation delay={0.4}>
            <div className="flex py-6 md:flex-row flex-col md:px-0 px-6 bg-secondary dark:bg-background-6 rounded-[20px]">
              <div className="py-6 lg:space-y-6 space-y-3 flex-1 md:border-r md:border-b-0 border-r-accent/20 border-b border-b-accent/20 dark:border-r-stroke-8 dark:border-b-stroke-8">
                <div className="flex items-center justify-center">
                  <span className="ns-shape-40 text-[50px] lg:text-[72px] text-accent block"> </span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-white lg:text-heading-5 sm:text-heading-6 text-tagline-1 font-normal">
                    InsurePrime
                  </h3>
                  <p className="mx-auto max-w-[385px] text-accent/60 lg:text-heading-6 text-tagline-1">
                    Comprehensive platform designed to support insurance operations including policy administration, claims management, underwriting, and customer servicing.
                  </p>
                </div>
              </div>
              <div className="py-6 space-y-6 flex-1">
                <div className="flex items-center justify-center">
                  <span className="ns-shape-47 text-[50px] lg:text-[72px] text-accent block"> </span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-white lg:text-heading-5 sm:text-heading-6 text-tagline-1 font-normal">
                    FinPrime
                  </h3>
                  <p className="mx-auto max-w-[301px] text-accent/60 lg:text-heading-6 text-tagline-1">
                    Financial management platform that simplifies accounting operations, reconciliation, and financial reporting through integrated digital workflows.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Growth;
