import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroData, clubInfo, legacyStats } from '../data/siteData';

/* Animated counter hook */
const useCounter = (end, duration = 2000, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const stepTime = duration / steps;
    const tick = () => {
      current += increment;
      if (current >= end) {
        setValue(end);
      } else {
        setValue(Math.floor(current));
        raf = setTimeout(tick, stepTime);
      }
    };
    tick();
    return () => clearTimeout(raf);
  }, [end, duration, start]);
  return value;
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const slides = heroData.slides;

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  // Trigger counter animation when stats come into view
  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden bg-navy-950">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1.5s] ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/80 via-[#070A12]/50 to-[#070A12]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070A12]/70 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-x w-full">
          <div className="max-w-2xl">
            {/* Pill badge */}
            <div className="opacity-0 animate-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.08] mb-8">
              <img src={clubInfo.logo} alt="" className="w-5 h-5 rounded-full" />
              <span className="text-white/50 text-[11px] font-medium tracking-wider uppercase">
                Est. {clubInfo.foundedDate} &middot; District {clubInfo.district}
              </span>
            </div>

            {/* Heading */}
            <h1 className="opacity-0 animate-fade-up animation-delay-200">
              <span className="block text-display-xl text-white mb-2 font-heading">
                Small acts,
              </span>
              <span className="block text-display-xl font-heading gradient-text">
                Big Impacts
              </span>
            </h1>

            {/* Subtext */}
            <p className="opacity-0 animate-fade-up animation-delay-400 mt-6 text-[16px] text-white/35 leading-relaxed max-w-lg">
              A vibrant community of over 50 young leaders turning passion into action through dynamic service projects since 2002.
            </p>

            {/* CTAs */}
            <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-wrap items-center gap-3 mt-10">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-[#070A12] text-[13px] font-bold rounded-full shadow-[0_0_12px_rgba(255,215,0,0.15)] hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-300 hover:-translate-y-px"
              >
                Explore Projects
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#lions-club"
                onClick={(e) => { e.preventDefault(); document.querySelector('#lions-club')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-white/70 text-[13px] font-semibold rounded-full hover:bg-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
              >
                About Us
              </a>
            </div>

            {/* Animated Stats */}
            <div ref={statsRef} className="opacity-0 animate-fade-up mt-14 flex items-center gap-6 sm:gap-8" style={{ animationDelay: '0.8s' }}>
              {legacyStats.map((stat) => (
                <StatItem key={stat.key} stat={stat} animate={statsVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container-x flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? 'w-8 h-1 bg-gradient-to-r from-yellow-400 to-amber-500'
                    : 'w-1 h-1 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button onClick={prev}
              className="w-9 h-9 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-yellow-400 hover:bg-white/[0.1] hover:border-yellow-500/25 transition-all duration-300">
              <ChevronLeft size={15} />
            </button>
            <button onClick={next}
              className="w-9 h-9 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-yellow-400 hover:bg-white/[0.1] hover:border-yellow-500/25 transition-all duration-300">
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b132b] to-transparent z-10" />
    </section>
  );
};

/* Stat counter component */
const StatItem = ({ stat, animate }) => {
  const count = useCounter(stat.value, 2000, animate);
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-2xl sm:text-3xl font-heading font-bold text-white tabular-nums">
        {count.toLocaleString()}
      </span>
      <span className="text-yellow-400 text-sm font-bold">{stat.suffix}</span>
      <span className="text-white/20 text-[11px] font-medium ml-1 hidden sm:inline">{stat.label}</span>
    </div>
  );
};

export default Hero;
