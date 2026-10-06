import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Award, Sparkles, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CERTIFICATES_DRIVE_LINK, HACKATHON_DETAILS } from '../config';

const CONFETTI = Array.from({ length: 36 }).map((_, i) => ({
  left: `${(i * 29) % 100}%`,
  delay: (i % 14) * 0.35,
  duration: 5 + (i % 6),
  size: 4 + (i % 4) * 2,
  color: i % 4 === 0 ? '#FFD700' : i % 4 === 1 ? '#FF007F' : i % 4 === 2 ? '#00E5FF' : '#ffffff',
}));

// Medal with ribbon — the hero detail of the page
const MedalBadge = ({
  size = 'md',
  gradient,
  ring,
  icon,
  label,
  glow,
}: {
  size?: 'lg' | 'md';
  gradient: string;
  ring: string;
  icon: React.ReactNode;
  label: string;
  glow: string;
}) => {
  const dim = size === 'lg' ? 'h-24 w-24 md:h-28 md:w-28' : 'h-20 w-20';
  const iconWrap = size === 'lg' ? '[&>svg]:w-10 [&>svg]:h-10' : '[&>svg]:w-9 [&>svg]:h-9';
  return (
    <div className="flex flex-col items-center">
      {/* Ribbon */}
      <div className="flex -mb-3 relative z-0" aria-hidden="true">
        <div className={`w-5 ${size === 'lg' ? 'h-12' : 'h-9'} -rotate-[18deg] translate-x-1 bg-gradient-to-b from-hack-pink via-hack-pink/70 to-hack-pink/30 border border-white/20`} />
        <div className={`w-5 ${size === 'lg' ? 'h-12' : 'h-9'} rotate-[18deg] -translate-x-1 bg-gradient-to-b from-hack-blue via-hack-blue/70 to-hack-blue/30 border border-white/20`} />
      </div>
      {/* Rotating dashed halo */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className={`absolute ${size === 'lg' ? 'h-32 w-32 md:h-36 md:w-36' : 'h-28 w-28'} rounded-full border-2 border-dashed border-hack-gold/30`}
          aria-hidden="true"
        />
        <motion.div
          initial={{ scale: 0, rotate: -18 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 13 }}
          className={`relative ${dim} rounded-full ${gradient} ring-4 ${ring} ${glow} flex items-center justify-center ${iconWrap}`}
        >
          <span className="absolute inset-2 rounded-full border-2 border-dashed border-black/25" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/25 to-white/40 opacity-60" />
          <span className="relative drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">{icon}</span>
        </motion.div>
      </div>
      <span className="mt-4 bg-black border border-hack-gold/60 text-hack-gold text-[10px] md:text-[11px] font-bold px-4 py-1 tracking-[0.28em] rounded-full uppercase text-glow-gold">
        {label}
      </span>
    </div>
  );
};

const Winners = () => {
  return (
    <section id="winners" className="relative py-32 px-6 overflow-hidden">
      {/* Confetti rain */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {CONFETTI.map((c, i) => (
          <motion.span
            key={i}
            initial={{ y: -30, opacity: 0, rotate: 0 }}
            animate={{ y: ['-5vh', '110vh'], opacity: [0, 1, 1, 0], rotate: 360 }}
            transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: 'linear' }}
            className="absolute top-0 rounded-[2px]"
            style={{ left: c.left, width: c.size, height: c.size * 1.6, backgroundColor: c.color }}
          />
        ))}
      </div>

      {/* Spotlights — same palette as Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-hack-gold/10 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-hack-pink/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-hack-blue/10 blur-[120px]" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF7CC] via-hack-gold to-[#B8860B] shadow-[0_0_45px_rgba(255,215,0,0.55)] ring-4 ring-hack-gold/40">
              <Trophy className="w-8 h-8 text-black" />
            </span>
          </motion.div>
          <p className="inline-flex items-center gap-2 border border-hack-gold/40 bg-hack-gold/10 px-4 py-2 text-hack-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-5 text-glow-gold">
            <Sparkles size={15} />
            {HACKATHON_DETAILS.name} {HACKATHON_DETAILS.edition} — Results Are Live
          </p>
          <div className="relative inline-block">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tighter">
              <span className="text-white text-glow-soft">HALL OF</span>
              <br />
              <span className="bg-gradient-to-r from-hack-gold via-[#FFE27A] to-hack-gold bg-clip-text text-transparent [filter:drop-shadow(0_0_24px_rgba(255,215,0,0.35))]">
                FAME
              </span>
            </h1>
            <div className="absolute -left-8 -top-4 w-12 h-12 border-l-2 border-t-2 border-hack-gold/60 hidden md:block" />
            <div className="absolute -right-8 -bottom-4 w-12 h-12 border-r-2 border-b-2 border-hack-gold/60 hidden md:block" />
          </div>
          <p className="mt-6 text-hack-blue text-sm md:text-base uppercase tracking-[0.28em] text-glow-blue font-rajdhani font-bold">
            Winners — Hackfusion 2026
          </p>
        </motion.div>

        {/* Champion */}
        <motion.article
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative border border-hack-gold/70 bg-black/55 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 mb-8 overflow-hidden text-center shadow-[0_0_55px_rgba(255,215,0,0.22)] max-w-3xl mx-auto"
        >
          {/* Top gold beam + roaming shine */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-hack-gold to-transparent" />
          <motion.div
            animate={{ x: ['-120%', '120%'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-hack-gold/15 to-transparent skew-x-[-18deg]"
            aria-hidden="true"
          />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-hack-gold/15 blur-[90px]" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-hack-pink/15 blur-[90px]" />

          <motion.p
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 border border-hack-gold/50 bg-hack-gold/10 px-5 py-1.5 text-hack-gold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] text-glow-gold mb-6"
          >
            <Crown size={15} />
            1st Place — Champions
          </motion.p>

          <div className="flex justify-center mb-6">
            <MedalBadge
              size="lg"
              gradient="bg-gradient-to-br from-[#FFF7CC] via-hack-gold to-[#B8860B]"
              ring="ring-hack-gold/60"
              icon={<Crown className="text-black" />}
              label="Gold Medal"
              glow="shadow-[0_0_60px_rgba(255,215,0,0.55)]"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-soft tracking-tight mb-2">
            Team Jarvis
          </h2>
          <p className="text-hack-gold font-rajdhani text-base md:text-lg font-bold uppercase tracking-[0.26em] text-glow-gold mb-4">
            First Prize
          </p>
          <div className="flex items-center justify-center gap-1.5 mb-6" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
                <Star size={14} className="fill-hack-gold text-hack-gold" />
              </motion.span>
            ))}
          </div>

          {/* Champion stats strip */}
          <div className="mx-auto max-w-xl grid grid-cols-3 divide-x divide-white/10 border border-white/10 bg-white/[0.03]">
            {[
              { k: 'Rank', v: '#01' },
              { k: 'Medal', v: 'Gold' },
              { k: 'Edition', v: '2026' },
            ].map((s) => (
              <div key={s.k} className="py-3">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.24em] mb-1">{s.k}</p>
                <p className="text-hack-gold font-rajdhani text-lg md:text-xl font-bold text-glow-gold">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.article>

        {/* Podium — 2nd • 3rd • 4th */}
        <div className="grid gap-6 md:grid-cols-3 mb-8 items-stretch">
          {[
            {
              place: '2nd Place',
              team: 'Team Dark Fantasy',
              prize: 'Second Prize',
              medal: 'Silver Medal',
              gradient: 'bg-gradient-to-br from-white via-slate-300 to-slate-500',
              ring: 'ring-slate-300/50',
              glow: 'shadow-[0_0_35px_rgba(226,232,240,0.25)]',
              border: 'border-slate-300/50',
              beam: 'via-slate-200',
              icon: <Trophy className="text-black" />,
              text: 'text-black',
              bar: 'h-20',
              barBg: 'from-slate-300/30 via-slate-300/10',
              ghost: '02',
              accent: 'text-slate-200',
            },
            {
              place: '3rd Place',
              team: 'Team Biscoff',
              prize: 'Third Prize',
              medal: 'Bronze Medal',
              gradient: 'bg-gradient-to-br from-[#FFD9A8] via-[#CD7F32] to-[#7C3F0C]',
              ring: 'ring-amber-500/50',
              glow: 'shadow-[0_0_35px_rgba(217,119,6,0.3)]',
              border: 'border-amber-600/60',
              beam: 'via-amber-500',
              icon: <Medal className="text-white" />,
              text: 'text-white',
              bar: 'h-20',
              barBg: 'from-amber-600/30 via-amber-600/10',
              ghost: '03',
              accent: 'text-amber-300',
            },
            {
              place: '4th Place',
              team: 'Team BuzzCoders',
              prize: 'Fourth Prize',
              medal: 'Honour Medal',
              gradient: 'bg-gradient-to-br from-[#BFF6FF] via-hack-blue to-[#005F6B]',
              ring: 'ring-hack-blue/50',
              glow: 'shadow-[0_0_35px_rgba(0,229,255,0.28)]',
              border: 'border-hack-blue/60',
              beam: 'via-hack-blue',
              icon: <Award className="text-black" />,
              text: 'text-black',
              bar: 'h-20',
              barBg: 'from-hack-blue/30 via-hack-blue/10',
              ghost: '04',
              accent: 'text-hack-blue text-glow-blue',
            },
          ].map((w, index) => (
            <motion.article
              key={w.team}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative border ${w.border} ${w.glow} bg-black/50 backdrop-blur-sm px-6 pt-8 pb-6 text-center overflow-hidden transition-all duration-300 flex flex-col`}
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent ${w.beam} to-transparent`} />
              <p className="text-white/45 text-[11px] font-bold uppercase tracking-[0.3em] mb-5">{w.place}</p>
              <div className="flex justify-center mb-6">
                <MedalBadge
                  gradient={w.gradient}
                  ring={w.ring}
                  icon={w.icon}
                  label={w.medal}
                  glow={w.glow}
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-glow-soft leading-tight mb-1.5 min-h-[3.5rem] flex items-center justify-center">
                {w.team}
              </h3>
              <p className={`font-rajdhani text-base font-bold uppercase tracking-[0.2em] mb-6 ${w.accent}`}>
                {w.prize}
              </p>
              {/* Podium block — uniform size for all winners */}
              <div className="flex items-end justify-center mt-auto pt-4" aria-hidden="true">
                <div className={`w-full max-w-[180px] ${w.bar} rounded-t-sm bg-gradient-to-t ${w.barBg} to-transparent border-x border-t border-white/15 flex items-start justify-center pt-2`}>
                  <span className="font-rajdhani text-4xl font-bold text-white/15 leading-none">{w.ghost}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Final standings — same table language as EventDetails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm shadow-[0_0_28px_rgba(255,215,0,0.1)] mb-12"
        >
          <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
            <Trophy size={15} className="text-hack-gold" />
            <span className="text-hack-gold text-xs font-bold uppercase tracking-[0.24em] text-glow-gold">
              Final Standings
            </span>
          </div>
          {[
            { rank: 1, team: 'Team Jarvis', title: 'Champions', pill: 'First Prize', pillCls: 'text-hack-gold border-hack-gold/50 bg-hack-gold/10', dot: 'bg-gradient-to-br from-[#FFF7CC] via-hack-gold to-[#B8860B] text-black' },
            { rank: 2, team: 'Team Dark Fantasy', title: 'Runner Up', pill: 'Second Prize', pillCls: 'text-slate-200 border-slate-300/40 bg-slate-300/10', dot: 'bg-gradient-to-br from-white via-slate-300 to-slate-500 text-black' },
            { rank: 3, team: 'Team Biscoff', title: 'Second Runner Up', pill: 'Third Prize', pillCls: 'text-amber-300 border-amber-500/40 bg-amber-500/10', dot: 'bg-gradient-to-br from-[#FFD9A8] via-[#CD7F32] to-[#7C3F0C] text-white' },
            { rank: 4, team: 'Team BuzzCoders', title: 'Rising Stars', pill: 'Fourth Prize', pillCls: 'text-hack-blue border-hack-blue/40 bg-hack-blue/10', dot: 'bg-gradient-to-br from-[#BFF6FF] via-hack-blue to-[#005F6B] text-black' },
          ].map((w) => (
            <div
              key={w.team}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-5 md:p-6 border-b border-white/5 last:border-0 hover:bg-hack-gold/[0.04] transition-colors gap-3"
            >
              <span className="inline-flex items-center gap-4">
                <span className={`h-10 w-10 rounded-full ${w.dot} flex items-center justify-center font-rajdhani font-bold text-sm ring-2 ring-white/10`}>
                  {w.rank}
                </span>
                <span>
                  <span className="block text-white font-rajdhani text-xl md:text-2xl font-bold text-glow-soft leading-none">
                    {w.team}
                  </span>
                  <span className="block text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
                    {w.title}
                  </span>
                </span>
              </span>
              <span className={`text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 border ${w.pill}`}>
                {w.pill}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative border border-hack-gold/35 bg-hack-gold/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-hack-gold to-transparent" />
          <div>
            <p className="text-hack-gold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <Trophy size={14} />
              HackFusion 2026
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-glow-soft">
              Congratulations to all our winners.
            </h2>
            <p className="text-white/65 text-sm md:text-base mt-2">
              Build. Innovate. Solve. — see you at the next edition of {HACKATHON_DETAILS.name}.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={CERTIFICATES_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-hack-gold text-black px-6 py-3 font-rajdhani text-lg font-bold uppercase tracking-wider shadow-[0_0_22px_rgba(255,215,0,0.4)] hover:bg-hack-gold/85 transition-colors"
            >
              <Award size={18} />
              Get Certificates
              <ExternalLink size={16} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border border-hack-blue/65 px-6 py-3 font-rajdhani text-lg font-bold uppercase tracking-wider text-hack-blue text-glow-blue hover:bg-hack-blue/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Winners;
