import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

const illustration = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; // blog post illustration

export default function BlogPosts() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaRegEdit className="me-2" />Blog posts</span>
          <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 140, border: '1px solid #d1d5db' }}>Manage blogs</Button>
        </div>
        {/* Main Content Card */}
        <Card className="mx-auto mb-4" style={{ borderRadius: 16, minHeight: 420, boxShadow: '0 2px 8px rgba(44,62,80,0.06)', maxWidth: 900 }}>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <img src={illustration} alt="Blog posts" style={{ width: 120, marginBottom: 24, opacity: 0.9 }} />
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Write a blog post</div>
            <div className="text-muted mb-3 text-center" style={{ maxWidth: 500 }}>
              Blog posts are a great way to build a community around your products and your brand.
            </div>
            <div className="d-flex gap-3">
              <Button variant="light" style={{ borderRadius: 8, minWidth: 120, fontWeight: 600, border: '1px solid #d1d5db' }}>Learn more</Button>
              <Button variant="dark" style={{ borderRadius: 8, minWidth: 160, fontWeight: 600 }}>Create blog post</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
} 