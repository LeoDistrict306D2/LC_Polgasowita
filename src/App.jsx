import { useState, useCallback } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className="min-h-screen" style={{ backgroundColor: '#070A12' }}>
        <Navbar />
        <Hero />
        <AboutUs />
        <Projects />
        <Leadership />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
