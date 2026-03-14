import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'Why is UI/UX design important for digital platforms?',
    answer:
      'Effective UI/UX design improves usability, enhances customer engagement, and ensures that digital platforms are easy to navigate, helping businesses increase adoption and satisfaction.',
  },
  {
    id: 2,
    question: 'What industries can benefit from UI/UX design services?',
    answer:
      'UI/UX design is valuable across industries such as insurance, banking, fintech, healthcare, and e-commerce where intuitive digital experiences and customer engagement are essential.',
  },
  {
    id: 3,
    question: 'How does your UI/UX design process work?',
    answer:
      'The design process typically includes user research, wireframing, prototyping, visual design, and usability testing to ensure the final product meets user needs and business goals.',
  },
  {
    id: 4,
    question: 'Can UI/UX design improve customer experience and conversions?',
    answer:
      'Yes. A well-designed interface simplifies interactions, reduces user friction, and encourages users to complete actions, which improves engagement, satisfaction, and conversion rates.',
  },
];

const Faq = () => {
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
                  <h2>Common Questions About UI/UX Design Services</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    UI/UX design plays a critical role in delivering intuitive digital experiences that improve user
                    engagement and business outcomes. Here are some common questions organizations ask when exploring
                    design services.
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

Faq.displayName = 'Faq';
export default Faq;
