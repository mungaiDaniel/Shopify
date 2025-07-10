// Home page
import React from 'react';
import { Card, Button, Form, InputGroup, Row, Col, Badge } from 'react-bootstrap';
import { FaEdit, FaPlus, FaDownload, FaCreditCard, FaTruck, FaGlobe, FaPhone, FaTools, FaBookOpen, FaChevronRight } from 'react-icons/fa';
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
      <div className="mx-auto" style={{ maxWidth: 900 }}>
        {/* Plan banner */}
        <div className="d-flex align-items-center justify-content-between mb-3" style={{ background: '#23272f', borderRadius: 12, padding: '12px 24px', color: '#fff', fontWeight: 600, fontSize: 16 }}>
          <span>Select a plan to get 3 months for $1/month</span>
          <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, minWidth: 120 }}>Select a plan</Button>
        </div>
        {/* Onboarding cards */}
        <Card className="mb-3" style={{ borderRadius: 16, padding: 0 }}>
          <Card.Body style={{ padding: 24 }}>
            <div className="mb-2" style={{ fontWeight: 600, fontSize: 18 }}>
              Add store name <FaEdit style={{ fontSize: 16, marginLeft: 4, verticalAlign: 'middle' }} />
            </div>
            <Row className="mb-3" xs={1} md={2} style={{ gap: 0 }}>
              <Col>
                <Card style={{ border: 'none', background: 'transparent' }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center" style={{ padding: 16 }}>
                    <img src={shoeImg} alt="Shoe" style={{ width: 120, marginBottom: 8, borderRadius: 12, background: '#f6f6f7' }} />
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 4 }}>Add your first product</div>
                    <div className="text-muted mb-2" style={{ fontSize: 15, textAlign: 'center' }}>
                      Start by adding a product and a few key details. Not ready? <br />
                      <a href="#">Start with a sample product</a>
                    </div>
                    <div className="d-flex justify-content-center gap-2 mb-2">
                      <Button variant="dark" style={{ fontWeight: 600, borderRadius: 8, minWidth: 110, display: 'flex', alignItems: 'center', gap: 8 }} onClick={() => navigate('/products/add')}>
                        <FaPlus className="me-2" />Add product
                      </Button>
                      <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db', minWidth: 90, display: 'flex', alignItems: 'center', gap: 8 }} onClick={handleImport}>
                        <FaDownload className="me-2" />Import
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ border: 'none', background: 'transparent' }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center" style={{ padding: 16 }}>
                    <img src={wireframeImg} alt="Wireframe" style={{ width: 120, marginBottom: 8, borderRadius: 12, background: '#f6f6f7' }} />
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 4 }}>Design your store</div>
                    <div className="text-muted mb-2" style={{ fontSize: 15, textAlign: 'center' }}>
                      Describe your business to generate custom themes or <a href="#">browse pre-designed themes</a>
                    </div>
                    <InputGroup className="mb-2" style={{ maxWidth: 220 }}>
                      <Form.Control placeholder="Modern handmade jewelry" style={{ borderRadius: 8 }} />
                      <Button variant="primary" style={{ fontWeight: 600, borderRadius: 8 }}>Generate</Button>
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* Payment, shipping, domain, customize */}
            <Row className="g-3 mb-2" xs={1} md={4}>
              <Col>
                <Card style={{ borderRadius: 12, minHeight: 110 }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center p-3">
                    <div className="mb-2" style={{ fontSize: 22 }}><FaCreditCard /></div>
                    <div style={{ fontWeight: 500, marginBottom: 6 }}>Add payment methods</div>
                    <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db', fontSize: 15 }}>Activate</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ borderRadius: 12, minHeight: 110 }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center p-3">
                    <div className="mb-2" style={{ fontSize: 22 }}><FaTruck /></div>
                    <div style={{ fontWeight: 500, marginBottom: 6 }}>Review your shipping rates</div>
                    <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db', fontSize: 15 }}>Review</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ borderRadius: 12, minHeight: 110 }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center p-3">
                    <div className="mb-2" style={{ fontSize: 22 }}><FaGlobe /></div>
                    <div style={{ fontWeight: 500, marginBottom: 6 }}>Customize your domain</div>
                    <div style={{ fontSize: 15, color: '#637381', marginBottom: 6 }}>tjxg-tk.myshopify.com</div>
                    <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db', fontSize: 15 }}>Customize</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ borderRadius: 12, minHeight: 110 }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center p-3">
                    <div className="mb-2" style={{ fontSize: 22 }}><FaEdit /></div>
                    <div style={{ fontWeight: 500, marginBottom: 6 }}>Customize</div>
                    <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, border: '1px solid #d1d5db', fontSize: 15 }}>Edit</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Guidance call */}
        <Card className="mb-3" style={{ borderRadius: 12 }}>
          <Card.Body className="d-flex flex-wrap align-items-center justify-content-between gap-2 p-3">
            <div style={{ fontWeight: 500 }}>Get guidance with a screen share call <Badge bg="light" text="dark" style={{ fontWeight: 500, fontSize: 12, marginLeft: 6 }}>Early access</Badge></div>
            <div className="text-muted" style={{ fontSize: 15, flex: 1, minWidth: 220 }}>
              Brainstorm product ideas, design your store, and get help with Sidekick.
            </div>
            <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, minWidth: 110, border: '1px solid #d1d5db' }}><FaPhone className="me-2" />Start call</Button>
          </Card.Body>
        </Card>
        {/* Free tools */}
        <Card className="mb-3" style={{ borderRadius: 12 }}>
          <Card.Body className="d-flex flex-wrap align-items-center justify-content-between gap-2 p-3">
            <div style={{ fontWeight: 500 }}>Free tools to help you grow</div>
            <div className="text-muted" style={{ fontSize: 15, flex: 1, minWidth: 220 }}>
              Resize images, calculate your profit margin, create shipping labels or generate an invoice instantly with our business tools. For free.
            </div>
            <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, minWidth: 140, border: '1px solid #d1d5db' }}><FaTools className="me-2" />Explore free tools</Button>
          </Card.Body>
        </Card>
        {/* Course */}
        <Card className="mb-3" style={{ borderRadius: 12 }}>
          <Card.Body className="d-flex flex-wrap align-items-center justify-content-between gap-2 p-3">
            <div style={{ fontWeight: 500 }}>Take your store from first day to first sale</div>
            <div className="text-muted" style={{ fontSize: 15, flex: 1, minWidth: 220 }}>
              Learn how to build an online business with Shopify's industry-leading ecommerce platform. Get all the knowledge you need to share your product with the world and start making money online.
            </div>
            <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, minWidth: 120, border: '1px solid #d1d5db' }}><FaBookOpen className="me-2" />View course</Button>
          </Card.Body>
        </Card>
        {/* Editions banner */}
        <Card className="mb-3" style={{ borderRadius: 16, background: 'linear-gradient(90deg, #2d0b4e 60%, #1a1a2e 100%)', color: '#fff', overflow: 'hidden' }}>
          <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 gap-3">
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>Shopify Editions | Summer '25</div>
              <div style={{ fontWeight: 400, fontSize: 15, marginBottom: 8 }}>New features, good vibes</div>
              <Button variant="light" style={{ fontWeight: 600, borderRadius: 8, minWidth: 160 }}>
                Dive into 150+ updates <FaChevronRight className="ms-2" />
              </Button>
            </div>
            <img src="https://cdn.shopify.com/shopifycloud/shopify_editions/editions_summer2024/horizons-banner-2x.png" alt="Horizons" style={{ maxWidth: 260, borderRadius: 12 }} />
          </Card.Body>
        </Card>
        {/* All caught up */}
        <div className="text-center text-muted mt-2 mb-4" style={{ fontSize: 15 }}>
          <span>All caught up</span>
        </div>
      </div>
    </div>
  );
} 