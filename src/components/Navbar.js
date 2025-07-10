import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button, Badge, InputGroup } from 'react-bootstrap';
import { FaSearch, FaEye, FaBell, FaUserCircle, FaShopify, FaBars } from 'react-icons/fa';

export default function AppNavbar({ onToggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false);
  const shoeImg = '/shoe.png';
  const wireframeImg = '/wireframe.png';
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ minHeight: 56, background: '#181c2a', borderBottom: '1px solid #23272f', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1050, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <div className="d-flex align-items-center w-100">
        {/* Hamburger for mobile */}
        <Button variant="link" className="d-lg-none me-2 p-0" style={{ color: '#fff', fontSize: 24 }} onClick={onToggleSidebar}>
          <FaBars />
        </Button>
        {/* Logo and badge */}
        <div className="d-flex align-items-center me-4" style={{ minWidth: 120 }}>
          <FaShopify size={28} style={{ color: '#8a5cff', marginRight: 8 }} />
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: -1, color: '#fff', marginRight: 10 }}>shopify</span>
          <Badge bg="secondary" style={{ fontWeight: 600, fontSize: 13, background: '#23272f', color: '#fff', borderRadius: 8, padding: '4px 10px', marginLeft: 2 }}>Summer '25</Badge>
        </div>
        {/* Search bar (show on md+) */}
        <InputGroup className="flex-grow-1 d-none d-md-flex" style={{ maxWidth: 520, marginRight: 24 }}>
          <InputGroup.Text style={{ background: '#23272f', border: 'none', color: '#bfc4d1' }}><FaSearch /></InputGroup.Text>
          <FormControl
            placeholder="Search"
            style={{ background: '#23272f', border: 'none', color: '#fff', fontSize: 16 }}
          />
          <InputGroup.Text style={{ background: '#23272f', border: 'none', color: '#bfc4d1', fontSize: 13, fontWeight: 600 }}>CTRL K</InputGroup.Text>
        </InputGroup>
        {/* Search icon for mobile */}
        <Button variant="link" className="d-md-none ms-auto me-2 p-0" style={{ color: '#fff', fontSize: 22 }} onClick={() => setShowSearch(s => !s)}>
          <FaSearch />
        </Button>
        {/* View as button (md+) */}
        <Button variant="outline-light" className="me-3 d-none d-md-flex" style={{ borderRadius: 8, fontWeight: 600, background: '#23272f', color: '#fff', border: '1px solid #353a45', minWidth: 90 }}>
          <FaEye className="me-2" />View as
        </Button>
        {/* Icons and store badge */}
        <div className="d-flex align-items-center gap-3">
          <FaUserCircle size={22} style={{ color: '#bfc4d1' }} />
          <FaBell size={20} style={{ color: '#bfc4d1' }} />
          <span style={{ background: '#00d084', color: '#181c2a', fontWeight: 700, borderRadius: 8, padding: '6px 14px', fontSize: 16, marginLeft: 8 }}>MS</span>
          <span className="d-none d-md-inline" style={{ color: '#fff', fontWeight: 600, fontSize: 16, marginLeft: 8 }}>My Store</span>
        </div>
      </div>
      {/* Mobile search overlay */}
      {showSearch && (
        <div className="position-absolute w-100" style={{ left: 0, top: 56, background: '#23272f', zIndex: 1100, padding: 8 }}>
          <InputGroup>
            <InputGroup.Text style={{ background: '#23272f', border: 'none', color: '#bfc4d1' }}><FaSearch /></InputGroup.Text>
            <FormControl
              placeholder="Search"
              style={{ background: '#23272f', border: 'none', color: '#fff', fontSize: 16 }}
            />
          </InputGroup>
        </div>
      )}
    </Navbar>
  );
} 