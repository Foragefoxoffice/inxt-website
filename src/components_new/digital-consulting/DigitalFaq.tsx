import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is digital consulting?',
    answer:
      'Digital consulting helps businesses develop strategies and implement technologies that enable digital transformation and operational efficiency.',
  },
  {
    id: 2,
    question: 'How does digital consulting benefit organizations?',
    answer:
      'It helps organizations improve processes, modernize legacy systems, enhance customer experiences, and adopt new digital technologies.',
  },
  {
    id: 3,
    question: 'Can digital consulting support legacy system modernization?',
    answer:
      'Yes. Our consulting services include strategies for modernizing legacy systems and integrating them with modern digital platforms.',
  },
  {
    id: 4,
    question: 'Which industries benefit from digital consulting?',
    answer:
      'Digital consulting supports industries such as insurance, finance, healthcare, retail, and technology by helping them innovate and adapt to changing markets.',
  },
];

const DigitalFaq = () => {
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
                  <h2>Common Questions About Digital Consulting</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Digital consulting helps organizations modernize operations, adopt new technologies, and create strategies that support long-term growth and innovation.
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

DigitalFaq.displayName = 'DigitalFaq';
export default DigitalFaq;
