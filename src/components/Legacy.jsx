import { useEffect, useRef, useState } from 'react';
import { Award, Star, Crown } from 'lucide-react';
import { hallOfPresidents, legacyStats } from '../data/siteData';

const Legacy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    presidents: 0,
    pillars: 0,
    impact: 0,
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const stats = legacyStats;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const value = Math.min(Math.floor(increment * currentStep), stat.value);

        setCounters((prev) => ({
          ...prev,
          [stat.key]: value,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section id="legacy" ref={sectionRef} className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold/70">Our Journey</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3">
            Hall of Presidents
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 mb-4"></div>
          <p className="text-base text-white/40 max-w-xl mx-auto">
            Five years of exceptional leadership building a foundation of excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/[0.03] border border-white/8 rounded-lg p-6">
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-display font-bold text-gold">
                    {counters[stat.key].toLocaleString()}
                  </span>
                  <span className="text-2xl font-display font-bold text-gold">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-white/50 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hall of Presidents Timeline */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto space-y-4">
            {hallOfPresidents.map((president, index) => (
              <div
                key={president.year}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className={`bg-white/[0.04] border rounded-lg p-6 lg:p-8 transition-all duration-300 hover:bg-white/[0.06] ${
                  president.current ? 'border-gold/50' : 'border-white/8 hover:border-white/15'
                }`}>
                  <div className="flex items-start gap-5">
                    {/* Year Badge */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center border ${
                      president.current
                        ? 'bg-gold border-gold text-navy'
                        : 'bg-white/[0.05] border-white/10 text-gold/80'
                    } font-display font-bold text-lg`}>
                      {president.current ? <Crown size={22} /> : `Y${president.year}`}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-lg font-display font-bold text-white">
                            {president.name}
                          </h3>
                          <p className="text-gold/70 text-sm font-medium">
                            {president.role} &middot; {president.period}
                          </p>
                        </div>
                        {president.year === 1 && (
                          <span className="px-3 py-1 border border-gold/30 rounded text-gold/80 text-xs font-semibold tracking-wide uppercase">
                            Charter
                          </span>
                        )}
                        {president.current && (
                          <span className="px-3 py-1 bg-gold rounded text-navy text-xs font-bold tracking-wide uppercase">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                          <p className="text-white/60">
                            {president.achievement}
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                          <p className="text-white/60">
                            {president.focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl font-display italic text-white/60 max-w-3xl mx-auto">
            "Five years is a lifetime of impact. We didn't just start a club; we ignited a movement."
          </p>
          <p className="text-sm text-gold/70 mt-4 font-semibold tracking-wide">— Leo Meshak Fernando, 5th President</p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
