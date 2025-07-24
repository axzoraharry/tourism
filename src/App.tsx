import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Hotels from './pages/Hotels';
import Shops from './pages/Shops';
import ComputerCenters from './pages/ComputerCenters';
import Wildlife from './pages/Wildlife';
import Dams from './pages/Dams';
import Waterfalls from './pages/Waterfalls';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/computer-centers" element={<ComputerCenters />} />
            <Route path="/wildlife" element={<Wildlife />} />
            <Route path="/dams" element={<Dams />} />
            <Route path="/waterfalls" element={<Waterfalls />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;