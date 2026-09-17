import { motion } from 'framer-motion';
import { HACKATHON_DETAILS } from '../config';

const detailItems = [
  { label: 'FORMAT', value: HACKATHON_DETAILS.mode },
  { label: 'DURATION', value: HACKATHON_DETAILS.duration },
  { label: 'DATE', value: HACKATHON_DETAILS.date },
  { label: 'TEAM SIZE', value: HACKATHON_DETAILS.teamSize },
  { label: 'SOFTWARE DOMAIN', value: 'SOFTWARE' },
  { label: 'HARDWARE DOMAIN', value: 'HARDWARE' },
  { label: 'THEME', value: HACKATHON_DETAILS.theme },
  { label: 'REGISTRATION FEE', value: HACKATHON_DETAILS.registrationFee },
  { label: 'PRIZE POOL', value: HACKATHON_DETAILS.prizePool },
];

const EventDetails = () => {
  return (
    <section id="details" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-soft">
            HACKATHON <span className="text-hack-pink">DETAILS</span>
          </h2>
        </motion.div>

        <div className="bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm shadow-[0_0_28px_rgba(0,229,255,0.1)]">
          {detailItems.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors`}
            >
              <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-0">
                {item.label}
              </span>
              <span className="text-white font-rajdhani text-xl md:text-2xl font-bold text-glow-soft">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
