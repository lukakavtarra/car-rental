import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarDetailModal from './components/CarDetailModal';
import BookingModal from './components/BookingModal';
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [currency, setCurrency] = useState('USD');
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingCar, setBookingCar] = useState(null);

  const getCurrencySymbol = (curr) => {
    if (curr === 'EUR') return '€';
    if (curr === 'GEL') return '₾';
    return '$';
  };

  const getConvertedPrice = (usdPrice, curr) => {
    if (curr === 'EUR') return Math.round(usdPrice * 0.92);
    if (curr === 'GEL') return Math.round(usdPrice * 2.75);
    return usdPrice;
  };

  const currencySymbol = getCurrencySymbol(currency);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Navbar currency={currency} onCurrencyChange={setCurrency} />

        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                onOpenDetails={setSelectedCar}
                onOpenBooking={setBookingCar}
                currency={currency}
                currencySymbol={currencySymbol}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>

        <Footer />

        {/* Detailed Car Inspection Modal (sits/price/brand/model/color/description) */}
        {selectedCar && (
          <CarDetailModal
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
            onOpenBooking={(car) => {
              setSelectedCar(null);
              setBookingCar(car);
            }}
            currencySymbol={currencySymbol}
            convertedPrice={getConvertedPrice(selectedCar.price, currency)}
          />
        )}

        {/* Booking & Reservation Modal */}
        {bookingCar && (
          <BookingModal
            car={bookingCar}
            onClose={() => setBookingCar(null)}
            currencySymbol={currencySymbol}
            convertedPrice={getConvertedPrice(bookingCar.price, currency)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
