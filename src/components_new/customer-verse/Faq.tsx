import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is CustomerVerse used for?',
    answer: 'CustomerVerse is a digital engagement platform that helps businesses manage customer interactions, onboarding, and engagement through a unified system.',
  },
  {
    id: 2,
    question: 'Who should use CustomerVerse?',
    answer: 'CustomerVerse is designed for insurers and enterprises looking to improve customer engagement and deliver personalized digital experiences.',
  },
  {
    id: 3,
    question: 'Does CustomerVerse support digital onboarding?',
    answer: 'Yes. CustomerVerse includes digital onboarding, identity verification, and automated document management.',
  },
  {
    id: 4,
    question: 'Can CustomerVerse integrate with existing systems?',
    answer: 'Yes. CustomerVerse supports API-based integrations with CRM platforms, enterprise systems, and digital communication tools.',
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
                  <h2>Common Questions About CustomerVerse</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Learn how CustomerVerse helps organizations transform customer engagement and deliver seamless digital experiences.
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
