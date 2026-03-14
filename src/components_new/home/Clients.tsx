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

interface Language {
  flagSrc: string;
  flagAlt?: string;
  name: string;
}

const clientLogos: ClientLogo[] = [
  { id: 'scapic', src: '/technext-img/home/oona.svg', alt: 'Scapic company logo', width: 135, height: 45 },
  { id: 'asana', src: '/technext-img/home/Phillife.svg', alt: 'Asana company logo', width: 128, height: 45 },
  { id: 'discord', src: '/technext-img/home/edelweiss-life-insurance.svg', alt: 'Discord company logo', width: 160, height: 45 },
  { id: 'dropbox', src: '/technext-img/home/liberty_mutual.svg', alt: 'Dropbox company logo', width: 164, height: 45 },
  { id: 'hotjar', src: '/technext-img/home/fubon-insurance.svg', alt: 'Hotjar company logo', width: 124, height: 45 },
  { id: 'lattice', src: '/technext-img/home/phillife-financial.svg', alt: 'Lattice company logo', width: 148, height: 45 },
  { id: 'notion', src: '/technext-img/home/icare.svg', alt: 'Notion company logo', width: 128, height: 45 },
  { id: 'outreach', src: '/technext-img/home/takaful-ikhlas.svg', alt: 'Outreach company logo', width: 68, height: 45 },
  { id: 'spotify', src: '/technext-img/home/chubb.svg', alt: 'Spotify company logo', width: 136, height: 45 },
  {
    id: 'squarespace',
    src: '/technext-img/home/pga_sompo.svg',
    alt: 'Squarespace company logo',
    width: 250,
    height: 45,
  },
  { id: 'stripe', src: '/technext-img/home/infinity-insurance.svg', alt: 'Stripe company logo', width: 50, height: 45 },
  { id: 'stripe', src: '/technext-img/home/Lion-insurance.svg', alt: 'Stripe company logo', width: 180, height: 45 },
];

const languages: Language[] = [
  {
    flagSrc: '/technext-img/home/MALAYSIA.svg',
    name: 'Malaysia',
  },
  { flagSrc: '/technext-img/home/INDIA.svg', name: 'India' },
  { flagSrc: '/technext-img/home/PHILIPPINES.svg', name: 'Philippines' },
  {
    flagSrc: '/technext-img/home/THAILAND.svg',
    name: 'Thailand',
  },
  {
    flagSrc: '/technext-img/home/VIETNAM.svg',
    name: 'Vietnam',
  },
  {
    flagSrc: '/technext-img/home/USA.svg',
    name: 'USA',
  },
  {
    flagSrc: '/technext-img/home/ETHIOPIA.svg',
    name: 'Ethiopia',
  },
  {
    flagSrc: '/technext-img/home/CAMBODIA.svg',
    name: 'Cambodia',
  },
  {
    flagSrc: '/technext-img/home/HONGKONG.svg',
    name: 'Hong Kong',
  },
  {
    flagSrc: '/technext-img/home/SINGAPORE.svg',
    name: 'Singapore',
  },
];

const Clients = () => {
  return (
    <section
      className="py-16 lg:pt-28 lg:pb-6 xl:pt-28 xl:pb-6"
      aria-labelledby="clients-heading"
      aria-label="Trusted clients and partners">
      <div className="main-container">
        <div className="relative overflow-hidden text-center">
          <RevealAnimation delay={0.1}>
            <h2 id="clients-heading" className="mx-auto mb-4 max-w-[800px] text-center text-[24px]">
              Partnered with 
              <span className="text-[#3D5AF1]"> Industry Leaders </span>Worldwide
            </h2>
          </RevealAnimation>
          <div className="flex justify-center items-center">
            <RevealAnimation delay={0.4}>
              <div
                className="w-full max-w-[695px] space-y-[89px] rounded-4xl  xl:max-w-[560px]"
                aria-labelledby="languages-heading">
                

                {/* marquee  */}
                <div
                  className="relative w-full overflow-hidden rounded-2xl bg-[#E8F5FF] p-4 xl:max-w-[560px]"
                  aria-labelledby="language-marquee-heading">
                    <div className="overflow-hidden" aria-label="Available languages for AI voice generation">
                    <Marquee autoFill speed={50} gradient={false} direction="right">
                      <div className="ml-3 flex items-center justify-center gap-x-3">
                        {languages.map((language) => (
                          <div
                            key={language.name}
                            className="shadow-14 flex h-12 w-[131px] shrink-0 items-center justify-start gap-x-3 rounded-full bg-white p-1"
                            aria-label={`${language.name} language option`}>
                            <figure className="size-10 overflow-hidden rounded-full">
                              <Image
                                src={language.flagSrc}
                                alt={language.flagAlt || `${language.name} flag`}
                                width={40}
                                height={40}
                                className="size-full object-cover"
                                title={`${language.name} language flag`}
                              />
                            </figure>
                            <p className="text-secondary text-[14px]">{language.name}</p>
                          </div>
                        ))}
                      </div>
                    </Marquee>
                  </div>

                  {/* left bg  */}

                  <div
                    className="absolute top-0 left-0 z-10 h-36 w-[126px] rotate-180"
                    style={{ background: 'linear-gradient(270deg, #E8F5FF 16.67%, rgba(244, 239, 231, 0) 100%)' }}
                  />
                  {/* right bg  */}

                  <div
                    className="absolute top-0 right-0 z-10 h-36 w-[126px]"
                    style={{ background: 'linear-gradient(270deg, #E8F5FF 16.67%, rgba(244, 239, 231, 0) 100%)' }}
                  />
                </div>
              </div>
          </RevealAnimation>
          </div>
          <RevealAnimation delay={0.2}>
            <div
              className="logos-marquee-container mt-14 overflow-hidden"
              aria-label="Logos of trusted companies and brands using AI Voice Generator">
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
            </div>
          </RevealAnimation>
          

          {/* left gradient */}
          <div
            className="absolute bottom-[0%] left-0 h-[80px] w-[80px] sm:h-[130px] md:w-[150px] xl:left-0 2xl:w-[455px] z-10"
            style={{ background: 'linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%)' }}
            aria-hidden="true"
            aria-label="Decorative left gradient fade"
          />

          {/* right gradient */}
          <div
            className="absolute right-0 bottom-[0%] h-[80px] w-[80px] sm:h-[130px] md:w-[150px] xl:right-0 2xl:w-[455px] z-10"
            style={{ background: 'linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 100%)' }}
            aria-hidden="true"
            aria-label="Decorative right gradient fade"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
