import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-base text-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech opacity-30" aria-hidden />
      <div className="absolute inset-x-16 top-10 h-48 blur-[120px] bg-primary/20" aria-hidden />
      <div className="absolute right-0 bottom-0 h-72 w-72 bg-accent/10 blur-[110px]" aria-hidden />
      <div className="relative z-10">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
