'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Team member data extracted from images + extended for scroller
const managementData = [
  {
    id: 1,
    name: 'Easwar Murthy',
    role: 'Founder',
    image: '/technext-img/management/1.png',
    bio: [
      "Easwar Murthy is the visionary founder of Iorta TechNXT, a global InsurTech company transforming the insurance landscape through innovative, scalable, and API-first technology solutions. With over two decades of experience at the intersection of insurance and technology, Easwar brings a rare combination of deep domain expertise and product innovation.",
      "Easwar's core philosophy is simple: technology should solve real problems, fast. He is passionate about simplifying complex insurance ecosystems through low-code platforms and rapid implementations, often delivering enterprise-ready solutions in under 90 days. His long-term vision focuses on expanding Iorta TechNXT's footprint across geographies while continuing to solve for multi-country, multi-company, and multi-currency complexities with ease.",
      "'At Iorta TechNXT, we don't just automate we transform. Our goal is to empower insurers to move faster, adapt better, and lead confidently in a rapidly evolving world.'"
    ]
  },
  {
    id: 2,
    name: 'Vijayendran Nagarajan',
    role: 'Co-founder & Chief Executive Officer',
    image: '/technext-img/management/2.png',
    bio: [
      "Vijayendran Nagarajan leads Iorta TechNXT as Co-founder and CEO, driving global growth, client success, and strategic expansion. With over 18 years of experience in insurance and banking technology, Vijay is a seasoned leader known for building high-performing sales organizations and forging impactful partnerships across geographies.",
      "At the helm of Iorta TechNXT's global vision, Vijay combines deep industry expertise with a sharp focus on measurable outcomes helping insurers accelerate digital transformation, enhance operational agility, and deliver superior customer experiences.",
      "His leadership is grounded in agility, innovation, and a client-first mindset, shaping Iorta TechNXT into a trusted partner for insurers across Asia, Africa, and beyond.",
      "'Our mission is simple deliver real value through faster time-to-market, smarter solutions, and unwavering partnership. Every client success story is our story too.'"
    ]
  },
  {
    id: 3,
    name: 'Andrew Arokiaraj R',
    role: 'Chief Solution Director',
    image: '/technext-img/management/3.png',
    bio: [
      "Andrew Arokiaraj R serves as Chief Solution Director at Iorta TechNXT, bringing over 18+ years of expertise in insurance technology, solution architecture, and pre-sales leadership. He plays a pivotal role in translating complex business requirements into scalable, client-centric solutions that drive digital transformation.",
      "With deep domain knowledge and a hands-on approach, Andrew leads the design and delivery of Iorta TechNXT's core platforms aligning innovation with real-world insurance challenges. His strategic insight continues to shape Iorta TechNXT's product roadmap and strengthen its reputation as a trusted technology partner for insurers across markets.",
      "'Every insurer has a unique ecosystem. We're here to deliver tailored, high-impact solutions never one-size-fits-all.'"
    ]
  },
  {
    id: 4,
    name: 'Giri Mohana Krishnan Natarajan',
    role: 'Chief Delivery Director',
    image: '/technext-img/management/4.png',
    bio: [
      "Giri Mohana Krishnan Natarajan leads Delivery and Operations at Iorta TechNXT, bringing over 20 years of experience in insurance technology and program management. His expertise spans large-scale digital transformation programs across Life, P&C, and Medical insurance, with a focus on delivering high-impact outcomes.",
      "At Iorta TechNXT, Giri drives project execution, client success, and cross-border operations. Known for his hands-on leadership and operational precision, he ensures timely, seamless delivery across all client engagements. Prior to Iorta TechNXT, Giri held senior leadership roles at global IT firms, managing mission-critical insurance programs across Asia and the Middle East.",
      "'Operational excellence is the engine behind every transformation. At Iorta TechNXT, we deliver with discipline, agility, and a client-first mindset.'"
    ]
  },
  {
    id: 5,
    name: 'Padmanabhan Raman',
    role: 'Chief Sales Officer',
    image: '/technext-img/management/5.png',
    bio: [
      "With over 25 years of leadership in healthcare and technology, Padmanabhan Raman drives sales strategy and business growth at Iorta TechNXT. His extensive experience in insurance technology across the Asia-Pacific region makes him a key architect of the company's market expansion and client success.",
      "Padhu excels at building high-performing sales teams and fostering long-term partnerships through customer-centric solutions. Before joining Iorta TechNXT, he held senior roles at Tata Consultancy Services, leading the North America payer portfolio, and served as CEO of Thryve Digital Health, where he delivered innovative solutions for health plans and hospital systems.",
      "Padmanabhan holds an Advanced Management Program certification from The Wharton School and a Master's in Information Technology from Rochester Institute of Technology.",
      "'Sales is about trust and partnership. We work closely with clients to understand their challenges and deliver technology that truly drives their business forward.'"
    ]
  },
  {
    id: 6,
    name: 'Rohith Reddy Gopu',
    role: 'Chief Information Officer',
    image: '/technext-img/management/6.png',
    bio: [
      "Rohith Reddy Gopu is a seasoned technology entrepreneur and innovator with nearly 20 years of experience driving digital transformation. As CIO of Iorta TechNXT and CEO of TYNYBAY, an AI and cloud consultancy, Rohith leads the charge in AI-driven development, cloud-native platforms, and scalable architectures.",
      "His expertise accelerates Iorta TechNXT's innovation in delivering next-generation, low-code insurance solutions designed to meet evolving market demands. Rohith's strategic vision keeps Iorta TechNXT at the forefront of technology, enabling adaptable, future-ready platforms.",
      "He is also the author of the tech newsletter Git Happens, sharing insights on SaaS, cloud native, AI, and platform development.",
      "'Supercharge API development: cut production time by 50% with AI-powered, cloud-native automation!'"
    ]
  },
  {
    id: 7,
    name: 'Tamil Selvi Velmurugan',
    role: 'Chief People Officer',
    image: '/technext-img/management/7.png',
    bio: [
      "With over 20 years of strategic HR leadership in technology and insurance, Tamil Selvi Velmurugan drives Iorta TechNXT's human capital strategy. As Chief People Officer, she focuses on talent development, culture building, and organizational growth to attract and retain top talent.",
      "Selvi champions a culture of innovation, collaboration, and continuous learning, ensuring people strategies align with Iorta TechNXT's growth goals. Her leadership fosters an empowering environment where teams thrive and deliver exceptional value to clients.",
      "'Our people are our greatest asset. Building a culture that inspires innovation and ownership is key to delivering exceptional solutions.'"
    ]
  }
];



