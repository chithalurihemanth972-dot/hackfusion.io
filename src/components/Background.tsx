import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-hack-bg" />
      <div className="absolute inset-0 circuit-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,229,255,0.08),transparent_26%),radial-gradient(circle_at_80%_85%,rgba(255,0,127,0.08),transparent_30%)]" />
      
      {/* Radial Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-hack-pink/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-hack-blue/10 blur-[120px] rounded-full" />
      
      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <motion.path
          d="M 0 100 L 200 100 L 250 150 L 500 150 L 550 100 L 1000 100"
          stroke="url(#gradient-pink)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1000 800 L 800 800 L 750 750 L 500 750 L 450 800 L 0 800"
          stroke="url(#gradient-blue)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient-pink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#FF007F" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-hack-blue/40 to-transparent"
        animate={{ x: ['-8%', '8%', '-8%'] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-hack-pink/40 to-transparent"
        animate={{ x: ['8%', '-8%', '8%'] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle nodes */}
      <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-hack-pink rounded-full blur-[2px] animate-pulse" />
      <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 bg-hack-blue rounded-full blur-[2px] animate-pulse" />
      <div className="absolute top-[60%] right-[10%] w-1 h-1 bg-hack-gold rounded-full blur-[1px] animate-pulse" />
    </div>
  );
};

export default Background;
