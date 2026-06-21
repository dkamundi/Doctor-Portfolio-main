import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Scope from './pages/Scope';
import LiviaMediSpa from './pages/LiviaMediSpa';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/livia-medispa" element={<LiviaMediSpa />} />
      </Routes>
    </Router>
  );
}

export default App;