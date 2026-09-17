import { motion } from 'framer-motion';
import { HACKATHON_DETAILS } from '../config';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white flex items-center gap-4">
            <span className="text-hack-pink">01.</span> ABOUT HACKFUSION
          </h2>
          
          <div className="bg-white/[0.03] border-l-4 border-hack-pink p-8 md:p-12 backdrop-blur-sm shadow-[0_0_32px_rgba(255,0,127,0.12)]">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              HackFusion {HACKATHON_DETAILS.edition} is a 12-hour online hackathon where students, developers, engineers, and innovators transform ideas into practical real-world solutions.
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              Participants get a focused 12-hour sprint to ideate, develop, prototype, and present under an open innovation theme.
            </p>
            
            <div className="flex flex-col gap-2">
              <p className="text-hack-blue font-rajdhani text-2xl md:text-3xl font-bold tracking-wider text-glow-blue">
                FROM CODE TO CIRCUITS.
              </p>
              <p className="text-hack-gold font-rajdhani text-2xl md:text-3xl font-bold tracking-wider text-glow-gold">
                FROM IDEAS TO SOLUTIONS.
              </p>
            </div>
          </div>
          
          {/* Decorative circuit lines */}
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
