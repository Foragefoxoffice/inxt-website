import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is ClaimVerse used for?',
    answer: 'ClaimVerse is a digital platform designed to help insurers manage claims processing, verification, and settlement through a centralized claims management system.',
  },
  {
    id: 2,
    question: 'Who should use ClaimVerse?',
    answer: 'ClaimVerse is designed for insurance companies, claims teams, and operational departments responsible for managing claims workflows.',
  },
  {
    id: 3,
    question: 'Does ClaimVerse support fraud detection?',
    answer: 'Yes. ClaimVerse includes AI-powered fraud detection tools to identify suspicious claims and reduce risk.',
  },
  {
    id: 4,
    question: 'Can ClaimVerse integrate with policy systems?',
    answer: 'Yes. ClaimVerse integrates with policy administration systems, analytics platforms, and customer engagement tools.',
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
                  <h2>Common Questions About ClaimVerse</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Learn how ClaimVerse helps insurers modernize claims management and deliver faster claims experiences.
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