const ManagementTeam = () => {
  const [selectedId, setSelectedId] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);
  
  const selectedMember = managementData.find(m => m.id === selectedId) || managementData[0];

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
        <div className="text-center mb-20 space-y-4">
          <RevealAnimation delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-secondary dark:text-accent">
              Our Management Team
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              This is our team, a lot of smiling happy people who work hard to empower your teams.
            </p>
          </RevealAnimation>
        </div>

        {/* Featured Member Detail */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32 min-h-[500px]">
          <div className="lg:col-span-5 flex justify-center">
            <RevealAnimation delay={0.3} key={`img-${selectedId}`} animationType="to" offset={50} direction="left">
              <div className="relative">
                {/* Stylized Glow */}
                <div className="absolute -inset-4 bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl" />
                <div className="relative size-64 md:size-80 lg:size-[400px] rounded-full border-8 border-white/80 dark:border-background-8/80 shadow-2xl overflow-hidden ring-4 ring-primary-100 dark:ring-primary-900/30">
                  <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <RevealAnimation delay={0.4} key={`info-${selectedId}`}>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary dark:text-accent">
                  {selectedMember.name}
                </h3>
                <h4 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium">
                  {selectedMember.role}
                </h4>
              </div>
            </RevealAnimation>
            
            <div className="space-y-6">
              {selectedMember.bio.map((paragraph, idx) => (
                <RevealAnimation delay={0.5 + idx * 0.1} key={`p-${selectedId}-${idx}`}>
                  <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {paragraph.startsWith("'") ? (
                      <span className="block border-l-4 border-primary-500 pl-6 py-2 mt-4 text-secondary dark:text-accent font-medium">
                        {paragraph}
                      </span>
                    ) : (
                      paragraph
                    )}
                  </p>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Team Selection Swiper with Arrows */}
        <div className="pt-20 border-t border-secondary/10 dark:border-accent/10 relative">
          <div className="flex items-center justify-between mb-12">
             <h4 className="text-2xl font-medium text-secondary dark:text-accent">Meet the Leaders</h4>
             <div className="flex gap-4">
                <button 
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="size-12 rounded-full border border-secondary/20 dark:border-accent/20 flex items-center justify-center hover:bg-secondary hover:text-white dark:hover:bg-accent dark:hover:text-background-8 transition-all z-10"
                  aria-label="Previous member"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button 
                  onClick={() => swiperRef.current?.slideNext()}
                  className="size-12 rounded-full border border-secondary/20 dark:border-accent/20 flex items-center justify-center hover:bg-secondary hover:text-white dark:hover:bg-accent dark:hover:text-background-8 transition-all z-10"
                  aria-label="Next member"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
             </div>
          </div>

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
              delay: 5000,
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
            className="team-swiper !overflow-visible"
          >
            {managementData.map((member) => (
              <SwiperSlide key={member.id}>
                <button
                  onClick={() => setSelectedId(member.id)}
                  className={cn(
                    "w-full group text-center space-y-4 focus:outline-none transition-all duration-300 py-4",
                    selectedId === member.id ? "scale-105" : ""
                  )}
                >
                  <div className={cn(
                    "relative mx-auto size-24 md:size-32 lg:size-40 rounded-full overflow-hidden transition-all duration-300 border-4 border-white dark:border-background-8 shadow-lg",
                    selectedId === member.id 
                      ? "ring-4 ring-primary-500 shadow-primary-500/20" 
                      : "ring-1 ring-secondary/10 hover:ring-secondary/20 shadow-black/5"
                  )}>
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <h5 className={cn(
                      "font-semibold text-lg transition-colors",
                      selectedId === member.id ? "text-primary-600 dark:text-primary-400" : "text-secondary dark:text-accent"
                    )}>
                      {member.name}
                    </h5>
                    <p className="text-sm text-secondary/50 dark:text-accent/50">{member.role}</p>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
