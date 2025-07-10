import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import { FaListAlt } from 'react-icons/fa';

export default function Menus() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaListAlt className="me-2" />Menus</span>
          <div>
            <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 120, border: '1px solid #d1d5db' }} className="me-2">URL redirects</Button>
            <Button variant="dark" style={{ borderRadius: 8, fontWeight: 600, minWidth: 120 }}>Create menu</Button>
          </div>
        </div>
        {/* Table Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 1100 }}>
          <Card.Body className="p-0">
            <Table hover borderless className="mb-0" style={{ fontSize: 16 }}>
              <thead style={{ background: '#f9fafb', color: '#637381' }}>
                <tr>
                  <th style={{ fontWeight: 600 }}>Menu</th>
                  <th style={{ fontWeight: 600 }}>Menu items</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Main menu</td><td>Home, Catalog, Contact</td></tr>
                <tr><td>Footer menu</td><td>Search</td></tr>
                <tr><td>Customer account main menu</td><td>Shop, Orders</td></tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
} 