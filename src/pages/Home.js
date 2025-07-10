// Home page
import React from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FaEdit, FaPlus, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import shoeImg from './shoes.jpg';
import wireframeImg from './wireframe.jpg';

export default function Home() {
  const navigate = useNavigate();
  const handleImport = () => {
    navigate('/products', { state: { showImport: true } });
  };
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Plan banner */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: 'linear-gradient(90deg, #23272f 60%, #23272f 100%)', borderRadius: 16, padding: '18px 32px', color: '#fff', fontWeight: 600, fontSize: 20, maxWidth: 900, margin: '0 auto' }}>
          <span>Select a plan to get 3 months for $1/month</span>
          <Button variant="light" style={{ fontWeight: 600, borderRadius: 8 }}>Select a plan</Button>
        </div>
        {/* Main onboarding card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, maxWidth: 900, minHeight: 420, padding: 0 }}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start flex-wrap" style={{ gap: 24 }}>
              {/* Add your first product */}
              <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
                <img src={shoeImg} alt="Shoe" style={{ width: 60, marginBottom: 12 }} />
                <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>Add your first product</div>
                <div className="text-muted mb-2" style={{ fontSize: 15 }}>
                  Start by adding a product and a few key details. Not ready? <br />
                  <a href="#">Start with a sample product</a>
                </div>
                <div className="d-flex justify-content-center gap-2 mb-2">
                  <Button variant="dark" style={{ fontWeight: 600, borderRadius: 8, minWidth: 120, display: 'flex', alignItems: 'center', gap: 8 }} onClick={() => navigate('/products/add')}>
                    <FaPlus className="me-2" />Add product
                  </Button>
                  <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db', minWidth: 90, display: 'flex', alignItems: 'center', gap: 8 }} onClick={handleImport}>
                    <FaDownload className="me-2" />Import
                  </Button>
                </div>
              </div>
              {/* Design your store */}
              <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
                <img src={wireframeImg} alt="Wireframe" style={{ width: 60, marginBottom: 12 }} />
                <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>Design your store</div>
                <div className="text-muted mb-2" style={{ fontSize: 15 }}>
                  Describe your business to generate custom themes or <a href="#">browse pre-designed themes</a>
                </div>
                <InputGroup className="mb-2" style={{ maxWidth: 220, margin: '0 auto' }}>
                  <Form.Control placeholder="Modern handmade jewelry" style={{ borderRadius: 8 }} />
                </InputGroup>
                <Button variant="primary" style={{ fontWeight: 600, borderRadius: 8 }}>Generate</Button>
              </div>
            </div>
            {/* Lower onboarding actions */}
            <div className="d-flex justify-content-between align-items-center flex-wrap mt-4" style={{ gap: 16 }}>
              <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>💳</div>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>Add payment methods</div>
                <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db' }}>Activate</Button>
              </div>
              <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>📦</div>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>Review your shipping rates</div>
                <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db' }}>Review</Button>
              </div>
              <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>🌐</div>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>Customize your domain</div>
                <div style={{ fontSize: 15, color: '#637381', marginBottom: 6 }}>tjxg-tk.myshopify.com</div>
                <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db' }}>Customize</Button>
              </div>
              <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}><FaEdit /></div>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>Customize</div>
                <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db' }}>Edit</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
} 