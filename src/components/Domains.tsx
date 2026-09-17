import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';
import { HACKATHON_DETAILS } from '../config';

const domains = [
  {
    title: 'SOFTWARE',
    description: HACKATHON_DETAILS.softwareDomainSummary,
    items: HACKATHON_DETAILS.softwareDomains,
    icon: Code2,
    color: 'border-hack-blue',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]',
    iconColor: 'text-hack-blue',
  },
  {
    title: 'HARDWARE',
    description: 'Design and develop innovative embedded, robotics, IoT, aerospace, EV, and engineering solutions.',
    items: HACKATHON_DETAILS.hardwareDomains,
    icon: Cpu,
    color: 'border-hack-pink',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,127,0.24)]',
    iconColor: 'text-hack-pink',
  },
];

const Domains = () => {
  return (
    <section id="domains" className="py-24 px-6 bg-white/[0.01]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-soft">
            EXPLORE YOUR <span className="text-hack-gold">DOMAIN</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Choose your track and start building the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {domains.map((domain, index) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative p-10 border ${domain.color} ${domain.glow} bg-black/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1`}
            >
              <domain.icon className={`w-12 h-12 ${domain.iconColor} mb-6`} />
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight text-glow-soft">{domain.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg mb-6">
                {domain.description}
              </p>

              <ul className="space-y-3">
                {domain.items.map((item) => (
                  <li key={item} className="text-white/80 text-sm md:text-base flex items-center gap-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${domain.title === 'SOFTWARE' ? 'bg-hack-blue' : 'bg-hack-pink'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 ${domain.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
