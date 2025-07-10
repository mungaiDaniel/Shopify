import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ContentSubNav() {
  const location = useLocation();
  const navigate = useNavigate();
  let page = 'metaobjects';
  if (location.pathname === '/content/files') page = 'files';
  if (location.pathname === '/content/menus') page = 'menus';
  if (location.pathname === '/content/blog-posts') page = 'blog-posts';

  return (
    <div className="d-flex mb-4" style={{ gap: 16, marginLeft: 8 }}>
      <Button
        variant={location.pathname === '/content/metaobjects' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/content/metaobjects')}
        active={location.pathname === '/content/metaobjects'}
      >
        Metaobjects
      </Button>
      <Button
        variant={page === 'files' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/content/files')}
        active={page === 'files'}
      >
        Files
      </Button>
      <Button
        variant={page === 'menus' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/content/menus')}
        active={page === 'menus'}
      >
        Menus
      </Button>
      <Button
        variant={page === 'blog-posts' ? 'dark' : 'light'}
        style={{ borderRadius: 12, fontWeight: 600, boxShadow: 'none', padding: '8px 24px', fontSize: 16 }}
        onClick={() => navigate('/content/blog-posts')}
        active={page === 'blog-posts'}
      >
        Blog posts
      </Button>
    </div>
  );
} 