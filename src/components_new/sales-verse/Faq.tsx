import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is SalesVerse used for?',
    answer: 'SalesVerse is a sales management platform designed for insurance organizations to capture leads, manage agents, and track sales performance through a centralized system.',
  },
  {
    id: 2,
    question: 'Can SalesVerse support multiple sales channels?',
    answer: 'Yes. SalesVerse supports omni-channel sales including digital platforms, mobile applications, and agent-based sales channels.',
  },
  {
    id: 3,
    question: 'Does SalesVerse provide AI-driven insights?',
    answer: 'Yes. The platform uses AI for lead scoring, sales recommendations, and predictive analytics to help teams prioritize high-value opportunities.',
  },
  {
    id: 4,
    question: 'Can SalesVerse integrate with existing insurance systems?',
    answer: 'Yes. SalesVerse integrates with policy administration systems, CRM platforms, and analytics tools through APIs.',
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
                  <h2>Common Questions About SalesVerse</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Learn how SalesVerse helps insurance organizations manage sales operations, improve lead conversion, and optimize distribution networks.
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
