import { motion } from 'framer-motion';
import { Clock, Globe, Users, Trophy, CreditCard, Lightbulb } from 'lucide-react';
import { HACKATHON_DETAILS } from '../config';

const stats = [
  { label: 'DURATION', value: HACKATHON_DETAILS.duration, icon: Clock, color: 'text-hack-pink' },
  { label: 'MODE', value: HACKATHON_DETAILS.mode, icon: Globe, color: 'text-hack-blue' },
  { label: 'PARTICIPATION', value: HACKATHON_DETAILS.teamSize, icon: Users, color: 'text-hack-pink' },
  { label: 'PRIZE POOL', value: HACKATHON_DETAILS.prizePool, icon: Trophy, color: 'text-hack-gold' },
  { label: 'REGISTRATION', value: HACKATHON_DETAILS.registrationFee, icon: CreditCard, color: 'text-hack-blue' },
  { label: 'THEME', value: HACKATHON_DETAILS.theme, icon: Lightbulb, color: 'text-hack-gold' },
];

const EventStats = () => {
  return (
    <div className="relative z-10 py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <stat.icon className={`w-6 h-6 mb-3 ${stat.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <h3 className="text-white font-rajdhani text-xl font-bold tracking-tight mb-1 text-glow-soft">{stat.value}</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventStats;
