import { useEffect, useRef, useState } from 'react';
import { Leaf, BookOpen, Heart, Users } from 'lucide-react';
import { corePillars } from '../data/siteData';

const CorePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const iconMap = {
    leaf: Leaf,
    book: BookOpen,
    heart: Heart,
    users: Users,
  };

  const pillars = corePillars.map(pillar => ({
    ...pillar,
    icon: iconMap[pillar.icon],
  }));

  return (
    <section id="core-pillars" ref={sectionRef} className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold/80">What We Stand For</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3">
            Core Pillars
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 mb-4"></div>
          <p className="text-base text-white/50 max-w-xl mx-auto">
            The foundation of our mission and the values that drive everything we do
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative bg-white/[0.04] border border-white/10 rounded-lg p-7 transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-gold/30 rounded flex items-center justify-center mb-5 group-hover:border-gold/60 transition-all duration-300">
                <pillar.icon className="w-6 h-6 text-gold/80 group-hover:text-gold" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-bold text-white mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
