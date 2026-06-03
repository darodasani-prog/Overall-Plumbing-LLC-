import { motion } from 'motion/react';

interface RevealSectionProps {
  imageId: string;
  headline: string;
  subheadline: string;
}

export default function RevealSection({ imageId, headline, subheadline }: RevealSectionProps) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* The "Reveal" Container - using sticky for better mobile support than fixed attachment */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute inset-0">
            <img
              src={`https://lh3.googleusercontent.com/d/${imageId}`}
              alt="Reveal Background"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark contrast overlay */}
            <div className="absolute inset-0 bg-navy-dark/60 backdrop-brightness-75" />
          </div>
        </div>
      </div>

      {/* Content that scrolls over */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.6em] text-electric-blue text-glow">
            Texas Master Series
          </span>
          <h2 className="mb-8 text-5xl font-black uppercase italic leading-none tracking-tighter text-white md:text-8xl lg:text-9xl">
            {headline}
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-bold italic text-white/70 md:text-3xl">
            {subheadline}
          </p>
        </motion.div>
      </div>

      {/* Bottom masking gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-dark to-transparent z-20" />
    </section>
  );
}
