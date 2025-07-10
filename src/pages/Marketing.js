// Marketing page
import React from 'react';
import { Card, Button, Row, Col, Table, Alert, Dropdown } from 'react-bootstrap';
import { FaBullhorn } from 'react-icons/fa';

const campaignImg = 'https://cdn-icons-png.flaticon.com/512/3208/3208729.png'; // Placeholder
const appsImg = 'https://cdn-icons-png.flaticon.com/512/3208/3208730.png'; // Placeholder

export default function Marketing() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaBullhorn className="me-2" />Marketing</span>
          <div className="d-flex align-items-center gap-2">
            <Dropdown>
              <Dropdown.Toggle variant="light" style={{ borderRadius: 8, fontWeight: 500, border: '1px solid #d1d5db' }}>
                Last 30 days
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="light" style={{ borderRadius: 8, fontWeight: 500, border: '1px solid #d1d5db' }}>
                Compare to: May 11–Jun 9, 2025
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="light" style={{ borderRadius: 8, fontWeight: 500, border: '1px solid #d1d5db' }}>
                last non-direct click
              </Dropdown.Toggle>
            </Dropdown>
          </div>
        </div>
        {/* Stats Cards Grid */}
        <Row className="g-3 mb-3">
          {['Online store sessions', 'Online store conversion rate', 'Average order value', 'Total sales', 'Sales attributed to marketing', 'Orders attributed to marketing'].map((label, i) => (
            <Col md={4} key={i}>
              <Card style={{ borderRadius: 12, minHeight: 110, boxShadow: '0 1px 4px rgba(44,62,80,0.04)' }}>
                <Card.Body>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{label}</div>
                  <div style={{ fontSize: 22, margin: '8px 0' }}>{i === 0 ? '3' : '—'}</div>
                  <div style={{ borderBottom: '2px solid #b3c6e0', marginTop: 8 }} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Top Marketing Channels Table */}
        <Card className="mb-3" style={{ borderRadius: 16, boxShadow: '0 1px 4px rgba(44,62,80,0.04)' }}>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div style={{ fontWeight: 600 }}>Top marketing channels</div>
              <a href="#" style={{ color: '#1463ff', fontWeight: 500 }}>View report</a>
            </div>
            <Alert variant="info" className="py-2 mb-3" style={{ fontSize: 15, background: '#eaf6f3', border: 'none' }}>
              Cost, click, and impression metrics are now available for supported marketing apps. <a href="#">Learn more</a>
            </Alert>
            <Table hover borderless className="mb-0" style={{ background: '#fff' }}>
              <thead>
                <tr style={{ color: '#6b7280', fontWeight: 600 }}>
                  <th>Channel</th>
                  <th>Type</th>
                  <th>Sessions</th>
                  <th>Sales</th>
                  <th>Orders</th>
                  <th>Conversion rate</th>
                  <th>ROAS</th>
                  <th>CPA</th>
                  <th>CTR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Direct</td>
                  <td>direct</td>
                  <td>3</td>
                  <td>KES 0.00</td>
                  <td>0</td>
                  <td>0%</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        {/* Campaign Tracking Card */}
        <Card className="mb-3" style={{ borderRadius: 16, boxShadow: '0 1px 4px rgba(44,62,80,0.04)' }}>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <div>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Centralize your campaign tracking</div>
              <div className="text-muted mb-3" style={{ fontSize: 15 }}>Create campaigns to evaluate how marketing initiatives drive business goals. Capture online and offline touchpoints, add campaign activities from multiple marketing channels, and monitor results.</div>
              <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, border: '1px solid #d1d5db' }}>Create campaign</Button>
            </div>
            <img src={campaignImg} alt="Campaign" style={{ width: 90, borderRadius: 12, background: '#f3f4f6' }} />
          </Card.Body>
        </Card>
        {/* Marketing Apps Card */}
        <Card className="mb-3" style={{ borderRadius: 16, boxShadow: '0 1px 4px rgba(44,62,80,0.04)' }}>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <div>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Generate traffic with marketing apps</div>
              <div className="text-muted mb-3" style={{ fontSize: 15 }}>Grow your audience on social platforms, capture new leads with newsletter sign-ups, increase conversion with chat, and more.</div>
              <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, border: '1px solid #d1d5db' }}>Explore marketing apps</Button>
            </div>
            <img src={appsImg} alt="Apps" style={{ width: 90, borderRadius: 12, background: '#f3f4f6' }} />
          </Card.Body>
        </Card>
        {/* Footer Links */}
        <div className="text-center mb-4" style={{ fontSize: 15 }}>
          Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>marketing campaigns</a> and how <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>Shopify syncs report data</a>.
        </div>
      </div>
    </div>
  );
} 