import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MarketsSubNav() {
  const location = useLocation();
  const navigate = useNavigate();
  let page = 'markets';
  if (location.pathname === '/markets/catalogs') page = 'catalogs';

  return (
    <div className="d-flex mb-4" style={{ gap: 16, marginLeft: 8 }}>
      <Button
        variant={location.pathname === '/markets' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/markets')}
        active={location.pathname === '/markets'}
      >
        Markets
      </Button>
      <Button
        variant={page === 'catalogs' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/markets/catalogs')}
        active={page === 'catalogs'}
      >
        Catalogs
      </Button>
    </div>
  );
} 