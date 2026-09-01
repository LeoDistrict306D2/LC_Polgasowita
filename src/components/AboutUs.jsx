import { useEffect, useRef, useState } from 'react';
import { Shield, Target, Eye, ChevronRight } from 'lucide-react';
import { aboutLionsClub, aboutDistrict, missionVision, clubInfo } from '../data/siteData';

const useReveal = (threshold = 0.15) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);
  return [ref, visible];
};

const AboutUs = () => {
  const [lionsRef, lionsVis] = useReveal();
  const [distRef, distVis] = useReveal();
  const [missionRef, missionVis] = useReveal();

  return (
    <>
      {/* ─── LIONS CLUB ─── */}
      <section id="lions-club" ref={lionsRef} className="section-y relative overflow-hidden" style={{ backgroundColor: '#0b132b' }}>
        {/* Ambient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 container-x">
          <div className={`transition-all duration-700 ${lionsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="label mb-3">About Us</div>
            <h2 className="text-title lg:text-display font-heading text-white mb-4 max-w-xl">
              Lions Club of Polgasowita
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 mb-12" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left card */}
            <div className={`lg:col-span-4 transition-all duration-700 delay-100 ${lionsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-card p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center mb-6 shadow-gold-glow">
                  <Shield className="w-6 h-6 text-navy-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-subtitle text-white mb-2">District 306-D2</h3>
                <p className="text-sm text-white/40 leading-relaxed">Sri Lanka &middot; Lions Clubs International</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={clubInfo.logo} alt="" className="w-10 h-10 rounded-full ring-2 ring-yellow-500/20" />
                    <div>
                      <p className="text-xs font-semibold text-white/80">Motto</p>
                      <p className="text-xs text-yellow-400/70 italic">"We Serve"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className={`lg:col-span-8 transition-all duration-700 delay-200 ${lionsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-card p-8 lg:p-10">
                <p className="text-[15px] text-white/50 leading-[1.85] whitespace-pre-line">
                  {aboutLionsClub.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DISTRICT ─── */}
      <section id="district" ref={distRef} className="section-y relative overflow-hidden" style={{ backgroundColor: '#070A12' }}>
        {/* Ambient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/[0.04] rounded-full blur-[150px] animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 container-x">
          <div className={`transition-all duration-700 ${distVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="label mb-3">Our District</div>
            <h2 className="text-title lg:text-display font-heading text-white mb-4">
              Leo District 306 D2
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 mb-6" />
            <p className="text-[15px] text-white/35 leading-relaxed max-w-2xl mb-12">
              {aboutDistrict.content}
            </p>
          </div>

          {/* Clubs grid */}
          <div className={`transition-all duration-700 delay-200 ${distVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-4">Member Clubs</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
              {aboutDistrict.clubs.map((club) => {
                const isUs = club === "Leo Club of Polgasowita";
                return (
                  <div
                    key={club}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                      isUs
                        ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                        : 'bg-white/[0.02] border border-white/[0.04] text-white/30 hover:bg-white/[0.04] hover:text-white/45'
                    }`}
                  >
                    {isUs && <ChevronRight size={12} className="text-yellow-400 flex-shrink-0" />}
                    {club}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`mt-10 glass-card p-6 transition-all duration-700 delay-300 ${distVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/30 text-sm leading-relaxed italic">
              {aboutDistrict.motto}
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section id="mission-vision" ref={missionRef} className="section-y relative overflow-hidden" style={{ backgroundColor: '#0b132b' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/[0.03] rounded-full blur-[200px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 container-x">
          <div className={`text-center mb-16 transition-all duration-700 ${missionVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="label mb-3 flex items-center justify-center gap-2">
              <div className="w-6 h-px bg-yellow-500/40" />
              Purpose
              <div className="w-6 h-px bg-yellow-500/40" />
            </div>
            <h2 className="text-title lg:text-display font-heading text-white">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission */}
            <div className={`group transition-all duration-700 delay-100 ${missionVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-card p-8 lg:p-10 h-full group-hover:border-yellow-500/20 group-hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 group-hover:bg-yellow-500/15 transition-colors">
                  <Target className="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-subtitle text-white mb-4">Our Mission</h3>
                <p className="text-[15px] text-white/40 leading-relaxed">
                  {missionVision.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`group transition-all duration-700 delay-200 ${missionVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-card p-8 lg:p-10 h-full group-hover:border-blue-500/20 group-hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/15 transition-colors">
                  <Eye className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-subtitle text-white mb-4">Our Vision</h3>
                <p className="text-[15px] text-white/40 leading-relaxed">
                  {missionVision.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
