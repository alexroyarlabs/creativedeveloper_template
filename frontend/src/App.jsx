import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import InsightsPage from "./pages/InsightsPage";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-muted">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
