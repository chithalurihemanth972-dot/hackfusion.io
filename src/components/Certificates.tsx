import { motion } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink, FolderOpen } from 'lucide-react';
import { CERTIFICATES_DRIVE_LINK, HACKATHON_DETAILS } from '../config';

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 text-hack-blue text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-glow-blue">
            <BadgeCheck size={15} />
            Participation Recognized
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-soft">
            PARTICIPATION <span className="text-hack-gold">CERTIFICATES</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            HackFusion {HACKATHON_DETAILS.edition} — find your name, open the drive, download your certificate
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative border border-hack-gold/40 bg-black/50 backdrop-blur-sm p-8 md:p-12 overflow-hidden shadow-[0_0_32px_rgba(255,215,0,0.12)]"
        >
          {/* Top beam + glows — same language as Winners / Rounds teasers */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-hack-gold to-transparent" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-hack-blue/15 blur-[70px]" />
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-hack-pink/15 blur-[70px]" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="flex items-start gap-5">
              <div className="p-4 border border-hack-gold/50 bg-hack-gold/10 shrink-0">
                <Award className="w-8 h-8 text-hack-gold" />
              </div>
              <div>
                <p className="text-hack-gold text-xs font-bold uppercase tracking-[0.24em] mb-2 text-glow-gold">
                  Official Drive Folder
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white text-glow-soft leading-tight mb-3">
                  Grab Your Certificate
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
                  All participation certificates are stored in one shared Google Drive folder.
                  Click below to open the folder, search your name / team, and download your certificate.
                </p>
                <div className="mt-4 flex items-center gap-2 text-white/40 text-xs uppercase tracking-[0.18em]">
                  <FolderOpen size={14} className="text-hack-blue" />
                  Google Drive • PDF / Image • Free download
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={CERTIFICATES_DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-hack-gold text-black px-8 py-4 font-rajdhani text-lg font-bold uppercase tracking-wider shadow-[0_0_22px_rgba(255,215,0,0.4)] hover:bg-hack-gold/85 transition-colors"
              >
                Open Certificates
                <ExternalLink size={18} />
              </a>
              <p className="text-white/35 text-[11px] uppercase tracking-[0.16em] text-center">
                Opens in a new tab
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Certificates;
