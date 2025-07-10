// Products page
import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import { FaPlus, FaDownload } from 'react-icons/fa';
import ProductsSubNav from '../components/ProductsSubNav';
import { useNavigate } from 'react-router-dom';

const productImgs = [
  'https://cdn-icons-png.flaticon.com/512/892/892458.png', // shoe
  'https://cdn-icons-png.flaticon.com/512/3208/3208720.png', // vase
  'https://cdn-icons-png.flaticon.com/512/3208/3208722.png', // tube
  'https://cdn-icons-png.flaticon.com/512/3208/3208721.png', // glasses
];

export default function Products() {
  const navigate = useNavigate();
  const [showImport, setShowImport] = useState(false);
  const [importType, setImportType] = useState('csv');

  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span>Products</span>
        </div>
        <ProductsSubNav />
        {/* Main Card */}
        <Card className="mb-4" style={{ borderRadius: 16, boxShadow: '0 2px 8px rgba(44,62,80,0.06)' }}>
          <Card.Body>
            <Row>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 8 }}>Add your products</div>
                <div className="text-muted mb-3" style={{ fontSize: 16 }}>Start by stocking your store with products your customers will love</div>
                <div className="mb-3">
                  <Button variant="dark" className="me-2" style={{ borderRadius: 8, fontWeight: 600, minWidth: 130 }} onClick={() => navigate('/products/add')}>
                    <FaPlus className="me-2" />Add product
                  </Button>
                  <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 90, border: '1px solid #d1d5db' }} onClick={() => setShowImport(true)}>
                    <FaDownload className="me-2" />Import
                  </Button>
                </div>
              </Col>
              <Col md={4} className="d-flex flex-column align-items-end justify-content-center">
                <div className="d-flex flex-wrap gap-2">
                  {productImgs.map((img, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 12, margin: 6, boxShadow: '0 1px 4px rgba(44,62,80,0.04)' }}>
                      <img src={img} alt="product" style={{ width: 56, height: 56 }} />
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Sourcing Apps Card */}
        <Card style={{ borderRadius: 16, background: '#f3f4f6', boxShadow: 'none' }}>
          <Card.Body>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Find products to sell</div>
            <div className="text-muted mb-3" style={{ fontSize: 15 }}>Have dropshipping or print on demand products shipped directly from the supplier to your customer, and only pay for what you sell.</div>
            <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, border: '1px solid #d1d5db' }}>Browse product sourcing apps</Button>
          </Card.Body>
        </Card>
        {/* Import Modal */}
        <Modal show={showImport} onHide={() => setShowImport(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Import products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label style={{ fontWeight: 500 }}>How do you want to import your products?</Form.Label>
                <div className="mb-2">
                  <Form.Check
                    type="radio"
                    id="import-csv"
                    name="importType"
                    label={<span>Upload a Shopify-formatted CSV file<br /><span style={{ fontWeight: 400, color: '#666', fontSize: 15 }}>Import a CSV file that's already formatted to fit Shopify's template. <a href="#">Download sample CSV</a></span></span>}
                    checked={importType === 'csv'}
                    onChange={() => setImportType('csv')}
                  />
                </div>
                <div className="mb-2">
                  <Form.Check
                    type="radio"
                    id="import-other"
                    name="importType"
                    label={<span>Import data from another platform<br /><span style={{ fontWeight: 400, color: '#666', fontSize: 15 }}>Import a copy of your data from another platform using one of our recommended apps.</span></span>}
                    checked={importType === 'other'}
                    onChange={() => setImportType('other')}
                  />
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={() => setShowImport(false)} style={{ borderRadius: 8, fontWeight: 600, border: '1px solid #d1d5db' }}>Cancel</Button>
            <Button variant="dark" style={{ borderRadius: 8, fontWeight: 600, minWidth: 80 }}>Next</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
} 