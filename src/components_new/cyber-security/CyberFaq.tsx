import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'Why is cybersecurity important for businesses?',
    answer: 'Cybersecurity protects critical systems, sensitive data, and digital operations from cyber threats and potential breaches.',
  },
  {
    id: 2,
    question: 'What industries benefit from cybersecurity services?',
    answer: 'Industries such as finance, insurance, healthcare, retail, and technology require strong cybersecurity frameworks to protect sensitive data and systems.',
  },
  {
    id: 3,
    question: 'Can cybersecurity solutions support cloud environments?',
    answer: 'Yes. Our cybersecurity solutions are designed to protect both on-premise and cloud-based infrastructure.',
  },
  {
    id: 4,
    question: 'How do you respond to cyber incidents?',
    answer: 'Our teams use structured incident response frameworks to quickly detect, contain, and recover from security threats.',
  },
];

const CyberFaq = () => {
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
                  <h2>Common Questions About Cybersecurity Solutions</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Cybersecurity services help organizations protect their digital infrastructure, detect threats early, and ensure business continuity in an increasingly connected world.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <Accordion className="mx-auto max-w-[770px] space-y-4" defaultValue="1" enableScrollAnimation={true} animationDelay={0.1}>
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

CyberFaq.displayName = 'CyberFaq';
export default CyberFaq;
