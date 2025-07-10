// Orders page
import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';
import OrdersSubNav from '../components/OrdersSubNav';

const illustration = 'https://www.svgrepo.com/show/503962/wireframe.svg'; // Placeholder

function EmptyState({ title, description }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
      <img src={illustration} alt="Orders" style={{ width: 120, marginBottom: 24, opacity: 0.8 }} />
      <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>{title}</div>
      <div className="text-muted mb-3 text-center" style={{ maxWidth: 400 }}>{description}</div>
      <Button variant="dark" style={{ borderRadius: 8, minWidth: 120 }}>Select plan</Button>
    </div>
  );
}

export default function Orders() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine which subpage is active
  let page = 'orders';
  if (location.pathname === '/orders/drafts') page = 'drafts';
  if (location.pathname === '/orders/abandoned') page = 'abandoned';

  // Content for each subpage
  const content = {
    orders: {
      title: 'Your orders will show here',
      description: 'To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends.'
    },
    drafts: {
      title: 'No drafts yet',
      description: 'Draft orders you create will show up here.'
    },
    abandoned: {
      title: 'No abandoned checkouts',
      description: 'When a customer leaves checkout before completing their purchase, you’ll see it here.'
    }
  };

  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5' }}>
          <div className="d-flex align-items-center" style={{ fontWeight: 600, fontSize: 22 }}>
            <FaRegFileAlt className="me-2" /> Orders
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="light" style={{ borderRadius: 8, fontWeight: 500, border: '1px solid #e1e3e5' }}>
              More actions
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Export orders</Dropdown.Item>
              <Dropdown.Item>Import orders</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <OrdersSubNav />
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <EmptyState title={content[page].title} description={content[page].description} />
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>orders</a></span>
        </div>
      </div>
    </div>
  );
} 