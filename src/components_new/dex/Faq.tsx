import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is DEX used for?',
    answer: 'DEX is an AI-powered decision intelligence platform that analyzes operational data and provides actionable insights to support faster and smarter business decisions.',
  },
  {
    id: 2,
    question: 'How does DEX improve decision-making?',
    answer: 'DEX uses AI models, predictive analytics, and real-time monitoring to identify patterns, detect risks, and recommend the next best actions for operational teams.',
  },
  {
    id: 3,
    question: 'Can DEX integrate with existing enterprise systems?',
    answer: 'Yes. DEX integrates with policy administration systems, claims platforms, customer engagement systems, and data warehouses through API-based integration.',
  },
  {
    id: 4,
    question: 'Who can benefit from using DEX?',
    answer: 'Operational teams, executives, analysts, and business leaders can use DEX to gain real-time insights and make more informed decisions.',
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
                <span className="badge bg-[#D3E7F8] capitalize">Frequently Asked Questions</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Common Questions About DEX</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Learn how DEX helps organizations transform operational data into intelligent insights and support faster, data-driven decision-making.
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
