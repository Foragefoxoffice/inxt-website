import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is BrokerVerse used for?',
    answer: 'BrokerVerse is an end-to-end digital platform designed for insurance brokers to manage clients, policies, claims, and brokerage financial operations from a single system.',
  },
  {
    id: 2,
    question: 'Can BrokerVerse handle commission tracking?',
    answer: 'Yes. BrokerVerse includes financial reconciliation and commission management tools to track brokerage revenue and payments accurately.',
  },
  {
    id: 3,
    question: 'Does BrokerVerse support client document management?',
    answer: 'Yes. The platform provides integrated document repositories for client files, policy documents, and regulatory compliance records.',
  },
  {
    id: 4,
    question: 'How does BrokerVerse improve broker efficiency?',
    answer: 'By unifying client management, policy servicing, and operations into one intelligent system, BrokerVerse automates manual workflows and provides real-time performance insights.',
  },
];

const Faq = () => {
  return (
    <section className="max-[1920px]:px-5 bg-white">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-2xl py-18 md:rounded-4xl md:py-20 lg:py-25 xl:py-28">
          <div className="main-container">
            <div className="mx-auto mb-12 max-w-[720px] space-y-3 text-center md:space-y-5 lg:mb-[70px]">
              <RevealAnimation delay={0.2}>
                <span className="badge bg-white capitalize">Frequently Asked Questions</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Common Questions About BrokerVerse</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Learn how BrokerVerse helps insurance brokerages manage operations, improve productivity, and strengthen client servicing.
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
