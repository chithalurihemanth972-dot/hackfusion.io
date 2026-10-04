import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import { PROBLEM_STATEMENTS } from '../config';

const ProblemStatements = () => {
  return (
    <section id="problem-statements" className="py-24 px-6 bg-white/[0.01]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-hack-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-glow-gold">
            Download & Start Building
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-soft">
            PROBLEM <span className="text-hack-pink">STATEMENTS</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Pick your track, download the PDF, and start hacking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEM_STATEMENTS.map((doc, index) => (
            <motion.article
              key={doc.file}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`group relative border ${doc.accentBorder} bg-black/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${doc.accentGlow}`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 border ${doc.accentBorder} bg-white/[0.03]`}>
                  <FileText className={`w-7 h-7 ${doc.accentText}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${doc.accentText}`}>
                    {doc.tag}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-glow-soft mt-1">
                    {doc.title}
                  </h3>
                </div>
              </div>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {doc.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={doc.file}
                  download
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-hack-pink text-white px-5 py-3 font-rajdhani text-base font-bold uppercase tracking-wider shadow-[0_0_18px_rgba(255,0,127,0.45)] hover:bg-hack-pink/85 transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </a>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-hack-blue/60 px-5 py-3 font-rajdhani text-base font-bold uppercase tracking-wider text-hack-blue text-glow-blue hover:bg-hack-blue/10 transition-colors"
                >
                  <Eye size={18} />
                  View
                </a>
              </div>

              <p className="text-white/35 text-xs uppercase tracking-[0.16em] mt-4">
                PDF • Click download to save • View to open in new tab
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
