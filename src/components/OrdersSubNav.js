import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrdersSubNav() {
  const location = useLocation();
  const navigate = useNavigate();
  let page = 'orders';
  if (location.pathname === '/orders/drafts') page = 'drafts';
  if (location.pathname === '/orders/abandoned') page = 'abandoned';

  return (
    <div className="d-flex mb-4" style={{ gap: 16, marginLeft: 8 }}>
      <Button
        variant={page === 'orders' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/orders')}
        active={page === 'orders'}
      >
        Orders
      </Button>
      <Button
        variant={page === 'drafts' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/orders/drafts')}
        active={page === 'drafts'}
      >
        Drafts
      </Button>
      <Button
        variant={page === 'abandoned' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/orders/abandoned')}
        active={page === 'abandoned'}
      >
        Abandoned checkouts
      </Button>
    </div>
  );
} 