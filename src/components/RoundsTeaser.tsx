import { motion } from 'framer-motion';
import { ArrowRight, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoundsTeaser = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-hack-blue/40 bg-black/45 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_0_28px_rgba(0,229,255,0.12)]"
        >
          <div>
            <p className="text-hack-blue text-xs uppercase tracking-[0.24em] mb-3">Rounds Portal</p>
            <h2 className="text-3xl md:text-4xl text-white font-bold text-glow-soft mb-3">
              Round 1, 2, 3 Submission Hub
            </h2>
            <p className="text-white/70 max-w-2xl">
              Submission links will be published on the dedicated rounds page as soon as each round opens.
            </p>
          </div>
          <Link
            to="/rounds"
            className="inline-flex items-center gap-2 border border-hack-pink/60 bg-hack-pink/12 px-6 py-3 font-rajdhani text-lg font-bold uppercase tracking-wider text-white shadow-[0_0_22px_rgba(255,0,127,0.3)] hover:bg-hack-pink/22 transition-colors"
          >
            View Rounds
            <ArrowRight size={18} />
          </Link>
        </motion.div>
        <div className="mt-4 flex items-center gap-2 text-white/45 text-xs uppercase tracking-[0.18em]">
          <Link2 size={14} className="text-hack-gold" />
          Official links status: To be declared
        </div>
      </div>
    </section>
  );
};

export default RoundsTeaser;