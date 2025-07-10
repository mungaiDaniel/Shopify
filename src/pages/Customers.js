// Customers page
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';

const illustration = 'https://cdn-icons-png.flaticon.com/512/3208/3208728.png'; // Customer profile illustration

export default function Customers() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <FaUsers className="me-2" /> Customers
        </div>
        {/* Main Card */}
        <Card className="mb-4" style={{ borderRadius: 16, boxShadow: '0 2px 8px rgba(44,62,80,0.06)' }}>
          <Card.Body>
            <Row className="align-items-center">
              <Col md={8}>
                <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 8 }}>Everything customers-related in one place</div>
                <div className="text-muted mb-3" style={{ fontSize: 16 }}>Manage customer details, see customer order history, and group customers into segments.</div>
                <div className="mb-3">
                  <Button variant="dark" className="me-2" style={{ borderRadius: 8, fontWeight: 600, minWidth: 130 }}>Add customer</Button>
                  <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 130, border: '1px solid #d1d5db' }}>Import customers</Button>
                </div>
              </Col>
              <Col md={4} className="d-flex justify-content-end">
                <img src={illustration} alt="Customer" style={{ width: 120, borderRadius: 16, background: '#f3f4f6' }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* App Recommendations Card */}
        <Card style={{ borderRadius: 16, background: '#f3f4f6', boxShadow: 'none' }}>
          <Card.Body>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Get customers with apps</div>
            <div className="text-muted mb-3" style={{ fontSize: 15 }}>Grow your customer list by adding a lead capture form to your store and marketing.</div>
            <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, border: '1px solid #d1d5db' }}>See app recommendations</Button>
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>customers</a></span>
        </div>
      </div>
    </div>
  );
} 