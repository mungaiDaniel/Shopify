// GiftCards page
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import ProductsSubNav from '../../components/ProductsSubNav';

const illustration = 'https://cdn-icons-png.flaticon.com/512/3208/3208726.png'; // Gift card

export default function GiftCards() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <FaRegFileAlt className="me-2" /> Gift cards
        </div>
        <ProductsSubNav />
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img src={illustration} alt="Gift card" style={{ width: 120, marginBottom: 24, opacity: 0.9 }} />
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Start selling gift cards</div>
            <div className="text-muted mb-3 text-center" style={{ maxWidth: 400 }}>
              Add gift card products to sell or create gift cards and send them directly to your customers.
            </div>
            <div className="mb-3">
              <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 130, border: '1px solid #d1d5db' }}>Create gift card</Button>
              <Button variant="dark" className="ms-2" style={{ borderRadius: 8, fontWeight: 600, minWidth: 170 }}>Add gift card product</Button>
            </div>
            <div className="text-muted mt-2" style={{ fontSize: 14 }}>
              By using gift cards, you agree to our <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>Terms of Service</a>
            </div>
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>gift cards</a></span>
        </div>
      </div>
    </div>
  );
} 