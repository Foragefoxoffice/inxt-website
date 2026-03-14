import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Number = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-[10px] lg:py-[50px] xl:py-[80px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0">
          {/* heading   */}
          <div className="space-y-5 text-center xl:max-w-[442px] xl:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge bg-[#D3E7F8]">Customer Impact</span>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Delivering Real Business Value</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[780px]">
                  DEX helps organizations respond faster to operational events, gain deeper visibility into performance, and enable consistent data-driven decisions across teams.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* number cards  */}
          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* business card  */}
            <RevealAnimation delay={0.4} direction="up">
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8 min-h-[280px]">
                {/* card heading    */}
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Operational Decision-Making</h3>
                  <span className="ns-shape-47 text-secondary dark:text-accent text-[52px]"> </span>
                </div>
                {/* card description  */}
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={3} speed={1500} interval={150}>
                      3
                    </NumberAnimation>

                    <span className="font-inherit">× Faster</span>
                  </p>
                </div>
              </div>
            </RevealAnimation>
            {/* bank card  */}
            <RevealAnimation delay={0.5}>
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8 min-h-[280px]">
                {/* card heading    */}
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Improvement in Operational Efficiency</h3>
                  <span className="ns-shape-57 text-secondary dark:text-accent text-[52px]"> </span>
                </div>
                {/* card description  */}
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={40} speed={1500} interval={150}>
                      40
                    </NumberAnimation>
                    <span className="font-inherit">%+</span>
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Number.displayName = 'Number';
export default Number;
