// PurchaseOrders page
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import ProductsSubNav from '../../components/ProductsSubNav';

const illustration = 'https://cdn-icons-png.flaticon.com/512/3208/3208724.png'; // Purchase order

export default function PurchaseOrders() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <FaRegFileAlt className="me-2" /> Purchase orders
        </div>
        <ProductsSubNav />
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img src={illustration} alt="Purchase order" style={{ width: 120, marginBottom: 24, opacity: 0.9 }} />
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Manage your purchase orders</div>
            <div className="text-muted mb-3 text-center" style={{ maxWidth: 400 }}>
              Track and receive inventory ordered from suppliers.
            </div>
            <Button variant="dark" style={{ borderRadius: 8, minWidth: 180 }}>Create purchase order</Button>
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>purchase orders</a></span>
        </div>
      </div>
    </div>
  );
} 