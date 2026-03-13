import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'Can legacy AS400 or COBOL-based systems be modernized without replacing them entirely?',
    answer:
      'Yes. Our modernization approach supports multiple strategies such as lift-and-shift, API layering, and gradual system modernization, allowing insurers to upgrade capabilities without completely replacing their existing infrastructure.',
  },
  {
    id: 2,
    question: 'Will modernization disrupt existing insurance operations?',
    answer:
      'No. Our approach focuses on minimizing disruption by integrating modern capabilities with existing systems while keeping core business operations running during the transformation process.',
  },
  {
    id: 3,
    question: 'How long does insurance core modernization typically take?',
    answer:
      'The timeline varies depending on system complexity and modernization strategy. However, many modernization initiatives can begin delivering value within a few months through phased implementation.',
  },
  {
    id: 4,
    question: 'How do modern platforms improve claims and policy management?',
    answer:
      'Modern platforms automate workflows, enable real-time data access, and integrate advanced analytics and AI tools, which improve claims processing speed, underwriting accuracy, and overall operational efficiency.',
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
                  <h2>Common Questions About Core Modernization</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Insurance organizations often have questions about modernizing legacy core systems, integrating new technologies, and managing operational risks during transformation. Here are answers to some of the most common questions.
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
                  className="rounded-2xl bg-white px-6 md:rounded-4xl md:px-8"
                  key={item.id}
                  value={item.id.toString()}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-secondary"
                    className="flex w-full cursor-pointer items-center justify-between py-6 md:py-8"
                    value={item.id.toString()}
                    iconType="arrow">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
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
