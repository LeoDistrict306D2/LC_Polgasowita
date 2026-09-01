import { useEffect, useRef, useState } from 'react';
import { ChevronUp, Leaf, BookOpen, Users, DollarSign, ArrowRight } from 'lucide-react';
import { projects } from '../data/siteData';

const cats = {
  Education: { icon: BookOpen, bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-500', border: 'border-blue-500/20' },
  Environment: { icon: Leaf, bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-500', border: 'border-emerald-500/20' },
  Community: { icon: Users, bg: 'bg-violet-500/10', text: 'text-violet-400', dot: 'bg-violet-500', border: 'border-violet-500/20' },
  Fundraising: { icon: DollarSign, bg: 'bg-amber-500/10', text: 'text-amber-400', dot: 'bg-amber-500', border: 'border-amber-500/20' },
};

const Projects = () => {
  const [vis, setVis] = useState(false);
  const [open, setOpen] = useState(null);
  const ref = useRef(null);

  const featured = projects.filter((p) => p.featured);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="projects" ref={ref} className="section-y relative overflow-hidden" style={{ backgroundColor: '#070A12' }}>
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container-x">
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="label mb-3">Our Impact</div>
          <h2 className="text-title lg:text-display font-heading text-white mb-3">Projects & Activities</h2>
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 mb-4" />
          <p className="text-[15px] text-white/35 max-w-lg">
            Turning passion into action through meaningful community service.
          </p>
        </div>

        {/* Featured */}
        <div className={`mb-16 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-5">Featured Projects</div>
          <div className="grid lg:grid-cols-3 gap-5">
            {featured.map((project, i) => {
              const c = cats[project.category] || cats.Community;
              const isOpen = open === i;
              return (
                <div
                  key={project.name}
                  className={`glass-card overflow-hidden flex flex-col transition-all duration-300 ${
                    isOpen ? '!border-yellow-500/20 lg:col-span-3' : ''
                  }`}
                >
                  {project.image && (
                    <div className={`relative overflow-hidden ${isOpen ? 'h-56' : 'h-44'}`}>
                      <img src={project.image} alt={project.name} className="img-cover transition-transform duration-700 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${c.bg} ${c.text} border ${c.border} backdrop-blur-sm`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="text-[15px] font-heading font-bold text-white mb-1">{project.name}</h4>
                    {project.phases && (
                      <p className="text-[11px] text-white/30 font-medium mb-3">{project.phases.join(' / ')}</p>
                    )}
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-yellow-400 hover:text-yellow-300 transition-colors pt-3"
                    >
                      {isOpen ? 'Show less' : 'Read more'}
                      {isOpen ? <ChevronUp size={13} /> : <ArrowRight size={13} />}
                    </button>
                  </div>

                  <div className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className="px-5 pb-6">
                      <div className="border-t border-white/10 pt-5">
                        {project.phaseImages && (
                          <div className="grid grid-cols-3 gap-3 mb-5">
                            {project.phaseImages.map((img, j) => (
                              <div key={j} className="relative rounded-xl overflow-hidden h-28 border border-white/10">
                                <img src={img} alt={`Phase ${j + 1}`} className="img-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/60 to-transparent" />
                                <span className="absolute bottom-2 left-2.5 text-white text-[10px] font-bold">Phase {j + 1}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="text-[13px] text-white/40 leading-[1.85] whitespace-pre-line">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Projects */}
        <div className={`transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-5">All Projects</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {projects.map((project, i) => {
              const c = cats[project.category] || cats.Community;
              const Icon = c.icon;
              return (
                <div
                  key={project.name}
                  className={`group glass-card p-4 hover:-translate-y-0.5 hover:!border-white/20 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-3.5 h-3.5 ${c.text}`} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[12px] font-heading font-bold text-white/80 truncate group-hover:text-yellow-400 transition-colors">
                        {project.name}
                      </h4>
                      <span className={`text-[10px] font-semibold ${c.text}`}>{project.category}</span>
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

export default Projects;
