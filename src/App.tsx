import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import EventStats from './components/EventStats';
import About from './components/About';
import Domains from './components/Domains';
import Rounds from './components/Rounds';
import RoundsTeaser from './components/RoundsTeaser';
import EventDetails from './components/EventDetails';
import RegistrationCTA from './components/RegistrationCTA';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <EventStats />
      <About />
      <Domains />
      <RoundsTeaser />
      <EventDetails />
      <RegistrationCTA />
    </main>
  );
};

const RoundsPage = () => {
  return (
    <main>
      <Rounds />
    </main>
  );
};

const AppShell = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen selection:bg-hack-pink/30 selection:text-white">
      <Background />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rounds" element={<RoundsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
