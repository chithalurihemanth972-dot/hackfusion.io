import { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-10 w-auto' }: LogoProps) => {
  const logoCandidates = [
    '/kprojectxx-logo.png',
    '/kprojectxx.png',
    '/KprojectXx.png',
    '/KprojectXx.PNG',
    '/PROJECTXX.png',
    '/projectxx.png',
    '/kprojectxx.jpg',
    '/kprojectxx.jpeg',
    '/logo.png',
  ];
  const [logoIndex, setLogoIndex] = useState(0);
  const [hideImage, setHideImage] = useState(false);

  const currentSrc = logoCandidates[logoIndex];

  if (hideImage) {
    return (
      <div
        className={`${className} inline-flex items-center justify-center border border-hack-gold/60 px-3 text-hack-gold font-rajdhani text-xs tracking-[0.15em]`}
      >
        KPROJECTXX
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt="KprojectXx community logo"
      className={`${className} object-contain`}
      onError={() => {
        if (logoIndex < logoCandidates.length - 1) {
          setLogoIndex((value) => value + 1);
        } else {
          setHideImage(true);
        }
      }}
    />
  );
};

export default Logo;
