import React from 'react';
import { Card } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import OrdersSubNav from '../components/OrdersSubNav';

const illustration = 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png'; // Placeholder for abandoned checkout

export default function Abandoned() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <div className="d-flex align-items-center"><FaShoppingCart className="me-2" /> Abandoned checkouts</div>
        </div>
        <OrdersSubNav />
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 220, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-row align-items-center justify-content-between" style={{ minHeight: 220 }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Abandoned checkouts will show here</div>
              <div className="text-muted mb-3" style={{ maxWidth: 400 }}>
                See when customers put an item in their cart but don’t check out. You can also email customers a link to their cart.
              </div>
            </div>
            <img src={illustration} alt="Abandoned checkout" style={{ width: 90, marginLeft: 24, opacity: 0.9 }} />
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>abandoned checkouts</a></span>
        </div>
      </div>
    </div>
  );
} 