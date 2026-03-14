'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import heroShape1 from '@public/images/ns-img-15.png';
import heroShape2 from '@public/images/ns-img-16.png';
import heroShape3 from '@public/images/ns-img-17.png';
import heroShape4 from '@public/images/ns-img-18.png';
import heroShape5 from '@public/images/ns-img-19.png';
import heroShape6 from '@public/images/ns-img-20.png';
import heroShape7 from '@public/images/ns-img-21.png';
import heroShape8 from '@public/images/ns-img-22.png';
import Image from 'next/image';
import { useModalContext } from '@/context/ModalContext';
import heroVideo from '@public/images/ns-img-23.png';

const ContactHero = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      ref={sceneRef}
      className="dark:bg-background-8 relative z-0 overflow-hidden bg-white pb-14 sm:pb-0 md:-mb-10 lg:-mb-12"
      id="scene">
      {/* <!-- Video Background --> */}
      <HeroBackgroundVideo />
      <div className="relative z-10 pt-[160px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 sm:pt-[280px]">
        <HeroShapes />
        {/* <!-- Content --> */}
        <HeroContent />
      </div>
      {/* <HeroVideo /> */}
    </section>
  );
};
ContactHero.displayName = 'ContactHero';
export default ContactHero;

const HeroBackgroundVideo = () => {
  return (
    <>
      <figure className="hero-bg-overlay-light dark:hero-bg-overlay-dark absolute h-full w-full bg-white/80 dark:bg-background-8/80"></figure>
      <video
        className="absolute -top-[220px] left-0 z-[-1] block h-full min-h-[100vh] w-full scale-100 object-cover object-center dark:hidden"
        autoPlay
        muted
        loop
        playsInline>
        <source src="/video/Tube.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="absolute -top-[220px] left-0 z-[-1] hidden h-full min-h-[100vh] w-full scale-100 object-cover object-center dark:block"
        autoPlay
        muted
        loop
        playsInline>
        <source src="/video/Tube-dark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

HeroBackgroundVideo.displayName = 'HeroBackgroundVideo';

const HeroContent = () => {
  return (
    <div className="main-container z-10 flex flex-col items-center text-center">
      <RevealAnimation delay={0.1}>
        <span className="badge badge-yellow mb-5">Contact Us</span>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <h1 className="max-[426px]:text-heading-5 max-sm:text-heading-4 mb-4 font-medium max-[426px]:mb-2.5 max-sm:max-w-[450px]">
          Get in Touch
        </h1>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="mb-10 max-w-[625px] max-sm:max-w-[420px] sm:mb-14">
          Get in touch with our team to discuss your insurance technology needs and digital transformation journey
        </p>
      </RevealAnimation>
      <div className="mb-7 flex flex-col gap-6 max-md:w-full md:mb-14 md:flex-row md:gap-12">
        <RevealAnimation delay={0.4}>
          <div className="flex items-start gap-3 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <h4 className="text-tagline-1 font-semibold mb-1">Headquarters Address</h4>
              <p className="text-sm leading-relaxed">
                2B-9-3, Plaza Sentral, Jalan Stesen Sentral 5,<br />
                Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah<br />
                Persekutuan Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="flex items-start gap-3 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div>
              <h4 className="text-tagline-1 font-semibold mb-1">Email</h4>
              <a href="mailto:connect@iortatechnxt.com" className="text-sm hover:underline">connect@iortatechnxt.com</a>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

HeroContent.displayName = 'HeroContent';

const HeroShapes = () => {
  return (
    <>
      {/* <!-- Hero images  --> */}
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute top-[15%] left-[8%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full rounded-br-none bg-white p-[3px] max-[426px]:size-10 md:top-[22%] md:left-[19%] xl:top-[22%] xl:left-[26%]"
          data-parallax-value="1.8"
          data-parallax-x="1"
          data-parallax-y="0.5">
          <Image src={heroShape1} alt="Hero shape 1" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute top-[15%] right-[12%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full rounded-bl-none bg-white p-[3px] max-[426px]:size-10 md:top-[19%] md:right-[20%] xl:top-[19%] xl:right-[24%]"
          data-parallax-value="2.4"
          data-parallax-x="1"
          data-parallax-y="1">
          <Image src={heroShape2} alt="Hero shape 2" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute bottom-[16%] left-[7%] -z-10 hidden h-[50px] w-[50px] shrink-0 rounded-full rounded-br-none bg-white p-[3px] max-[426px]:size-10 sm:block md:bottom-[18%] md:left-[8%] xl:bottom-[18%] xl:left-[14%]"
          data-parallax-value="1.8"
          data-parallax-x="0.7"
          data-parallax-y="-1">
          <Image src={heroShape3} alt="Hero shape 3" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute right-[10%] bottom-[15%] -z-10 hidden h-[50px] w-[50px] shrink-0 rounded-full rounded-bl-none bg-white p-[3px] max-[426px]:size-10 sm:block md:right-[25%] md:bottom-[15%] xl:right-[28%] xl:bottom-[15%]"
          data-parallax-value="1.9"
          data-parallax-x="1"
          data-parallax-y="-0.7">
          <Image src={heroShape4} alt="Hero shape 4" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>

      {/* <!-- Static hero images (no parallax for better performance) --> */}
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute bottom-[50%] left-[0%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full rounded-br-none bg-white p-[3px] max-[426px]:size-10 md:bottom-[34%] md:left-[16%] xl:bottom-[36%] xl:left-[23%]"
          data-parallax-value="1.7"
          data-parallax-x="-0.8"
          data-parallax-y="1">
          <Image src={heroShape5} alt="Hero shape 5" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute top-[40%] right-[0%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full rounded-bl-none bg-white p-[3px] max-[426px]:size-10 md:top-[30%] md:right-[5%] xl:top-[32%] xl:right-[10%]"
          data-parallax-value="1.7"
          data-parallax-x="1"
          data-parallax-y="0.8">
          <Image src={heroShape6} alt="Hero shape 6" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute right-[3%] bottom-[38%] -z-10 h-[50px] w-[50px] rounded-full rounded-bl-none bg-white p-[3px] md:right-[12%] md:bottom-[32%] xl:right-[14%] xl:bottom-[28%]"
          data-parallax-value="1.7"
          data-parallax-x="-1"
          data-parallax-y="-1">
          <Image src={heroShape7} alt="Hero shape 7" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/20 parallax-effect absolute top-[32%] left-[0%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full rounded-br-none bg-white p-[3px] max-[426px]:size-10 md:top-[42%] md:left-[3%] xl:top-[42%] xl:left-[8%]"
          data-parallax-value="1.7"
          data-parallax-x="0.5"
          data-parallax-y="-1">
          <Image src={heroShape8} alt="Hero shape 8" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
    </>
  );
};

const HeroVideo = () => {
  const { videoModal } = useModalContext();

  return (
    <RevealAnimation delay={0.7} instant>
      <div className="lp:mx-auto max-lp:mx-5 bg-background-3 dark:bg-background-7 relative mx-auto max-w-[1290px] overflow-hidden rounded-4xl p-2.5 max-[500px]:!mx-5 max-sm:mx-auto max-sm:max-w-[450px] max-sm:rounded-2xl max-sm:p-2">
        <Image
          src={heroVideo}
          alt="hero video cover"
          className="h-ful w-full rounded-[25px] object-cover max-sm:rounded-xl"
        />
        <button
          onClick={videoModal.openModal}
          className="bg-secondary/10 absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full backdrop-blur-[18px] transition-transform duration-[400ms] ease-in-out hover:scale-110 focus:outline-none max-sm:size-14"
          aria-label="Play video">
          <svg className="size-5 max-sm:size-4" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5151 10.2208L1.5252 0.136503C1.37376 0.0508746 1.20014 0.00383059 1.02225 0.000224187C0.844354 -0.00338222 0.668632 0.0365793 0.513209 0.115987C0.357785 0.195394 0.228287 0.311371 0.138073 0.451955C0.0478591 0.59254 0.000196059 0.75264 0 0.915741V21.0843C0.000196059 21.2474 0.0478591 21.4075 0.138073 21.548C0.228287 21.6886 0.357785 21.8046 0.513209 21.884C0.668632 21.9634 0.844354 22.0034 1.02225 21.9998C1.20014 21.9962 1.37376 21.9491 1.5252 21.8635L19.5151 11.7792C19.6628 11.6992 19.7852 11.5852 19.8702 11.4485C19.9553 11.3119 20 11.1573 20 11C20 10.8427 19.9553 10.6881 19.8702 10.5515C19.7852 10.4148 19.6628 10.3008 19.5151 10.2208Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </RevealAnimation>
  );
};
