import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductsSubNav() {
  const location = useLocation();
  const navigate = useNavigate();
  let page = 'products';
  if (location.pathname === '/products/collections') page = 'collections';
  if (location.pathname === '/products/inventory') page = 'inventory';
  if (location.pathname === '/products/purchase-orders') page = 'purchase-orders';
  if (location.pathname === '/products/transfers') page = 'transfers';
  if (location.pathname === '/products/gift-cards') page = 'gift-cards';

  return (
    <div className="d-flex mb-4" style={{ gap: 16, marginLeft: 8 }}>
      <Button
        variant={page === 'products' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/products')}
        active={page === 'products'}
      >
        Products
      </Button>
      <Button
        variant={page === 'collections' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/products/collections')}
        active={page === 'collections'}
      >
        Collections
      </Button>
      <Button
        variant={page === 'inventory' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/products/inventory')}
        active={page === 'inventory'}
      >
        Inventory
      </Button>
      <Button
        variant={page === 'purchase-orders' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/products/purchase-orders')}
        active={page === 'purchase-orders'}
      >
        Purchase Orders
      </Button>
      <Button
        variant={page === 'transfers' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/products/transfers')}
        active={page === 'transfers'}
      >
        Transfers
      </Button>
      <Button
        variant={page === 'gift-cards' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/products/gift-cards')}
        active={page === 'gift-cards'}
      >
        Gift Cards
      </Button>
    </div>
  );
} 