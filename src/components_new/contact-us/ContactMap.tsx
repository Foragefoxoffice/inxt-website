import RevealAnimation from '../animation/RevealAnimation';

const ContactMap = () => {
  return (
    <section className="pb-[100px] md:pb-[150px] lg:pb-[200px]" aria-label="Location Map">
      <div className="main-container">
        <RevealAnimation>
          <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5">
            <div className="w-full h-[300px] overflow-hidden rounded-2xl lg:h-[566px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.6977489085466!2d101.6858264!3d3.133041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4936c2f25097%3A0xad2240ac12d8a78c!2siorta%20TechNXT%20Sdn%20Bhd!5e1!3m2!1sen!2sin!4v1773466815390!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactMap;
