import { Users, Gauge, Zap, ChevronRight, CalendarCheck } from 'lucide-react';
import '../styles/Cars.css';

function CarCard({ car, onOpenDetails, onOpenBooking, currencySymbol, convertedPrice }) {
  // Use sits or seats property from JSON
  const seatCount = car.sits || car.seats || 5;

  return (
    <div className="car-card animate-fade">
      {/* Image & Badges */}
      <div className="car-card-img-wrapper" onClick={() => onOpenDetails(car)} style={{ cursor: 'pointer' }}>
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="car-card-img"
          loading="lazy"
        />
        <span className="car-card-brand-badge">{car.brand}</span>
        <span className="car-card-seats-badge">
          <Users size={13} />
          <span>{seatCount} Seats</span>
        </span>
      </div>

      {/* Card Body */}
      <div className="car-card-body">
        <h3 className="car-card-model">{car.model}</h3>
        <div className="car-card-color">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-silver)', display: 'inline-block' }}></span>
          <span>{car.color}</span>
        </div>

        <p className="car-card-desc-preview">{car.description}</p>

        {/* Specs Highlights */}
        {car.specs && (
          <div className="car-card-specs-row">
            <div className="spec-item" title="Engine">
              <Zap size={15} color="var(--accent-silver)" />
              <span>{car.specs.engine}</span>
            </div>
            <div className="spec-item" title="0-100 km/h">
              <Gauge size={15} color="var(--accent-silver)" />
              <span>{car.specs['0to100']}</span>
            </div>
          </div>
        )}

        {/* Footer & Action Buttons */}
        <div className="car-card-footer">
          <div className="car-price-block">
            <div className="car-price-value">
              {currencySymbol}{convertedPrice}
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}> / day</span>
            </div>
            <span className="car-price-unit">Insurance Included</span>
          </div>

          <div className="car-card-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onOpenDetails(car)}
              style={{ padding: '10px 16px', fontSize: '0.88rem' }}
            >
              <span>Details</span>
              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenBooking(car)}
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              <CalendarCheck size={16} />
              <span>Rent Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
