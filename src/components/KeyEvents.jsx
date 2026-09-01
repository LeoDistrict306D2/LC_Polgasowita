import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const KeyEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const events = [
    {
      type: 'upcoming',
      title: 'Community Health Drive',
      date: 'March 15, 2026',
      location: 'Downtown Community Center',
      description: 'Free health screenings, wellness workshops, and medical consultations for underserved communities.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    },
    {
      type: 'upcoming',
      title: 'Youth Leadership Summit',
      date: 'April 22, 2026',
      location: 'City Convention Hall',
      description: 'A full-day conference featuring keynote speakers, breakout sessions, and networking opportunities.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    },
    {
      type: 'past',
      title: 'Environmental Clean-Up Campaign',
      date: 'February 10, 2026',
      location: 'Riverside Park',
      description: 'Over 200 volunteers participated in cleaning local waterways and planting 500 trees.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&q=80',
    },
    {
      type: 'past',
      title: 'Winter Charity Gala',
      date: 'December 18, 2025',
      location: 'Grand Ballroom',
      description: 'Raised $50,000 for local education initiatives through a night of celebration and recognition.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
    },
  ];

  return (
    <section id="key-events" ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-dark">Our Impact</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mt-3">
            Events
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4 mb-4"></div>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Join us in making a difference or see the impact we've already made
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded text-xs font-semibold tracking-wide uppercase ${
                    event.type === 'upcoming'
                      ? 'bg-gold text-navy'
                      : 'bg-white/90 text-gray-700'
                  }`}>
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-navy mb-3">
                  {event.title}
                </h3>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-gold" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-gold" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {event.description}
                </p>

                <button className="inline-flex items-center text-sm text-gold-dark hover:text-navy font-semibold transition-colors duration-300 group/btn">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyEvents;
