import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HACKATHON_DETAILS } from '../config';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Domains', href: '/#domains' },
    { name: 'Statements', href: '/#problem-statements' },
    { name: 'Details', href: '/#details' },
  ];

  const pageLinks = [{ name: 'Home', href: '/' }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hack-bg/80 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" aria-label="HackFusion home">
          <Logo className="h-10 w-auto" />
          <span className="font-rajdhani text-2xl font-bold tracking-tighter text-white">
            {HACKATHON_DETAILS.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {(location.pathname === '/' ? homeLinks : pageLinks).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-rajdhani text-sm font-semibold uppercase tracking-widest text-white/75 transition-colors hover:text-hack-blue hover:[text-shadow:0_0_10px_rgba(0,229,255,0.6)]"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/rounds"
            className={`font-rajdhani text-sm font-semibold uppercase tracking-widest transition-colors ${
              location.pathname === '/rounds'
                ? 'text-hack-gold text-glow-gold'
                : 'text-white/75 hover:text-hack-blue hover:[text-shadow:0_0_10px_rgba(0,229,255,0.6)]'
            }`}
          >
            Rounds
          </Link>
          <Link
            to="/winners"
            className={`font-rajdhani text-sm font-semibold uppercase tracking-widest transition-colors ${
              location.pathname === '/winners'
                ? 'text-hack-gold text-glow-gold'
                : 'text-hack-gold/90 hover:text-hack-gold hover:[text-shadow:0_0_10px_rgba(255,215,0,0.6)]'
            }`}
          >
            Winners
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {(location.pathname === '/' ? homeLinks : pageLinks).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-rajdhani text-lg font-semibold uppercase tracking-widest text-white/70"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/rounds"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-rajdhani text-lg font-semibold uppercase tracking-widest text-hack-gold"
              >
                Rounds
              </Link>
              <Link
                to="/winners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-rajdhani text-lg font-semibold uppercase tracking-widest text-hack-gold"
              >
                Winners
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
