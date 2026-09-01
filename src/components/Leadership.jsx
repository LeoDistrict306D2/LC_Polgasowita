import { useEffect, useRef, useState } from 'react';
import { executiveBoard } from '../data/siteData';

const roleColors = {
  'President': 'from-yellow-500 to-amber-500',
  'Vice President': 'from-yellow-400 to-yellow-500',
  'Treasurer': 'from-blue-400 to-blue-500',
  'Secretary': 'from-violet-400 to-violet-500',
  'Assistant Secretary': 'from-violet-300 to-violet-400',
  'Assistant Treasurer': 'from-blue-300 to-blue-400',
  'Leo Advisor': 'from-amber-400 to-amber-500',
};

const Leadership = () => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="executive-board" ref={ref} className="section-y relative overflow-hidden" style={{ backgroundColor: '#0b132b' }}>
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container-x">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="label mb-3 flex items-center justify-center gap-2">
            <div className="w-6 h-px bg-yellow-500/40" />
            Leadership
            <div className="w-6 h-px bg-yellow-500/40" />
          </div>
          <h2 className="text-title lg:text-display font-heading text-white">Executive Board</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* President - featured */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card overflow-hidden group hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 relative h-72 md:h-auto overflow-hidden">
                  <img
                    src={executiveBoard[0].image}
                    alt={executiveBoard[0].role}
                    className="img-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                </div>
                <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <span className={`self-start px-3 py-1 rounded-full text-[11px] font-bold text-navy-900 bg-gradient-to-r ${roleColors['President']} shadow-gold-glow mb-4`}>
                    President
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {executiveBoard[0].name || 'To be announced'}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    Leading the Leo Club of Polgasowita with dedication and passion for community service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {executiveBoard.slice(1).map((member, i) => {
              const gradient = roleColors[member.role] || 'from-gray-400 to-gray-500';
              return (
                <div
                  key={member.role}
                  className={`group transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(i + 2) * 80}ms` }}
                >
                  <div className="glass-card overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                    {/* Photo */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.role}
                        className="img-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/70 via-[#0b132b]/20 to-transparent" />
                      {/* Role badge */}
                      <div className="absolute bottom-3 left-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold text-navy-900 bg-gradient-to-r ${gradient}`}>
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <p className="text-[13px] font-medium text-white/50">
                        {member.name || 'To be announced'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
