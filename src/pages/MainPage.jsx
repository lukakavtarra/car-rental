import { useState } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import CarCard from '../components/CarCard';
import {
  ShieldCheck,
  Plane,
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Sparkles
} from 'lucide-react';
import '../styles/Pages.css';
import carsData from '../data/cars.json';

const FAQ_ITEMS = [
  {
    question: 'What is included in the rental price?',
    answer:
      'All JOCAR Georgia rentals include 100% Comprehensive VIP Insurance, standard mileage allowance, 24/7 roadside assistance, and complimentary delivery to Tbilisi International Airport (TBS) or your hotel in Tbilisi.'
  },
  {
    question: 'What documents are required to rent a luxury car in Georgia?',
    answer:
      'You will need a valid international or national Driving License held for at least 2 years, a valid Passport, and to be at least 21 years of age for standard models (23+ for supercars and V12 Maybach models).'
  },
  {
    question: 'Is a security deposit required?',
    answer:
      'No hidden fees. We offer zero-security-deposit options for verified VIP bookings or short-term credit card authorizations that are immediately released upon vehicle return.'
  },
  {
    question: 'Can I travel outside of Tbilisi (e.g., Batumi, Kazbegi)?',
    answer:
      'Yes! Our vehicles are authorized to travel throughout Georgia. Let our concierge know your itinerary, and we can prepare your SUV for high-altitude scenic roads like Gudauri and Kazbegi.'
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept USD ($), EUR (€), and GEL (₾) via Cash, Visa, MasterCard, American Express, or bank transfer.'
  }
];

function MainPage({ onOpenDetails, onOpenBooking, currency, currencySymbol }) {
  const [filters, setFilters] = useState({
    brand: 'ALL',
    category: 'ALL',
    maxPrice: 1500
  });

  const [openFaq, setOpenFaq] = useState(0);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({ brand: 'ALL', category: 'ALL', maxPrice: 1500 });
  };

  const handleBrandSelect = (brandId) => {
    setFilters((prev) => ({ ...prev, brand: brandId }));
  };

  // Convert prices based on active currency
  const getConvertedPrice = (usdPrice) => {
    if (currency === 'EUR') return Math.round(usdPrice * 0.92);
    if (currency === 'GEL') return Math.round(usdPrice * 2.75);
    return usdPrice;
  };

  // Filter Cars
  const filteredCars = carsData.filter((car) => {
    const matchBrand = filters.brand === 'ALL' || car.brand.toLowerCase() === filters.brand.toLowerCase();
    const matchCategory = filters.category === 'ALL' || car.category.toLowerCase() === filters.category.toLowerCase();
    const matchPrice = car.price <= filters.maxPrice || filters.maxPrice >= 1500;
    return matchBrand && matchCategory && matchPrice;
  });

  return (
    <main>
      {/* Hero Section */}
      <Hero
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        currencySymbol={currencySymbol}
      />

      {/* Luxury Fleet Showroom Section */}
      <section className="section-padding" id="fleet">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span className="badge badge-silver">
              <Sparkles size={13} />
              <span>Tbilisi Luxury Showroom</span>
            </span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Our <span>Exotic & Premium</span> Fleet
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Hand-picked supercars, executive sedans, and high-performance SUVs available for immediate booking in Georgia.
            </p>
          </div>

          {/* Filter Pills */}
          <FilterBar
            activeBrand={filters.brand}
            onSelectBrand={handleBrandSelect}
          />

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="cars-grid">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onOpenDetails={onOpenDetails}
                  onOpenBooking={onOpenBooking}
                  currencySymbol={currencySymbol}
                  convertedPrice={getConvertedPrice(car.price)}
                />
              ))}
            </div>
          ) : (
            <div className="cars-empty-state">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                No Vehicles Found
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                No luxury cars match your filter criteria. Try adjusting the max price slider or selecting "All Fleet".
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn btn-primary"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us / VIP Advantages */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="badge badge-silver">Why Choose JOCAR</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              The <span>VIP Georgia</span> Experience
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We set the standard for exotic car rental in Tbilisi with uncompromising reliability, total privacy, and personalized concierge support.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Plane size={26} />
              </div>
              <h3 className="benefit-title">24/7 Airport Delivery</h3>
              <p className="benefit-desc">
                Your Lamborghini or G-Class awaits you the second you step out of Tbilisi International Airport. Our chauffeur will hand you the keys with zero terminal delays.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <ShieldCheck size={26} />
              </div>
              <h3 className="benefit-title">100% Comprehensive Insurance</h3>
              <p className="benefit-desc">
                Drive with absolute peace of mind. Every vehicle in our fleet is covered by full VIP CASCO insurance with transparent liability terms.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Clock size={26} />
              </div>
              <h3 className="benefit-title">24/7 Personal Concierge</h3>
              <p className="benefit-desc">
                Whether you need table reservations in Old Tbilisi, high-altitude mountain routes, or an instant vehicle swap, our VIP support team is one call away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="badge badge-silver">
              <Award size={13} />
              <span>Client Reviews</span>
            </span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Trusted by <span>VIP Travelers</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                </div>
                <p className="testimonial-text">
                  "Rented the matte black Lamborghini Urus SE for a 4-day weekend in Tbilisi. The car was spotless, airport delivery took less than 5 minutes, and the service was genuinely world-class."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AL</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Alexandre L.</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Geneva, Switzerland</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                </div>
                <p className="testimonial-text">
                  "The AMG G63 was the absolute highlight of our trip to Georgia. Unmatched presence on the roads of Tbilisi, and zero hidden deposits. Highly recommend JOCAR!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Michael K.</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dubai, UAE</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                  <Star size={18} fill="#FACC15" />
                </div>
                <p className="testimonial-text">
                  "Seamless communication on WhatsApp from the moment we landed. The BMW M5 Competition was in flawless condition. We will definitely use JOCAR again on our next visit."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">DN</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF' }}>David N.</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>London, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="badge badge-silver">Got Questions?</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Frequently Asked <span>Questions</span>
            </h2>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--accent-silver)" /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer animate-fade">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
