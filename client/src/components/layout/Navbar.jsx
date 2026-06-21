import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
      <div className="container">
        <Link className="navbar-brand mx-auto d-lg-none" to="/">
          Dr. Reuben
          <strong className="d-block">Plastic Surgeon</strong>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className={`nav-item ${isActive('/')}`}>
              <a className="nav-link" href="#hero">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">Background</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#procedures">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#mission-vision-values">Goals</a>
            </li>

            <Link className="navbar-brand d-none d-lg-block" to="/">
              Dr. Kamundi
              <strong className="d-block">Plastic Surgeon</strong>
            </Link>

            <li className="nav-item">
              <a className="nav-link" href="#booking">Booking</a>
            </li>

            <li className={`nav-item ${isActive('/gallery')}`}>
              <Link className="nav-link" to="/gallery">Archive</Link>
            </li>

            <li className={`nav-item ${isActive('/scope')}`}>
              <Link className="nav-link" to="/scope">Scope</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            <li className={`nav-item ${isActive('/livia-medispa')}`}>
              <Link className="nav-link" to="/livia-medispa">Livia-MediSpa</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;