import { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Send } from 'lucide-react';
import '../styles/CarDetailModal.css';

function BookingModal({ car, onClose, currencySymbol, convertedPrice }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: '',
    endDate: '',
    location: 'Tbilisi Airport (TBS)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!car) return null;

  // Calculate Days & Total Cost
  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 1;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const days = calculateDays();
  const totalEstimate = days * convertedPrice;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content booking-modal-content animate-fade"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span className="badge badge-silver" style={{ marginBottom: '12px' }}>
                VIP Reservation
              </span>
              <h2 className="car-detail-model" style={{ fontSize: '1.8rem' }}>
                Rent {car.brand} {car.model}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '6px' }}>
                Complete the inquiry form below. No advance payment or security deposit required.
              </p>
            </div>

            {/* Price Summary Block */}
            <div className="booking-summary-card">
              <div className="summary-row">
                <span>Daily Rate ({car.sits || 5} Sits)</span>
                <span>
                  {currencySymbol}{convertedPrice} / day
                </span>
              </div>
              <div className="summary-row">
                <span>Rental Duration</span>
                <span>{days} {days === 1 ? 'Day' : 'Days'}</span>
              </div>
              <div className="summary-row">
                <span>VIP Insurance & Airport Delivery</span>
                <span style={{ color: 'var(--accent-silver-light)', fontWeight: 600 }}>Included (0 ₾)</span>
              </div>
              <div className="summary-row total">
                <span>Total Estimated Cost</span>
                <span style={{ color: 'var(--accent-silver)' }}>
                  {currencySymbol}{totalEstimate}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="booking-form-grid">
                <div className="form-group">
                  <label className="form-label">Rental Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Rental End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Giorgi Beridze"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

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
                    placeholder="client@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Delivery Location</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Tbilisi Airport (TBS)">Tbilisi Airport (TBS)</option>
                    <option value="Rike Park Parking">Rike Park Parking (Office)</option>
                    <option value="Tbilisi Center Hotel">Tbilisi Center Hotel</option>
                    <option value="Batumi Delivery">Batumi / Other Georgia City</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Special Request / Chauffeur Option</label>
                  <input
                    type="text"
                    name="notes"
                    placeholder="Optional: Chauffeur driver, child seat, specific delivery time..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '10px' }}
              >
                <ShieldCheck size={18} />
                <span>Confirm VIP Reservation</span>
              </button>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div
              style={{
                width: 64,
                height: 64,
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
              <CheckCircle size={36} />
            </div>

            <h3 className="car-detail-model" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
              Reservation Request Received!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Our VIP concierge team is reviewing your reservation for the{' '}
              <strong style={{ color: 'var(--accent-silver)' }}>{car.brand} {car.model}</strong>. We will contact you on WhatsApp or phone within 15 minutes to confirm delivery.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/995511266766"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <Send size={18} />
                <span>Chat on WhatsApp Now</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                <span>Close Window</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
