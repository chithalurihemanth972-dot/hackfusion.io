import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HACKATHON_DETAILS } from '../config';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 max-w-5xl mx-auto"
      >
        <div className="flex flex-col items-center mb-6">
          <Logo className="h-14 w-14 mb-5" />
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-hack-gold font-rajdhani text-sm md:text-base font-bold mb-2 tracking-[0.32em] uppercase text-glow-gold"
          >
            {HACKATHON_DETAILS.organizer} PRESENTS
          </motion.p>
          
          <div className="relative">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl sm:text-8xl md:text-9xl font-bold leading-none tracking-tighter"
            >
              <span className="text-white text-glow-soft">HACK</span>
              <br />
              <span className="bg-gradient-to-r from-hack-pink via-[#d71ad9] to-hack-blue bg-clip-text text-transparent [filter:drop-shadow(0_0_24px_rgba(255,0,127,0.34))_drop-shadow(0_0_18px_rgba(0,229,255,0.34))]">
                FUSION
              </span>
            </motion.h1>
            
            {/* Decorative brackets */}
            <div className="absolute -left-8 -top-4 w-12 h-12 border-l-2 border-t-2 border-hack-pink/50 hidden md:block" />
            <div className="absolute -right-8 -bottom-4 w-12 h-12 border-r-2 border-b-2 border-hack-blue/50 hidden md:block" />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-white/85 font-medium mb-4 max-w-2xl mx-auto tracking-wide"
        >
          {HACKATHON_DETAILS.tagline}
        </motion.p>

        <p className="text-hack-gold/90 text-base md:text-lg uppercase tracking-[0.24em] mb-6 font-rajdhani font-semibold text-glow-gold">
          Build. Innovate. Solve.
        </p>

        <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
          HACKFUSION 2026 - 12-HOUR ONLINE HACKATHON
        </p>

        <h2 className="font-rajdhani text-3xl md:text-5xl font-bold tracking-[0.12em] text-white mb-2 text-glow-soft">
          12-HOUR ONLINE HACKATHON
        </h2>

        <p className="text-hack-blue text-xl md:text-2xl font-rajdhani font-bold tracking-[0.28em] mb-10 text-glow-blue">
          {HACKATHON_DETAILS.date}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-sm shadow-[0_0_24px_rgba(0,229,255,0.12)]">
            <div className="text-center">
              <p className="text-hack-pink font-rajdhani text-2xl font-bold text-glow-pink">SOFTWARE</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Domain</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-hack-blue font-rajdhani text-2xl font-bold text-glow-blue">HARDWARE</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Domain</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href={HACKATHON_DETAILS.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-hack-pink text-white font-rajdhani text-xl font-bold px-12 py-4 rounded-sm transition-all hover:scale-105 hover:bg-hack-pink/90 shadow-[0_0_24px_rgba(255,0,127,0.55)]"
            >
              REGISTER NOW
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />

              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-white" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-white" />
            </a>
            <Link
              to="/rounds"
              className="inline-flex items-center gap-2 border border-hack-blue/65 px-8 py-4 font-rajdhani text-lg font-bold uppercase tracking-wider text-hack-blue text-glow-blue hover:bg-hack-blue/8 transition-colors"
            >
              View Rounds
            </Link>
          </div>

          <p className="text-white/60 max-w-2xl text-sm md:text-base">
            Welcome to HACKFUSION 2026, a 12-hour online hackathon for students, developers, engineers, and innovators to transform ideas into real-world solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
