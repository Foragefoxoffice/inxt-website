import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'What is the role of data analytics in business growth?',
    answer:
      'Data analytics helps organizations identify trends, optimize operations, improve customer experiences, and make informed decisions based on reliable data insights.',
  },
  {
    id: 2,
    question: 'How can data analytics improve operational efficiency?',
    answer:
      'By analyzing operational data, organizations can identify inefficiencies, automate reporting processes, and optimize workflows to improve productivity.',
  },
  {
    id: 3,
    question: 'What types of businesses benefit from data analytics?',
    answer:
      'Data analytics benefits organizations across industries including insurance, finance, healthcare, retail, and technology by improving decision-making and performance monitoring.',
  },
  {
    id: 4,
    question: 'How does your data analytics approach integrate with existing systems?',
    answer:
      'Our solutions integrate seamlessly with enterprise platforms, data warehouses, and analytics tools, ensuring secure data flow and real-time insights across your organization.',
  },
];

const DataFaq = () => {
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
                  <h2>Common Questions About Data Analytics Services</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    Data analytics helps organizations transform raw data into actionable insights that support strategic decision-making and business growth. Here are answers to some common questions about data analytics solutions.
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

DataFaq.displayName = 'DataFaq';
export default DataFaq;
