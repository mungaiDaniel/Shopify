import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import OrdersSubNav from '../components/OrdersSubNav';

const illustration = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // Placeholder for draft order

export default function Drafts() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <div className="d-flex align-items-center"><FaRegFileAlt className="me-2" /> Drafts</div>
        </div>
        <OrdersSubNav />
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img src={illustration} alt="Draft order" style={{ width: 120, marginBottom: 24, opacity: 0.8 }} />
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Manually create orders and invoices</div>
            <div className="text-muted mb-3 text-center" style={{ maxWidth: 400 }}>
              Use draft orders to take orders over the phone, email invoices to customers, and collect payments.
            </div>
            <Button variant="dark" style={{ borderRadius: 8, minWidth: 160 }}>Create draft order</Button>
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>creating draft orders</a></span>
        </div>
      </div>
    </div>
  );
} 