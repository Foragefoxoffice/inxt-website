import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const clientLogos: ClientLogo[] = [
  { id: 'scapic', src: '/technext-img/contact/1.svg', alt: 'Scapic company logo', width: 135, height: 45 },
  { id: 'asana', src: '/technext-img/contact/2.svg', alt: 'Asana company logo', width: 128, height: 45 },
  { id: 'discord', src: '/technext-img/contact/3.svg', alt: 'Discord company logo', width: 160, height: 45 },
  { id: 'dropbox', src: '/technext-img/contact/4.svg', alt: 'Dropbox company logo', width: 164, height: 45 },
  { id: 'hotjar', src: '/technext-img/contact/5.svg', alt: 'Hotjar company logo', width: 124, height: 45 },
];

const ContactClients = () => {
  return (
    <section
      className="py-16"
      aria-labelledby="clients-heading"
      aria-label="Trusted clients and partners">
      <div className="main-container">
        <div className="relative overflow-hidden text-center">
          <RevealAnimation delay={0.2}>
            <div
              className="logos-marquee-container relative overflow-hidden"
              aria-label="Logos of trusted companies and brands">
              <Marquee autoFill speed={50} gradient={false} direction='right'>
                <div className="flex items-center justify-center gap-x-14">
                  {clientLogos.map((logo) => (
                    <figure
                      key={logo.id}
                      className="h-[45px] shrink-0 first:ml-14"
                      style={{ width: `${logo.width}px` }}
                      aria-label={`${logo.alt}`}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-auto"
                      />
                    </figure>
                  ))}
                </div>
              </Marquee>

              {/* left gradient */}
              <div
                className="pointer-events-none absolute top-0 left-0 bottom-0 w-[100px] sm:w-[130px] md:w-[150px] xl:w-[250px] z-10"
                style={{ background: 'linear-gradient(90deg, #F4F5F8 0%, rgba(255, 255, 255, 0) 100%)' }}
                aria-hidden="true"
              />

              {/* right gradient */}
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 w-[100px] sm:w-[130px] md:w-[150px] xl:w-[250px] z-10"
                style={{ background: 'linear-gradient(270deg, #F4F5F8 0%, rgba(255, 255, 255, 0) 100%)' }}
                aria-hidden="true"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactClients;
