import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, Car } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar({ currency, onCurrencyChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="navbar-logo-icon">
            <Car size={22} />
          </div>
          <div>
            AURUM<span className="navbar-brand-accent">.</span>
          </div>
          <span className="navbar-badge-georgia">Georgia</span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Main Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy-policy"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Currency & Phone CTA */}
        <div className="navbar-actions">
          <select
            className="currency-select"
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            aria-label="Select Currency"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GEL">GEL (₾)</option>
          </select>

          <a href="tel:+995511266766" className="navbar-phone-btn">
            <Phone size={16} />
            <span>+995 511 26 67 66</span>
          </a>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Main Page
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Privacy Policy
          </NavLink>
          <a
            href="tel:+995511266766"
            className="navbar-phone-btn"
            onClick={closeMobileMenu}
          >
            <Phone size={16} />
            <span>+995 511 26 67 66</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
