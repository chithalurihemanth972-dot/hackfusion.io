import { motion } from 'framer-motion';
import { ExternalLink, Link2, Timer } from 'lucide-react';
import { HACKATHON_DETAILS } from '../config';

const rounds: { title: string; subtitle: string; status: string; link?: string; closed?: boolean; deadline?: string }[] = [
  {
    title: 'ROUND 0',
    subtitle: 'FINALISE YOUR PROBLEM STATEMENT',
    status: 'Google Form Closed.',
    closed: true,
  },
  {
    title: 'ROUND 1',
    subtitle: 'IDEATION & PROBLEM STATEMENT',
    status: 'Google Form Closed.',
    closed: true,
  },
  {
    title: 'ROUND 2',
    subtitle: 'BUILD & PROTOTYPE',
    status: 'Google Form Closed.',
    closed: true,
  },
  {
    title: 'ROUND 3',
    subtitle: 'FINAL DEMO & PRESENTATION',
    status: 'Submission link to be declared on this page.',
  },
];

const Rounds = () => {
  return (
    <section id="rounds" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-hack-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-glow-gold">
            Dedicated Submissions Hub
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow-soft tracking-tight">
            ROUNDS
          </h1>
          <p className="text-hack-blue text-lg md:text-xl tracking-[0.2em] uppercase text-glow-blue mb-5">
            Round Links Will Be Published Here
          </p>
          <p className="text-white/65 max-w-3xl mx-auto">
            This page is the official place for round-wise submission URLs. As each round opens,
            the active submission link will be updated below.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {rounds.map((round, index) => (
            <motion.article
              key={round.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`relative border bg-black/50 p-7 transition-all duration-300 ${
                round.link
                  ? 'border-hack-gold/60 shadow-[0_0_28px_rgba(255,215,0,0.16)] hover:shadow-[0_0_36px_rgba(255,215,0,0.28)]'
                  : 'border-white/10 hover:border-hack-blue/60 hover:shadow-[0_0_28px_rgba(0,229,255,0.16)]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white text-glow-soft">{round.title}</h3>
                <Timer className="w-5 h-5 text-hack-gold" />
              </div>
              <p className="text-hack-blue font-rajdhani text-base tracking-wide mb-5">
                {round.subtitle}
              </p>
              {round.link ? (
                <>
                  <div className="border border-hack-gold/40 px-4 py-3 mb-4 bg-hack-gold/5">
                    <p className="text-hack-gold text-xs uppercase tracking-[0.18em] mb-1">Submission Status</p>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-hack-gold animate-pulse" />
                      {round.status}
                    </p>
                    {round.deadline && (
                      <p className="text-hack-gold text-sm font-bold uppercase tracking-[0.18em] mt-2 flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        Deadline: {round.deadline}
                      </p>
                    )}
                  </div>
                  <a
                    href={round.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 bg-hack-gold text-black px-5 py-3 font-rajdhani text-base font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:bg-hack-gold/85 transition-colors"
                  >
                    Submit Now
                    <ExternalLink size={16} />
                  </a>
                </>
              ) : (
                <>
                  <div className="border border-hack-pink/35 px-4 py-3 mb-4 bg-hack-pink/5">
                    <p className="text-hack-pink text-xs uppercase tracking-[0.18em] mb-1">Submission Status</p>
                    <p className="text-white/75 text-sm flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-hack-pink" />
                      {round.status}
                    </p>
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.16em]">{round.closed ? 'Submissions closed' : 'Link field: To be declared'}</p>
                </>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border border-hack-blue/35 bg-hack-blue/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-hack-blue text-xs uppercase tracking-[0.2em] mb-2">HackFusion 2026</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow-soft">
              Build. Innovate. Solve.
            </h2>
            <p className="text-white/65 text-sm md:text-base mt-2">
              {HACKATHON_DETAILS.name} {HACKATHON_DETAILS.edition} is live. Explore the rounds and problem statements below.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rounds;