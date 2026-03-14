import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is quality engineering?',
    answer: 'Quality engineering focuses on integrating testing and quality practices throughout the development lifecycle to ensure reliable software delivery.',
  },
  {
    id: 2,
    question: 'How does automation improve testing?',
    answer: 'Automation accelerates testing processes, improves accuracy, and increases test coverage while reducing manual effort.',
  },
  {
    id: 3,
    question: 'Can quality engineering support cloud environments?',
    answer: 'Yes. Our testing frameworks are designed to validate applications across cloud, hybrid, and on-premise environments.',
  },
  {
    id: 4,
    question: 'What types of testing do you support?',
    answer: 'We support functional testing, performance testing, regression testing, automation testing, and security testing.',
  },
];

const QualityFaq = () => {
  return (
    <section className="max-[1920px]:px-5 transition-all duration-300">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-2xl py-18 md:rounded-4xl md:py-20 lg:py-25 xl:py-28">
          <div className="main-container">
            <div className="mx-auto mb-12 max-w-[720px] space-y-3 text-center md:space-y-5 lg:mb-[70px]">
              <RevealAnimation delay={0.2}>
                <span className="badge bg-white capitalize">Frequently Asked Questions</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Common Questions About Quality Engineering</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Quality engineering helps organizations ensure reliable software performance by integrating testing and quality practices across the entire development lifecycle.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <Accordion className="mx-auto max-w-[770px] space-y-4" defaultValue="1" enableScrollAnimation={true} animationDelay={0.1}>
              {faqData.map((item) => (
                <AccordionItem
                  className="rounded-2xl bg-white px-6 md:rounded-4xl md:px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                  key={item.id}
                  value={item.id.toString()}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-secondary"
                    className="flex w-full cursor-pointer items-center justify-between py-6 md:py-8"
                    value={item.id.toString()}
                    iconType="arrow">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent value={item.id.toString()}>
                    <div className="pb-6 text-secondary/80 leading-relaxed">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

QualityFaq.displayName = 'QualityFaq';
export default QualityFaq;
