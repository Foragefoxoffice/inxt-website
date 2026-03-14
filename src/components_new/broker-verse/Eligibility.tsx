import eligibilityImg from '@public/images/ns-img-132.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const eligibilityData = [
  {
    id: 1,
    text: 'Limited visibility into broker, agent, and partner performance',
  },
  {
    id: 2,
    text: 'Manual policy processing and document management',
  },
  {
    id: 3,
    text: 'Complex regulatory compliance and reporting requirements',
  },
  {
    id: 4,
    text: 'Inefficient client servicing and policy management workflows',
  },
  {
    id: 5,
    text: 'Disconnected systems across brokerage operations, finance, and client management',
  },
];

const Eligibility = () => {
  return (
    <section className="py-16 md:py-[90px] lg:py-[100px]" aria-label="Eligibility Check">
      <div className="main-container">
        <div className="dark:bg-background-8 rounded-4xl bg-white py-12 pr-6 pl-6 sm:py-16 md:py-8 md:pr-8 md:pl-14">
          <div className="flex flex-col items-center justify-between gap-14 md:flex-row lg:gap-0">
            {/* heading  */}
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="md:text-heading-4 lg:text-heading-3 xl:text-heading-2 w-full text-center md:max-w-[530px] md:text-start">
                  Challenges in Insurance Broker Operations
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="mb-8 text-center md:text-start md:max-w-[530px]">
                  Insurance brokerages often struggle with managing complex distribution networks, regulatory obligations, and fragmented operational systems that slow down business growth and client servicing.
                </p>
              </RevealAnimation>
              {/* eligibility list  */}
              <ul className="mb-14 space-y-4" aria-label="Eligibility requirements">
                {eligibilityData.map((item, idx) => (
                  <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                    <li className="flex items-center gap-3">
                      <span>
                        <Image
                          src="images/icons/checkmark-dark.svg"
                          alt="Checkbox icon"
                          width={18}
                          height={18}
                          className="size-[18px] dark:hidden"
                        />
                        <Image
                          src="images/icons/checkmark-white.svg"
                          alt="Checkbox icon"
                          width={18}
                          height={18}
                          className="hidden size-[18px] dark:block"
                        />
                      </span>
                      <p>{item.text}</p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>

              
            </div>
            {/* img  */}
            <RevealAnimation delay={0.6}>
              <figure className="w-full overflow-hidden rounded-3xl md:w-[450px] lg:w-[400px] xl:w-[517px]">
                <Image
                  src={eligibilityImg}
                  alt="Mortgage eligibility illustration"
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
