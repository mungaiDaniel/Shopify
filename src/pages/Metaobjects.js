import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa';

const illustration = 'https://cdn-icons-png.flaticon.com/512/3208/3208731.png'; // Metaobjects illustration

export default function Metaobjects() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaFileAlt className="me-2" />Metaobjects</span>
          <div>
            <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 100, border: '1px solid #d1d5db' }} className="me-2">Manage</Button>
            <Button variant="dark" style={{ borderRadius: 8, fontWeight: 600, minWidth: 140 }}>Add definition</Button>
          </div>
        </div>
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img src={illustration} alt="Metaobjects" style={{ width: 120, marginBottom: 24, opacity: 0.9 }} />
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Streamline content creation with metaobjects</div>
            <div className="text-muted mb-3 text-center" style={{ maxWidth: 500 }}>
              Metaobjects allow you to group fields and connect them to different parts of your store. Use them to create custom content or data structures.
            </div>
            <Button variant="dark" style={{ borderRadius: 8, minWidth: 160 }}>Add definition</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
} 