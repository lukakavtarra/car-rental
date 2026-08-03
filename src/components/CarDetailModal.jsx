import {
  X,
  Users,
  Tag,
  Car,
  Palette,
  ShieldCheck,
  Zap,
  Gauge,
  CalendarCheck
} from 'lucide-react';
import '../styles/CarDetailModal.css';

function CarDetailModal({ car, onClose, onOpenBooking, currencySymbol, convertedPrice }) {
  if (!car) return null;

  // Handles both sits and seats in case of different naming
  const seatCount = car.sits || car.seats || 5;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content car-detail-split animate-fade"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Left: High-Res Car Photography */}
        <div className="car-detail-left">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="car-detail-main-img"
          />
          <div className="car-detail-img-overlay">
            <span className="badge badge-silver">VIP Fleet Tbilisi</span>
            <span style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600 }}>
              100% Comprehensive Insurance Included
            </span>
          </div>
        </div>

        {/* Right: Detailed Information (sits/price/brand/model/color/description) */}
        <div className="car-detail-right">
          <div>
            <div className="car-detail-brand">
              <Car size={16} />
              <span>{car.brand} • {car.category || 'Luxury Fleet'}</span>
            </div>
            <h2 className="car-detail-model">{car.model}</h2>
          </div>

          {/* Key Details Grid required by user: sits / price / brand / model / color */}
          <div className="car-detail-info-grid">
            <div className="detail-info-cell">
              <span className="detail-info-label">
                <Car size={14} />
                <span>Brand & Model</span>
              </span>
              <span className="detail-info-value">{car.brand} {car.model}</span>
            </div>

            <div className="detail-info-cell">
              <span className="detail-info-label">
                <Tag size={14} />
                <span>Daily Rental Price</span>
              </span>
              <span className="detail-info-value accent">
                {currencySymbol}{convertedPrice} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ day</span>
              </span>
            </div>

            <div className="detail-info-cell">
              <span className="detail-info-label">
                <Users size={14} />
                <span>Sits (Seats)</span>
              </span>
              <span className="detail-info-value">{seatCount} Sits</span>
            </div>

            <div className="detail-info-cell">
              <span className="detail-info-label">
                <Palette size={14} />
                <span>Color</span>
              </span>
              <span className="detail-info-value">{car.color}</span>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h4 className="car-detail-section-title">Vehicle Description</h4>
            <p className="car-detail-desc">{car.description}</p>
          </div>

          {/* Technical Specifications */}
          {car.specs && (
            <div>
              <h4 className="car-detail-section-title">Performance Specs</h4>
              <div className="car-specs-badges">
                <div className="car-spec-badge">
                  <Zap size={14} color="var(--accent-silver)" />
                  <span>{car.specs.engine}</span>
                </div>
                <div className="car-spec-badge">
                  <Gauge size={14} color="var(--accent-silver)" />
                  <span>0-100: {car.specs['0to100']}</span>
                </div>
                <div className="car-spec-badge">
                  <span>Top Speed: {car.specs.topSpeed}</span>
                </div>
                <div className="car-spec-badge">
                  <span>{car.specs.transmission}</span>
                </div>
              </div>
            </div>
          )}

          {/* VIP Perks Box */}
          <div className="car-detail-vip-box">
            <div className="vip-icon-box">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.94rem' }}>
                Full VIP Concierge Package
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Free delivery to Tbilisi International Airport or hotel. Zero hidden deposits & 24/7 technical assistance.
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              style={{ flex: '1' }}
            >
              <span>Close</span>
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onOpenBooking(car);
              }}
              style={{ flex: '2' }}
            >
              <CalendarCheck size={18} />
              <span>Rent {car.brand} Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailModal;
