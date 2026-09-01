import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight, X, Users, Globe, Compass } from 'lucide-react';
import { clubInfo } from '../data/siteData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (mobileOpen) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      body.style.overflow = 'auto';
      body.style.position = 'relative';
    }
    return () => {
      body.style.overflow = 'auto';
      body.style.position = 'relative';
    };
  }, [mobileOpen]);

  const dropIcons = {
    'Lions Club': Users,
    'District 306 D2': Globe,
    'Mission & Vision': Compass,
  };

  const links = [
    { href: '#home', label: 'Home' },
    {
      label: 'About Us',
      items: [
        { href: '#lions-club', label: 'Lions Club' },
        { href: '#district', label: 'District 306 D2' },
        { href: '#mission-vision', label: 'Mission & Vision' },
      ],
    },
    { href: '#projects', label: 'Projects' },
    { href: '#executive-board', label: 'Board' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const go = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropdown(null);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-[60] transition-all duration-300 ${
          scrolled
            ? 'bg-[#070A12]/85 backdrop-blur-2xl shadow-[0_8px_28px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        {/* Scroll progress bar */}
        <div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500 z-[100] origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* Gold gradient top line - only when scrolled */}
        {scrolled && (
          <div aria-hidden="true" className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-70" />
        )}

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => go(e, '#home')} className="flex items-center gap-3 group">
            <img
              src={clubInfo.logo}
              alt="Leo Club"
              className={`rounded-full object-cover transition-all duration-300 group-hover:scale-105 ${
                scrolled ? 'w-9 h-9' : 'w-10 h-10'
              }`}
            />
            <div className="flex flex-col">
              <span className={`font-heading font-bold leading-none tracking-tight text-white transition-all duration-300 ${
                scrolled ? 'text-[15px]' : 'text-base'
              }`}>
                Leo Club of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                  Polgasowita
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-white/80">
            {links.map((link, i) =>
              link.items ? (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => { clearTimeout(timeout.current); setDropdown(i); }}
                  onMouseLeave={() => { timeout.current = setTimeout(() => setDropdown(null), 150); }}
                >
                  <button className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    dropdown === i
                      ? 'text-yellow-400 bg-white/[0.06]'
                      : 'hover:text-white hover:bg-white/[0.04]'
                  }`}>
                    {link.label}
                    <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-200 ${dropdown === i ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 transition-all duration-200 origin-top ${
                    dropdown === i
                      ? 'opacity-100 visible scale-100 translate-y-0'
                      : 'opacity-0 invisible scale-[0.98] -translate-y-2'
                  }`}>
                    {/* Arrow */}
                    <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 rounded-sm" />
                    <div className="relative bg-white text-gray-800 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden">
                      <div className="p-1.5">
                        {link.items.map((item) => {
                          const Icon = dropIcons[item.label] || Users;
                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={(e) => go(e, item.href)}
                              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                            >
                              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 transition-colors">
                                <Icon className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <span className="text-[13px] font-medium text-gray-700 group-hover/item:text-gray-900">{item.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="px-4 py-2.5 rounded-lg hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                >
                  {link.label}
                </a>
              )
            )}

            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mx-2" />

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold bg-gradient-to-r from-yellow-500 to-amber-500 text-[#070A12] hover:from-yellow-400 hover:to-amber-400 shadow-[0_0_12px_rgba(255,215,0,0.15)] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 hover:-translate-y-px"
            >
              Join Us
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white/80 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-[55] transition-opacity duration-300 ${
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu Panel */}
      <div className={`fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-[#0a0f1c] text-white shadow-2xl lg:hidden overflow-y-auto z-[56] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Mobile Header */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={clubInfo.logo} alt="Leo Club" className="w-6 h-6 object-cover rounded-full" />
            <span className="text-[13px] font-semibold text-white/90">Leo Club of Polgasowita</span>
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        <div className="h-px bg-white/[0.06] mx-5 my-1" />

        {/* Mobile Links */}
        <div className="px-3 py-4 space-y-0.5">
          {links.map((link, i) =>
            link.items ? (
              <div key={i}>
                <button
                  onClick={() => setDropdown(dropdown === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 opacity-40 transition-transform duration-200 ${dropdown === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdown === i ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="ml-4 pl-4 border-l border-yellow-500/20 space-y-0.5 py-1">
                    {link.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => go(e, item.href)}
                        className="block px-3 py-2.5 rounded-lg text-[13px] text-white/40 hover:text-yellow-400 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={i}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="block px-4 py-3 rounded-xl text-[14px] font-medium text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile CTA */}
        <div className="px-5 pt-2 pb-8">
          <a
            href="#contact"
            onClick={(e) => go(e, '#contact')}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-bold text-[13px] bg-gradient-to-r from-yellow-500 to-amber-500 text-[#070A12]"
          >
            Join Us
            <ArrowUpRight size={13} />
          </a>
          <p className="text-center text-[10px] text-white/15 mt-3 tracking-wider">Small acts, Big Impacts</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
