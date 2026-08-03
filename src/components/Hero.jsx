import { Search, Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';
import '../styles/Hero.css';

function Hero({ filters, onFilterChange, onResetFilters, currencySymbol }) {
  return (
    <section className="hero-section">
      {/* Background Image & Dark Overlay */}
      <img
        src="/images/hero.jpg"
        alt="Luxury Car Rental Fleet Tbilisi"
        className="hero-bg-image"
      />
      <div className="hero-gradient-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content animate-fade">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Name • RENT A CAR IN TBILISI, GEORGIA</span>
          </div>

          <h1 className="hero-title">
            Drive the <span className="hero-title-accent">Exceptional</span> in Georgia.
          </h1>

          <p className="hero-subtitle">
            Rent luxury & exotic cars in Tbilisi from $300/day: Lamborghini Urus SE, Mercedes-AMG G63, BMW M5, Audi RS6, Range Rover Sport. Full VIP insurance, 24/7 airport delivery, and chauffeur options.
          </p>

          <div className="hero-cta-group">
            <a href="#fleet" className="btn btn-primary">
              <Search size={18} />
              <span>Explore Luxury Fleet</span>
            </a>
            <a href="tel:+995511266766" className="btn btn-secondary">
              <span>VIP Concierge: +995 511 26 67 66</span>
            </a>
          </div>
        </div>

        {/* Quick Filter & Search Box */}
        <div className="hero-filter-box animate-fade" id="fleet-search">
          <div className="hero-filter-grid">
            {/* Brand Select */}
            <div className="filter-item">
              <label className="filter-label">
                <SlidersHorizontal size={14} />
                <span>Select Brand</span>
              </label>
              <select
                className="filter-select"
                value={filters.brand}
                onChange={(e) => onFilterChange('brand', e.target.value)}
              >
                <option value="ALL">All Luxury Brands</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Mercedes-AMG">Mercedes-AMG</option>
                <option value="Mercedes-Maybach">Mercedes-Maybach</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Porsche">Porsche</option>
                <option value="Range Rover">Range Rover</option>
                <option value="Ferrari">Ferrari</option>
              </select>
            </div>

            {/* Category Select */}
            <div className="filter-item">
              <label className="filter-label">
                <span>Vehicle Type</span>
              </label>
              <select
                className="filter-select"
                value={filters.category}
                onChange={(e) => onFilterChange('category', e.target.value)}
              >
                <option value="ALL">All Categories</option>
                <option value="SUV">SUV</option>
                <option value="Sports">Sports & Exotic</option>
                <option value="Sedan">Executive Sedan</option>
                <option value="Luxury">Chauffeur Luxury</option>
              </select>
            </div>

            {/* Max Daily Price Slider */}
            <div className="filter-item">
              <div className="filter-slider-header">
                <span className="filter-label">Max Price / Day</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-silver-light)' }}>
                  {currencySymbol}{filters.maxPrice >= 1500 ? 'Any' : filters.maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="1500"
                step="50"
                value={filters.maxPrice}
                onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
                className="filter-slider"
              />
            </div>

            {/* Reset / Action */}
            <div className="filter-actions">
              <button
                type="button"
                onClick={onResetFilters}
                className="btn btn-outline"
                style={{ padding: '12px 18px', height: '100%' }}
                title="Reset Filters"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Ticker */}
        <div className="hero-stats-row">
          <div className="stat-card">
            <span className="stat-number">8+</span>
            <span className="stat-label">Exotic Supercars & SUVs</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">VIP Insurance Included</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0 ₾</span>
            <span className="stat-label">Hidden Fees or Deposits</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Tbilisi Airport Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
