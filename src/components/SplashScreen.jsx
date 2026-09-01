import { useState, useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('hold'), 100);
    const exitTimer = setTimeout(() => setPhase('exit'), 4300);
    const finishTimer = setTimeout(() => onFinish(), 5000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#070A12' }}
    >
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'splashGridMove 20s linear infinite',
          }}
        />
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)'
                : 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)',
              animation: `splashOrb ${5 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Concentric rings */}
      <div className="absolute">
        {[1, 2, 3].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border"
            style={{
              width: `${ring * 140}px`,
              height: `${ring * 140}px`,
              top: `${-ring * 70}px`,
              left: `${-ring * 70}px`,
              borderColor: ring === 1 ? 'rgba(255,215,0,0.15)' : 'rgba(255,255,255,0.05)',
              animation: `splashRingPulse ${2 + ring}s ease-in-out infinite`,
              animationDelay: `${ring * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with hexagon frame */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            phase !== 'enter'
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-12'
          }`}
        >
          <div className="relative">
            {/* Spinning dashed ring */}
            <svg
              className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)]"
              viewBox="0 0 200 200"
              style={{ animation: 'splashSpin 6s linear infinite' }}
            >
              <circle
                cx="100" cy="100" r="95"
                fill="none"
                stroke="rgba(255,215,0,0.25)"
                strokeWidth="1"
                strokeDasharray="8 12"
              />
            </svg>
            {/* Logo circle */}
            <div
              className="relative w-36 h-36 rounded-full overflow-hidden border-2 flex items-center justify-center"
              style={{
                borderColor: 'rgba(255,215,0,0.4)',
                background: 'linear-gradient(135deg, #0b132b, #0D1320)',
                boxShadow: '0 0 50px rgba(255,215,0,0.15), 0 0 100px rgba(255,215,0,0.05), inset 0 0 30px rgba(255,215,0,0.05)',
              }}
            >
              <img
                src="/images/logo/logo_p.jpeg"
                alt="Leo Club of Polgasowita"
                className="w-full h-full object-contain p-3"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center absolute inset-0">
                <span className="text-3xl font-heading font-bold text-gold-500">LEO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Club name */}
        <div className="text-center">
          <div
            className={`transition-all duration-700 delay-300 ${
              phase !== 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide">
              <span className="text-gold-500">Leo Club</span>
              <span className="text-white"> of</span>
            </h1>
          </div>
          <div
            className={`transition-all duration-700 delay-500 ${
              phase !== 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-white mt-1">
              POLGASOWITA
            </h1>
          </div>

          {/* Gold divider with diamond */}
          <div
            className={`flex items-center justify-center gap-2 mt-6 transition-all duration-1000 delay-700 ${
              phase !== 'enter' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
            <div className="w-2 h-2 bg-gold-500/60 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>

          {/* Tagline */}
          <div
            className={`transition-all duration-700 delay-[900ms] ${
              phase !== 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-4 font-body">
              Leadership &middot; Experience &middot; Opportunity
            </p>
          </div>

          {/* Motto */}
          <div
            className={`transition-all duration-700 delay-[1100ms] ${
              phase !== 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-gold-500/60 text-sm font-heading italic mt-3">
              "Small acts, Big Impacts"
            </p>
          </div>
        </div>

        {/* Loading dots */}
        <div className="mt-10 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold-500/50"
              style={{
                animation: 'splashDot 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes splashGridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes splashOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.1); }
          66% { transform: translate(-10px, 15px) scale(0.9); }
        }
        @keyframes splashRingPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        @keyframes splashSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes splashDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
