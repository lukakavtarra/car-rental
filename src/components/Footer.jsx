import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Clock, Globe, MessageCircle, Send } from 'lucide-react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <Link to="/" className="navbar-brand">
              <div className="navbar-logo-icon">
                <Car size={22} />
              </div>
              <div>
                Name<span className="navbar-brand-accent">.</span>
              </div>
              <span className="navbar-badge-georgia">Georgia</span>
            </Link>
            <p className="footer-brand-p">
              Premium car rental in Tbilisi, Georgia. Experience unmatched prestige with our luxury and exotic fleet: Lamborghini Urus SE, Mercedes-AMG G63, BMW M5, Audi RS6, and more. 24/7 VIP service & airport delivery.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Website & Instagram"
              >
                <Globe size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Facebook & Messenger"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Main Page</Link>
              </li>
              <li>
                <Link to="/">Fleet Showroom</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Office Location & Hours */}
          <div>
            <h4 className="footer-col-title">Location & Hours</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="icon" />
              <span>Rike Park, On the Parking, Tbilisi, Georgia (GE-TB)</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="icon" />
              <span>08:00 – 22:00, Monday to Sunday</span>
            </div>
            <div className="footer-contact-item">
              <Car size={18} className="icon" />
              <span>24/7 Airport Delivery & VIP Pick-up</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">VIP Concierge</h4>
            <div className="footer-contact-item">
              <Phone size={18} className="icon" />
              <a href="tel:+995511266766">+995 511 26 67 66</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="icon" />
              <a href="mailto:name.carrent@gmail.com">name.carrent@gmail.com</a>
            </div>
            <div style={{ marginTop: '16px' }}>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', padding: '10px' }}>
                Online Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Name Georgia. Luxury & Exotic Car Rental Tbilisi. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
