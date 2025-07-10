import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { FaFileAlt, FaChevronDown } from 'react-icons/fa';

const illustration = 'https://cdn-icons-png.flaticon.com/512/1828/1828925.png'; // generic files illustration

export default function Files() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaFileAlt className="me-2" />Files</span>
          <Dropdown>
            <Dropdown.Toggle variant="dark" style={{ borderRadius: 8, fontWeight: 600, minWidth: 120 }}>
              Upload files <FaChevronDown className="ms-1" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Upload images</Dropdown.Item>
              <Dropdown.Item>Upload videos</Dropdown.Item>
              <Dropdown.Item>Upload documents</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img src={illustration} alt="Files" style={{ width: 120, marginBottom: 24, opacity: 0.9 }} />
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Upload and manage your files</div>
            <div className="text-muted mb-3 text-center" style={{ maxWidth: 500 }}>
              Files can be images, videos, documents, and more.
            </div>
            <Button variant="light" style={{ borderRadius: 8, minWidth: 120, fontWeight: 600, border: '1px solid #d1d5db' }}>Upload files</Button>
          </Card.Body>
        </Card>
        {/* Footer Link */}
        <div className="text-center mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>files</a></span>
        </div>
      </div>
    </div>
  );
} 