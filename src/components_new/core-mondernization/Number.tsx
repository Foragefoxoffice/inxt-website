import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Number = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0">
          {/* heading   */}
          <div className="space-y-5 text-center xl:max-w-[442px] xl:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge bg-[#D3E7F8]">Business Impact</span>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Driving Measurable Operational and Financial Outcomes</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[780px]">
                  Core modernization enables organizations to unlock measurable business value by reducing operational costs, improving efficiency, and accelerating innovation. By transforming legacy systems, insurers can streamline operations, launch new products faster, and deliver better customer experiences while improving overall business performance.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* number cards  */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* business card  */}
            <RevealAnimation delay={0.4} direction="up">
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8">
                {/* card heading    */}
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Reduced Maintenance Costs</h3>
                  <span className="ns-shape-47 text-secondary dark:text-accent text-[52px]"> </span>
                </div>
                {/* card description  */}
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={83} speed={1500} interval={150}>
                      83
                    </NumberAnimation>

                    <span className="font-inherit">%</span>
                  </p>
                  <p>Lower maintenance expenses through modernization of legacy systems.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* bank card  */}
            <RevealAnimation delay={0.5} direction="up">
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8">
                {/* card heading    */}
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Operational Cost Savings</h3>
                  <span className="ns-shape-57 text-secondary dark:text-accent text-[52px]"> </span>
                </div>
                {/* card description  */}
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={78} speed={1500} interval={150}>
                      78
                    </NumberAnimation>
                    <span className="font-inherit">%</span>
                  </p>
                  <p>Improved efficiency by automating workflows and reducing operational overhead.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* time to market card  */}
            <RevealAnimation delay={0.6} direction="up">
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8">
                {/* card heading    */}
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Revenue Growth Potential</h3>
                  <span className="ns-shape-67 text-secondary dark:text-accent text-[52px]"> </span>
                </div>
                {/* card description  */}
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={25} speed={1500} interval={150}>
                      25
                    </NumberAnimation>
                    <span className="font-inherit">%</span>
                  </p>
                  <p>Increased revenue opportunities through faster innovation and digital capabilities.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* system agility card  */}
            <RevealAnimation delay={0.7} direction="up">
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8">
                {/* card heading    */}
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Faster Product Launch</h3>
                  <span className="ns-shape-77 text-secondary dark:text-accent text-[52px]"> </span>
                </div>
                {/* card description  */}
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={3} speed={1500} interval={150}>
                      65
                    </NumberAnimation>
                    <span className="font-inherit">X</span>
                  </p>
                  <p>Accelerated development and launch of new insurance products.</p>
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
