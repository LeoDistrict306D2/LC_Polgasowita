import { useEffect, useRef, useState } from 'react';
import { FileText, Download, Calendar, Image } from 'lucide-react';

const Resources = () => {
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

  const resources = [
    {
      icon: FileText,
      title: 'Club Constitution',
      description: 'Official governing document outlining our mission, structure, and bylaws.',
      type: 'PDF',
    },
    {
      icon: Download,
      title: 'Volunteer Guide',
      description: 'Comprehensive handbook for new members and volunteers.',
      type: 'PDF',
    },
    {
      icon: Calendar,
      title: 'Event Calendar',
      description: 'Interactive calendar with all upcoming meetings, events, and activities.',
      type: 'LINK',
    },
    {
      icon: Image,
      title: 'Photo Gallery',
      description: 'Browse through our collection of memorable moments and impactful events.',
      type: 'LINK',
    },
  ];

  return (
    <section id="resources" ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-dark">Downloads</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3">
            Resources
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 mb-4"></div>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Everything you need to get started and stay connected
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((resource, index) => (
            <a
              key={index}
              href="#"
              className={`group block bg-white rounded-lg p-6 transition-all duration-400 border border-gray-100 hover:border-gold/40 hover:shadow-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-gold/40 transition-all duration-300">
                <resource.icon className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-base font-display font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {resource.description}
              </p>

              {/* Type Badge */}
              <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 group-hover:text-gold-dark transition-colors duration-300">
                {resource.type}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
