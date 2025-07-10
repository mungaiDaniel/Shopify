// Analytics page
import React from 'react';
import { Card, Button, Dropdown, Table, Row, Col, Form } from 'react-bootstrap';
import { FaChartBar, FaSlidersH, FaSyncAlt, FaEdit, FaChevronDown } from 'react-icons/fa';

const currency = 'USD';
const currencySymbol = '$';

const breakdownRows = [
  { label: 'Gross sales', value: 0 },
  { label: 'Discounts', value: 0 },
  { label: 'Returns', value: 0 },
  { label: 'Net sales', value: 0 },
  { label: 'Shipping charges', value: 0 },
  { label: 'Return fees', value: 0 },
  { label: 'Taxes', value: 0 },
  { label: 'Total sales', value: 0 },
];

function PlaceholderChart({ height = 120 }) {
  return (
    <div style={{ height, background: 'linear-gradient(90deg, #f6f6f7 60%, #e1e3e5 100%)', borderRadius: 8, position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: height / 2 - 1, height: 2, background: '#e1e3e5' }} />
    </div>
  );
}

export default function Analytics() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1800 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaChartBar className="me-2" />Analytics</span>
          <div>
            <Button variant="light" className="me-2" style={{ borderRadius: 8, fontWeight: 600, minWidth: 120, border: '1px solid #d1d5db' }}> <FaEdit className="me-2" />Customize</Button>
          </div>
        </div>
        {/* Filters */}
        <div className="d-flex align-items-center mb-3" style={{ gap: 12 }}>
          <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 90, border: '1px solid #d1d5db' }}>Today</Button>
          <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 180, border: '1px solid #d1d5db' }}>Compare to: Jul 9, 2025</Button>
        </div>
        {/* Top Stat Cards */}
        <Row className="mb-3" xs={1} sm={2} md={4} style={{ gap: 16 }}>
          <Col><Card style={{ borderRadius: 12, minHeight: 70 }}><Card.Body><div style={{ fontSize: 15, color: '#637381' }}>Gross sales</div><div style={{ fontWeight: 600, fontSize: 18 }}>{currencySymbol}0</div></Card.Body></Card></Col>
          <Col><Card style={{ borderRadius: 12, minHeight: 70 }}><Card.Body><div style={{ fontSize: 15, color: '#637381' }}>Returning customer rate</div><div style={{ fontWeight: 600, fontSize: 18 }}>0%</div></Card.Body></Card></Col>
          <Col><Card style={{ borderRadius: 12, minHeight: 70 }}><Card.Body><div style={{ fontSize: 15, color: '#637381' }}>Orders fulfilled</div><div style={{ fontWeight: 600, fontSize: 18 }}>0</div></Card.Body></Card></Col>
          <Col><Card style={{ borderRadius: 12, minHeight: 70 }}><Card.Body><div style={{ fontSize: 15, color: '#637381' }}>Orders</div><div style={{ fontWeight: 600, fontSize: 18 }}>0</div></Card.Body></Card></Col>
        </Row>
        {/* Main Analytics Grid */}
        <Row className="g-3" style={{ marginBottom: 0 }}>
          <Col md={8}>
            <Card style={{ borderRadius: 12, minHeight: 260, marginBottom: 16 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Total sales over time</div>
                <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 8 }}>{currencySymbol}0</div>
                <PlaceholderChart height={140} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ borderRadius: 12, minHeight: 260, marginBottom: 16 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Total sales breakdown</div>
                <Table borderless size="sm" className="mb-0">
                  <tbody>
                    {breakdownRows.map(row => (
                      <tr key={row.label}>
                        <td style={{ color: '#637381', fontWeight: 500 }}>{row.label}</td>
                        <td style={{ textAlign: 'right', fontWeight: 600 }}>{currencySymbol}{row.value.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md={6}>
            <Card style={{ borderRadius: 12, minHeight: 180 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Total sales by sales channel</div>
                <div className="text-muted">No data for this date range</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ borderRadius: 12, minHeight: 180 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Total sales by product</div>
                <div className="text-muted">No data for this date range</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-3 mt-1">
          <Col md={4}>
            <Card style={{ borderRadius: 12, minHeight: 180 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Average order value over time</div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{currencySymbol}0</div>
                <PlaceholderChart height={60} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ borderRadius: 12, minHeight: 180 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Sessions over time</div>
                <PlaceholderChart height={60} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ borderRadius: 12, minHeight: 180 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Conversion rate over time</div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>0%</div>
                <PlaceholderChart height={60} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-3 mt-1 mb-4">
          <Col md={8}>
            <Card style={{ borderRadius: 12, minHeight: 180 }}>
              <Card.Body>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Conversion rate breakdown</div>
                <Table borderless size="sm" className="mb-0">
                  <tbody>
                    <tr>
                      <td>Sessions</td>
                      <td style={{ textAlign: 'right' }}>0% 0</td>
                    </tr>
                    <tr>
                      <td>Added to cart</td>
                      <td style={{ textAlign: 'right' }}>0% 0</td>
                    </tr>
                    <tr>
                      <td>Reached checkout</td>
                      <td style={{ textAlign: 'right' }}>0% 0</td>
                    </tr>
                    <tr>
                      <td>Completed checkout</td>
                      <td style={{ textAlign: 'right' }}>0% 0</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
} 