import { useEffect, useRef, useState } from 'react';
import { ourStory } from '../data/siteData';

const OurStory = () => {
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

  return (
    <section id="our-story" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Section Label */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">About Us</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3 leading-tight">
                Our Story
              </h2>
              <div className="w-12 h-0.5 bg-gold mt-4"></div>
            </div>

            <div className="text-base text-gray-600 space-y-4 leading-relaxed">
              <p>{ourStory.intro}</p>

              <div className="my-8 pl-5 border-l-2 border-gold/60">
                <p className="text-lg font-display italic text-navy/80 leading-relaxed">
                  "{ourStory.quote.text}"
                </p>
                <p className="text-xs text-gray-400 mt-3 tracking-wide uppercase">
                  — {ourStory.quote.author}, {ourStory.quote.role}
                </p>
              </div>

              <p>{ourStory.journey}</p>
              <p>{ourStory.present}</p>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Image area with professional styling */}
              <div className="relative h-[500px] bg-gradient-to-br from-navy to-navy-light rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Leo Club community service"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="border-l-2 border-gold pl-4">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Est. 2021</p>
                    <p className="text-white text-lg font-display font-bold mt-1">5 Years of Excellence</p>
                    <p className="text-white/60 text-sm mt-1">Building sustainable community leadership</p>
                  </div>
                </div>
              </div>

              {/* Subtle accent border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
