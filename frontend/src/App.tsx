import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import PlayerCard from './pages/PlayerCard';
import HowItWorks from './pages/HowItWorks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear" element={<CreateGame />} />
        <Route path="/carton" element={<PlayerCard />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
