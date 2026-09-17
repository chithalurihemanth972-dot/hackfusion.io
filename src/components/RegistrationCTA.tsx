import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { HACKATHON_DETAILS } from '../config';

const RegistrationCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative bg-gradient-to-br from-hack-pink/20 to-hack-blue/20 border border-white/10 p-12 md:p-20 text-center overflow-hidden shadow-[0_0_32px_rgba(255,0,127,0.2)]">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hack-pink via-hack-gold to-hack-blue" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 text-hack-gold mb-6 px-4 py-1 border border-hack-gold/30 rounded-full bg-hack-gold/5">
              <Calendar size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Registration Deadline</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 text-glow-soft">
              {HACKATHON_DETAILS.registrationDeadline}
            </h2>
            
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Secure your spot before registrations close.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a
                href={HACKATHON_DETAILS.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-white text-black font-rajdhani text-xl font-bold px-12 py-4 rounded-sm transition-all hover:scale-105 hover:bg-white/90 shadow-[0_0_28px_rgba(255,255,255,0.4)]"
              >
                REGISTER NOW
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="mt-8 flex flex-col items-center">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Ready to build?</p>
                <h3 className="text-3xl font-bold text-white tracking-tighter text-glow-soft">HACKFUSION 2026</h3>
                <p className="text-hack-pink text-sm font-bold tracking-[0.3em] text-glow-pink">12-HOUR ONLINE HACKATHON</p>
              </div>
            </div>
          </motion.div>
          
          {/* Technical accents */}
          <div className="absolute bottom-4 left-4 text-white/5 font-mono text-[10px] hidden md:block">
            {`01001000 01000001 01000011 01001011 01000110 01010101 01010011 01001001 01001111 01001110`}
          </div>
          <div className="absolute bottom-4 right-4 text-white/5 font-mono text-[10px] hidden md:block">
            {`CODE_CIRCUITS_SOLUTIONS`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
