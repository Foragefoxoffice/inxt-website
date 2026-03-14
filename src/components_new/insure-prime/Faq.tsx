import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const insurePrimeFaqData = [
  {
    id: 1,
    question: 'What is InsurePrime used for?',
    answer:
      'InsurePrime is a modular insurance platform designed to manage policy administration, claims processing, underwriting support, and customer engagement through a unified digital system.',
  },
  {
    id: 2,
    question: 'Can InsurePrime integrate with existing insurance systems?',
    answer:
      'Yes. InsurePrime supports API-based integrations that allow insurers to connect with existing systems, third-party applications, and digital services.',
  },
  {
    id: 3,
    question: 'Which insurance segments does InsurePrime support?',
    answer:
      'The platform supports multiple insurance segments including general insurance, life insurance, health insurance, and group life insurance.',
  },
  {
    id: 4,
    question: 'How does InsurePrime improve operational efficiency?',
    answer:
      'By automating workflows, reducing manual processing, and providing real-time analytics, InsurePrime helps insurers streamline operations and improve decision-making.',
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
                <span className="badge bg-white capitalize">Frequently Asked Questions</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Common Questions About InsurePrime</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Learn more about how InsurePrime helps insurance organizations modernize core operations, automate
                    workflows, and improve customer experiences.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <Accordion
              className="mx-auto max-w-[770px] space-y-4"
              defaultValue="1"
              enableScrollAnimation={true}
              animationDelay={0.1}>
              {insurePrimeFaqData.map((item) => (
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
