// Content page
import React from 'react';
import ContentSubNav from '../components/ContentSubNav';

export default function Content() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="d-flex align-items-center mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          Content
        </div>
        <ContentSubNav />
        <div className='p-4'><h2>Content</h2></div>
      </div>
    </div>
  );
} 