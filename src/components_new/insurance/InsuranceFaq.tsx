import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: '1',
    question: 'Can your platform integrate with our existing policy administration system?',
    answer:
      'Yes. Our platforms are designed to integrate with existing insurance systems using APIs and modern integration layers, allowing insurers to modernize operations without replacing their entire infrastructure.',
  },
  {
    id: '2',
    question: 'How can your solutions improve claims processing efficiency?',
    answer:
      'Our platforms automate claims workflows, reduce manual processes, and enable faster claims evaluation and settlement through intelligent automation.',
  },
  {
    id: '3',
    question: 'Can the platform support agents, brokers, and multiple distribution channels?',
    answer:
      'Yes. Our solutions support agent networks, brokers, bancassurance partners, and digital distribution channels through centralized management tools.',
  },
  {
    id: '4',
    question: 'How secure and compliant are your insurance platforms?',
    answer:
      'Our platforms are built with enterprise-grade security standards and support regulatory compliance requirements commonly found in the insurance industry.',
  },
];

const Faq = () => {
  return (
    <section className="max-[1920px]:px-5">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-2xl py-18 md:rounded-4xl md:py-20 lg:py-25 xl:py-28">
          <div className="main-container">
            <div className="mx-auto mb-12 max-w-[720px] space-y-3 text-center md:space-y-5 lg:mb-[70px]">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-white-v2 uppercase">Frequently Asked Questions</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Questions Insurance Organizations Often Ask</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Insurance leaders often have questions about modernizing core systems, improving operational efficiency, and integrating new technologies. Here are some of the most common questions we receive.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <Accordion
              className="mx-auto max-w-[770px] space-y-4"
              defaultValue="1"
              enableScrollAnimation={true}
              animationDelay={0.1}>
              {faqData.map((item) => (
                <AccordionItem
                  className="rounded-2xl bg-white px-6 md:rounded-4xl md:px-8 border border-stroke-1"
                  key={item.id}
                  value={item.id}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-secondary"
                    className="flex w-full cursor-pointer items-center justify-between py-6 md:py-8"
                    value={item.id}
                    iconType="arrow">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="" value={item.id}>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
