import { Facebook, Instagram, Linkedin, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { contact, clubInfo } from '../data/siteData';

const Footer = () => {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#lions-club', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#executive-board', label: 'Board' },
  ];

  const social = [
    { icon: Facebook, href: contact.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: contact.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: contact.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      {/* Gold gradient top line */}
      <div className="gold-line" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 container-x pt-18 pb-10">
        {/* Top CTA */}
        <div className="text-center mb-18">
          <h3 className="text-title font-heading text-white mb-3">Ready to make an impact?</h3>
          <p className="text-[15px] text-white/30 mb-8 max-w-md mx-auto">
            Join our vibrant community of young leaders making a difference.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-navy-900 text-sm font-bold rounded-full shadow-gold-glow hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] transition-all duration-300 hover:-translate-y-px"
            >
              Become a Member
            </a>
            <a
              href={contact.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/[0.04] border border-white/[0.08] text-white/60 text-sm font-semibold rounded-full hover:bg-white/[0.08] hover:text-white/80 transition-all duration-300"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.05] mb-12" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={clubInfo.logo} alt="" className="w-9 h-9 rounded-full ring-2 ring-yellow-500/20" />
              <div>
                <p className="font-heading font-bold text-[13px] text-white">Leo Club</p>
                <p className="text-[10px] text-white/25 font-medium tracking-wide uppercase">Polgasowita</p>
              </div>
            </div>
            <p className="text-[13px] text-white/25 leading-relaxed mb-5">
              Small acts, Big Impacts. Building a brighter future since 2002.
            </p>
            <div className="flex gap-2">
              {social.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/25 hover:text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/20 transition-all duration-300"
                  aria-label={label}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/15 mb-4">Navigate</p>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => go(e, l.href)}
                    className="text-[13px] text-white/25 hover:text-yellow-400 transition-colors font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/15 mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-yellow-500/40 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-[13px] text-white/25 hover:text-yellow-400 transition-colors font-medium">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-500/40 flex-shrink-0" />
                <span className="text-[13px] text-white/25">Polgasowita, Sri Lanka</span>
              </li>
            </ul>
            <div className="mt-4 space-y-1.5">
              {social.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-white/20 hover:text-yellow-400 transition-colors font-medium">
                  {label} <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
          </div>

          {/* Sponsor */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/15 mb-4">Sponsored By</p>
            <p className="text-[13px] text-white/25 leading-relaxed">
              Lions Club of Polgasowita
            </p>
            <p className="text-[12px] text-white/15 mt-1">
              Lions Clubs International &middot; District 306 D2
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-white/[0.04] mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Leo Club of Polgasowita. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[11px] text-white/15">
            Made with <Heart size={10} className="text-yellow-500/40" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
