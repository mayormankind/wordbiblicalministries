import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurTheology from './pages/OurTheology';
import AboutWBM from './pages/AboutWBM';
import AboutAFINT from './pages/AboutAFINT';
import Ministries from './pages/Ministries';
import DigitalAvailability from './pages/DigitalAvailability';
import Contact from './pages/Contact';
import Give from './pages/Give';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-theology" element={<OurTheology />} />
          <Route path="/about-wbm" element={<AboutWBM />} />
          <Route path="/about-afint" element={<AboutAFINT />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/digital-availability" element={<DigitalAvailability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Give />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}
