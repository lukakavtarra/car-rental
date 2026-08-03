import { Lock, Mail, Phone } from 'lucide-react';
import '../styles/Pages.css';

function PrivacyPolicyPage() {
  return (
    <main className="section-padding">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge badge-silver">
            <Lock size={13} />
            <span>Legal & Data Security</span>
          </span>
          <h1 className="section-title" style={{ marginTop: '14px', fontSize: '2.8rem' }}>
            Privacy Policy & <span>Rental Terms</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            AURUM Georgia is committed to protecting your personal data, ensuring complete VIP confidentiality, and maintaining transparent rental conditions.
          </p>
        </div>

        {/* Policy Content Card */}
        <div className="policy-container animate-fade">
          {/* Section 1: Data Protection */}
          <section className="policy-section">
            <h2>1. Collection and Use of Personal Information</h2>
            <p>
              When you reserve a luxury or exotic vehicle with AURUM Georgia, we collect necessary identification documents to verify your eligibility for VIP vehicle leasing under Georgian law:
            </p>
            <ul>
              <li><strong>Identification Documents:</strong> Full legal name, valid Passport copy, and International or National Driver's License.</li>
              <li><strong>Contact Information:</strong> Phone number, WhatsApp or Telegram handle, and email address for reservation confirmations.</li>
              <li><strong>Itinerary Data:</strong> Flight arrival numbers at Tbilisi International Airport (TBS) and hotel delivery addresses.</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              We guarantee that your personal information is stored with bank-grade encryption and is never sold, traded, or disclosed to any third-party marketing entities.
            </p>
          </section>

          {/* Section 2: Rental & Insurance Terms */}
          <section className="policy-section">
            <h2>2. Comprehensive VIP Insurance & Vehicle Usage</h2>
            <p>
              Every vehicle in our fleet (including Lamborghini Urus SE, Mercedes-AMG G63, BMW M5, and Audi RS6) is covered by comprehensive CASCO VIP insurance.
            </p>
            <ul>
              <li><strong>Insurance Coverage:</strong> Protects against third-party liability, collision damage, and natural events, subject to standard Georgian police accident reporting.</li>
              <li><strong>Territorial Limits:</strong> Our vehicles are authorized for travel within the official borders of Georgia. Cross-border travel requires prior written authorization from AURUM Georgia management.</li>
              <li><strong>Driver Requirements:</strong> Drivers must hold a valid driver's license for a minimum of 2 years and meet age qualifications (21+ for executive sedans, 23+ for supercars and V12 models).</li>
            </ul>
          </section>

          {/* Section 3: Deposit & Payments */}
          <section className="policy-section">
            <h2>3. Security Deposits & Currency Exchange</h2>
            <p>
              AURUM Georgia operates with transparent pricing and zero hidden charges:
            </p>
            <ul>
              <li><strong>No-Deposit Options:</strong> Verified returning clients and corporate bookings enjoy zero-security-deposit privileges.</li>
              <li><strong>Accepted Currencies:</strong> Rental fees may be paid in USD ($), EUR (€), or Georgian Lari (₾) at the official National Bank of Georgia exchange rate on the date of delivery.</li>
              <li><strong>Cancellation Policy:</strong> Reservations may be rescheduled or cancelled free of charge up to 48 hours before the scheduled vehicle delivery time.</li>
            </ul>
          </section>

          {/* Section 4: Cookies & Analytics */}
          <section className="policy-section">
            <h2>4. Website Cookies & Digital Analytics</h2>
            <p>
              Our website uses essential functional cookies and secure analytical tools to improve user experience, remember your currency preference (USD / EUR / GEL), and optimize page load speeds. You can adjust cookie permissions in your browser settings at any time.
            </p>
          </section>

          {/* Section 5: Contact DPO */}
          <section className="policy-section">
            <h2>5. Contact Our Data Protection Office</h2>
            <p>
              If you have any questions concerning your data privacy, request the deletion of your personal records, or need clarification on our rental agreements, please contact our Legal & Privacy team:
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 600 }}>
                <Mail size={18} color="var(--accent-silver)" />
                <a href="mailto:aurum.carrent@gmail.com">aurum.carrent@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 600 }}>
                <Phone size={18} color="var(--accent-silver)" />
                <a href="tel:+995511266766">+995 511 26 67 66</a>
              </div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Last Updated: August 2026 • AURUM Georgia, Rike Park, Tbilisi, Georgia.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
