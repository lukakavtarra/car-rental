import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import '../styles/Pages.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: 'Lamborghini Urus SE',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="section-padding">
      <div className="container">
        {/* Contact Hero Title */}
        <div className="contact-hero" style={{ textAlign: 'center' }}>
          <span className="badge badge-silver">VIP Support & Reservations</span>
          <h1 className="section-title" style={{ marginTop: '14px', fontSize: '3rem' }}>
            Contact <span>JOCAR</span> Georgia
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a question about our luxury fleet, custom airport delivery, or long-term VIP leasing in Tbilisi? Our concierge team is at your service.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-page-grid">
          {/* Left: Contact & Inquiry Form */}
          <div className="contact-form-card">
            {!submitted ? (
              <>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
                  Send an Inquiry
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Fill out the form below and a senior reservations manager will contact you within 15 minutes.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. David Beridze"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+995 5xx xxx xxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="vip@client.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested Vehicle</label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="Lamborghini Urus SE">Lamborghini Urus SE 2024</option>
                      <option value="Mercedes-AMG G63">Mercedes-AMG G63 Edition 55</option>
                      <option value="BMW M5 Competition">BMW M5 Competition</option>
                      <option value="Audi RS6 Avant">Audi RS6 Avant Performance</option>
                      <option value="Porsche 911 GT3 RS">Porsche 911 GT3 RS</option>
                      <option value="Range Rover Sport">Range Rover Sport Autobiography</option>
                      <option value="Ferrari Roma">Ferrari Roma V8 Coupe</option>
                      <option value="Mercedes-Maybach S680">Mercedes-Maybach S680 V12</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message or Dates</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Specify dates, airport flight number, or special requests..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '16px', fontSize: '1rem', marginTop: '10px' }}
                  >
                    <Send size={18} />
                    <span>Submit VIP Inquiry</span>
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: '50%',
                    background: 'var(--accent-silver-soft)',
                    border: '1px solid var(--accent-silver)',
                    color: 'var(--accent-silver-light)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}
                >
                  <CheckCircle2 size={38} />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
                  Inquiry Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 auto 28px', maxWidth: 440 }}>
                  Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Our VIP concierge team is reviewing your message regarding the{' '}
                  <strong style={{ color: 'var(--accent-silver)' }}>{formData.vehicle}</strong>. We will reach out to you within 15 minutes.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            )}
          </div>

          {/* Right: Tbilisi Location & Opening Hours */}
          <div className="contact-info-card">
            <div>
              <span className="badge badge-silver" style={{ marginBottom: '12px' }}>
                Tbilisi Head Office
              </span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>
                JOCAR Georgia Location
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                Visit our VIP showroom parking or schedule terminal delivery at Tbilisi International Airport.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '12px' }}>
              <div className="info-item-row">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    Showroom Address
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                    Rike Park, On the Parking, Tbilisi, Georgia (GE-TB)
                  </div>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    Opening Hours
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                    08:00 – 22:00, Monday to Sunday
                  </div>
                  <div style={{ color: 'var(--accent-silver-light)', fontSize: '0.82rem', fontWeight: 600, marginTop: '2px' }}>
                    24/7 Airport Terminal Delivery Available
                  </div>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    Direct Phone / Concierge
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                    <a href="tel:+995511266766">+995 511 26 67 66</a>
                  </div>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    Email Reservations
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                    <a href="mailto:jocar.carrent@gmail.com">jocar.carrent@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Messengers */}
            <div style={{ borderTop: '1px solid rgba(168, 169, 173, 0.15)', paddingTop: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Instant Connect
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/995511266766"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ flex: '1', padding: '12px' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+995511266766"
                  className="btn btn-secondary"
                  style={{ flex: '1', padding: '12px' }}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
