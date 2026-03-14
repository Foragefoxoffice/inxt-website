'use client';

import { useRef } from 'react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const salesTeamData = [
  {
    id: 1,
    name: 'Jefferson Reyes',
    country: 'Philippines',
    image: '/technext-img/contact/1.png',
  },
  {
    id: 2,
    name: 'Viswanath S',
    country: 'Thailand',
    image: '/technext-img/contact/2.png',
  },
  {
    id: 3,
    name: 'Sujika Choopitaks',
    country: 'Thailand',
    image: '/technext-img/contact/3.png',
  },
  {
    id: 4,
    name: 'Devajith G',
    country: 'Malaysia',
    image: '/technext-img/contact/4.png',
  },
  {
    id: 5,
    name: 'Truong Duc Nguyen',
    country: 'Vietnam',
    image: '/technext-img/contact/5.png',
  },
  {
    id: 6,
    name: 'Cindy Cantika',
    country: 'Indonesia',
    image: '/technext-img/contact/6.png',
  }
];

const ContactSalesTeam = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white dark:bg-background-7 py-16 md:py-24 lg:py-32 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-5 z-0">
        <Image 
          src="/images/ns-img-187.svg" 
          alt="background pattern" 
          fill 
          className="object-cover object-top"
        />
      </div>
      
      <div className="main-container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <RevealAnimation delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium text-secondary dark:text-accent">
              Meet Our Sales Team
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-3xl mx-auto">
              Passionate and client-focused, our sales team drives growth by delivering smart, tailored tech solutions across the insurance industry
            </p>
          </RevealAnimation>
        </div>

        {/* Team Selection Swiper */}
        <div className="relative pt-10">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="team-swiper !overflow-visible mb-12"
          >
            {salesTeamData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="w-full text-center space-y-6 py-6">
                  <div className="relative mx-auto size-48 md:size-56 lg:size-64 rounded-full p-2 bg-white dark:bg-background-8 shadow-[0_0_35px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent">
                        <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover"
                        />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-xl text-secondary dark:text-accent">
                      {member.name}
                    </h5>
                    <p className="text-secondary/60 dark:text-accent/60">{member.country}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="size-10 rounded-full border border-secondary/20 dark:border-accent/20 flex items-center justify-center hover:bg-secondary hover:text-white dark:hover:bg-accent dark:hover:text-background-8 transition-all z-10 group"
              aria-label="Previous member"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/60 dark:text-accent/60 group-hover:text-current">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="size-10 rounded-full border border-secondary/20 dark:border-accent/20 flex items-center justify-center hover:bg-secondary hover:text-white dark:hover:bg-accent dark:hover:text-background-8 transition-all z-10 group"
              aria-label="Next member"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/60 dark:text-accent/60 group-hover:text-current">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSalesTeam;
