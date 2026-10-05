import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const WinnersTeaser = () => {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative border border-hack-gold/40 bg-black/45 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_32px_rgba(255,215,0,0.14)] overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-hack-gold to-transparent" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-hack-gold/15 blur-[60px]" />
          <div>
            <p className="inline-flex items-center gap-2 text-hack-gold text-xs uppercase tracking-[0.24em] mb-3 text-glow-gold">
              <Trophy size={14} />
              Results Declared
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold text-glow-soft flex items-center gap-3">
              Meet the Winners
              <Crown size={28} className="text-hack-gold" />
            </h2>
          </div>
          <Link
            to="/winners"
            className="inline-flex items-center gap-2 bg-hack-gold text-black px-6 py-3 font-rajdhani text-lg font-bold uppercase tracking-wider shadow-[0_0_22px_rgba(255,215,0,0.4)] hover:bg-hack-gold/85 transition-colors shrink-0"
          >
            View Winners
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WinnersTeaser;
