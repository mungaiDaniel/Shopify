// Collections page
import React from 'react';
import { Button, Table, Nav } from 'react-bootstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import ProductsSubNav from '../../components/ProductsSubNav';

export default function Collections() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaRegFileAlt className="me-2" />Collections</span>
          <Button variant="dark" style={{ borderRadius: 8, fontWeight: 600, minWidth: 140 }}>Add collection</Button>
        </div>
        <ProductsSubNav />
        {/* Table Card */}
        <div className="mb-4" style={{ borderRadius: 16, background: '#fff', boxShadow: '0 2px 8px rgba(44,62,80,0.06)' }}>
          <div className="d-flex align-items-center p-3" style={{ borderBottom: '1px solid #e1e3e5' }}>
            <Nav variant="pills" defaultActiveKey="all">
              <Nav.Item>
                <Nav.Link eventKey="all" active style={{ borderRadius: 8, fontWeight: 600, background: '#ededed', color: '#222' }}>All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="plus" style={{ borderRadius: 8, fontWeight: 600, color: '#222' }}>+</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Table hover borderless className="mb-0" style={{ background: '#fff' }}>
            <thead>
              <tr style={{ color: '#6b7280', fontWeight: 600 }}>
                <th style={{ width: 40 }}></th>
                <th>Title</th>
                <th>Products</th>
                <th>Product conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Button variant="light" style={{ borderRadius: 8, padding: 4, border: '1px solid #e1e3e5' }}><FaRegFileAlt /></Button></td>
                <td>Home page</td>
                <td>0</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>collections</a></span>
        </div>
      </div>
    </div>
  );
} 