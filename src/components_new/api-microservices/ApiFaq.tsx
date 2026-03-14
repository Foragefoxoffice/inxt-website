import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What are microservices and how do they help businesses?',
    answer:
      'Microservices divide applications into smaller, independent services that can be developed, deployed, and scaled individually, improving system flexibility.',
  },
  {
    id: 2,
    question: 'Why are APIs important for modern digital platforms?',
    answer:
      'APIs enable communication between applications and services, allowing businesses to integrate systems and build connected digital ecosystems.',
  },
  {
    id: 3,
    question: 'Can microservices integrate with legacy systems?',
    answer:
      'Yes. Microservices can connect with existing systems through APIs, allowing organizations to modernize gradually without replacing entire infrastructures.',
  },
  {
    id: 4,
    question: 'How secure are API integrations?',
    answer:
      'API solutions include authentication, encryption, and access control mechanisms to ensure secure communication between services.',
  },
];

const ApiFaq = () => {
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
                  <h2>Common Questions About API & Microservices Solutions</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    API and microservices architectures help organizations build scalable and flexible systems that enable seamless integrations and faster innovation.
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

ApiFaq.displayName = 'ApiFaq';
export default ApiFaq;
