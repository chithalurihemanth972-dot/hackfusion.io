import { HACKATHON_DETAILS } from '../config';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <Logo className="h-12 md:h-14 w-auto" />
            <span className="font-rajdhani text-3xl md:text-4xl font-bold tracking-tighter text-white text-glow-soft">
              {HACKATHON_DETAILS.name} {HACKATHON_DETAILS.edition}
            </span>
          </div>
          
          <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-8 max-w-md font-semibold">
            {HACKATHON_DETAILS.tagline}
          </p>
          
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
          
          <p className="text-hack-gold font-rajdhani text-lg md:text-xl font-bold tracking-widest mb-4 text-glow-gold">
            {HACKATHON_DETAILS.organizer} PRESENTS
          </p>

          <div className="border border-hack-blue/35 bg-hack-blue/5 px-6 py-3 mb-6 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
            <p className="text-hack-blue text-xs uppercase tracking-[0.3em] font-bold">Official Mark</p>
            <p className="text-white text-lg md:text-xl font-rajdhani font-bold tracking-[0.12em]">
              {HACKATHON_DETAILS.mark}
            </p>
          </div>
          
          <p className="text-white/30 text-xs font-semibold tracking-[0.16em] uppercase">
            © {new Date().getFullYear()} {HACKATHON_DETAILS.name}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
