import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-5 z-50 w-10 h-10 rounded-full bg-[#0a0f1c] border border-white/10 text-white/50 hover:text-yellow-400 hover:border-yellow-500/30 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)] flex items-center justify-center transition-all duration-300 backdrop-blur-xl ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={16} />
    </button>
  );
};

export default ScrollToTop;
