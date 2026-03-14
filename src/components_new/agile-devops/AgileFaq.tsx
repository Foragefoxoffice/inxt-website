import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is DevOps and why is it important?',
    answer:
      'DevOps is a methodology that integrates development and operations teams to automate software delivery, improve collaboration, and accelerate product releases.',
  },
  {
    id: 2,
    question: 'How does DevOps improve software delivery?',
    answer:
      'DevOps automates testing, integration, and deployment processes, enabling teams to release updates faster and with fewer errors.',
  },
  {
    id: 3,
    question: 'Can DevOps work with existing infrastructure?',
    answer:
      'Yes. DevOps practices can be integrated with existing systems and cloud platforms to improve deployment efficiency and scalability.',
  },
  {
    id: 4,
    question: 'What tools are commonly used in DevOps?',
    answer:
      'Popular DevOps tools include Jenkins, Docker, Kubernetes, GitHub, Terraform, and cloud-native monitoring platforms.',
  },
];

const AgileFaq = () => {
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
                  <h2>Common Questions About DevOps Services</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    DevOps helps organizations accelerate software delivery while maintaining system reliability and operational efficiency. Here are answers to common questions about DevOps implementation.
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

AgileFaq.displayName = 'AgileFaq';
export default AgileFaq;
