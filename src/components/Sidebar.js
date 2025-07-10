import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaRegFileAlt, FaUsers, FaBullhorn, FaTags, FaFileAlt, FaGlobe, FaChartBar, FaStore, FaPlus, FaChevronDown, FaChevronRight, FaTimes } from 'react-icons/fa';

const navItems = [
  { path: '/', label: 'Home', icon: <FaHome size={18} className="me-2" /> },
  {
    label: 'Orders',
    icon: <FaBoxOpen size={18} className="me-2" />,
    subItems: [
      { path: '/orders', label: 'Orders' },
      { path: '/orders/drafts', label: 'Drafts' },
      { path: '/orders/abandoned', label: 'Abandoned checkouts' },
    ],
  },
  {
    label: 'Products',
    icon: <FaRegFileAlt size={18} className="me-2" />,
    subItems: [
      { path: '/products', label: 'Products' },
      { path: '/products/collections', label: 'Collections' },
      { path: '/products/inventory', label: 'Inventory' },
      { path: '/products/purchase-orders', label: 'Purchase orders' },
      { path: '/products/transfers', label: 'Transfers' },
      { path: '/products/gift-cards', label: 'Gift cards' },
    ],
  },
  { path: '/customers', label: 'Customers', icon: <FaUsers size={18} className="me-2" /> },
  { path: '/marketing', label: 'Marketing', icon: <FaBullhorn size={18} className="me-2" /> },
  { path: '/discounts', label: 'Discounts', icon: <FaTags size={18} className="me-2" /> },
  {
    label: 'Content',
    icon: <FaFileAlt size={18} className="me-2" />,
    subItems: [
      { path: '/content/metaobjects', label: 'Metaobjects' },
      { path: '/content/files', label: 'Files' },
      { path: '/content/menus', label: 'Menus' },
      { path: '/content/blog-posts', label: 'Blog posts' },
    ],
  },
  {
    label: 'Markets',
    icon: <FaGlobe size={18} className="me-2" />,
    subItems: [
      { path: '/markets', label: 'Markets' },
      { path: '/markets/catalogs', label: 'Catalogs' },
    ],
  },
  { path: '/analytics', label: 'Analytics', icon: <FaChartBar size={18} className="me-2" /> },
];

const Sidebar = ({ showSidebar, onCloseSidebar }) => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState({ orders: false, products: false, content: false, markets: false });

  React.useEffect(() => {
    setExpanded({
      orders: location.pathname.startsWith('/orders'),
      products: location.pathname.startsWith('/products'),
      content: location.pathname.startsWith('/content'),
      markets: location.pathname.startsWith('/markets'),
    });
  }, [location.pathname]);

  const handleToggle = (section) => {
    setExpanded((prev) => ({
      orders: section === 'orders' ? !prev.orders : false,
      products: section === 'products' ? !prev.products : false,
      content: section === 'content' ? !prev.content : false,
      markets: section === 'markets' ? !prev.markets : false,
    }));
  };

  const isSubSelected = (subPath) => location.pathname === subPath;

  // Responsive: only fixed/overlay on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;
  const sidebarStyle = isMobile
    ? {
        minWidth: 240,
        borderRight: '1px solid #e1e3e5',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        background: '#fff',
        zIndex: 1200,
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        fontSize: 16,
        transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
        transform: showSidebar === false ? 'translateX(-100%)' : 'translateX(0)',
        boxShadow: showSidebar ? '0 2px 16px rgba(44,62,80,0.10)' : 'none',
      }
    : {
        minWidth: 240,
        borderRight: '1px solid #e1e3e5',
        background: '#fff',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        fontSize: 16,
        height: '100vh',
        position: 'relative',
        zIndex: 1,
        boxShadow: 'none',
        transition: 'none',
      };

  return (
    <Nav className="flex-column p-3 sidebar" style={sidebarStyle}>
      {/* Mobile close button */}
      {isMobile && (
        <div className="d-lg-none mb-3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="link" style={{ fontSize: 26, color: '#212b36' }} onClick={onCloseSidebar}><FaTimes /></Button>
        </div>
      )}
      <div className="mb-4 text-center">
        <span style={{ fontWeight: 'bold', fontSize: 22, color: '#008060' }}>Shopify App</span>
      </div>
      {navItems.map((item) => (
        item.subItems ? (
          <div key={item.label}>
            <Nav.Item>
              <div
                onClick={() => handleToggle(item.label.toLowerCase())}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: (expanded[item.label.toLowerCase()]) ? '#008060' : '#212b36', fontWeight: (expanded[item.label.toLowerCase()]) ? 'bold' : 'normal', background: (expanded[item.label.toLowerCase()]) ? '#eaf6f3' : 'transparent', borderRadius: 8, padding: '6px 12px' }}
              >
                {item.icon}{item.label}
                {expanded[item.label.toLowerCase()] ? <FaChevronDown className="ms-auto" /> : <FaChevronRight className="ms-auto" />}
              </div>
            </Nav.Item>
            {expanded[item.label.toLowerCase()] && (
              <div style={{ marginLeft: 32 }}>
                {item.subItems.map(sub => (
                  <Nav.Item key={sub.path}>
                    <Nav.Link
                      as={Link}
                      to={sub.path}
                      active={isSubSelected(sub.path)}
                      style={{ color: isSubSelected(sub.path) ? '#008060' : '#637381', fontWeight: isSubSelected(sub.path) ? 'bold' : 'normal', background: isSubSelected(sub.path) ? '#eaf6f3' : 'transparent', borderRadius: 8, fontSize: 15, paddingLeft: 18 }}
                    >
                      {sub.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Nav.Item key={item.path}>
            <Nav.Link
              as={Link}
              to={item.path}
              active={location.pathname === item.path}
              style={{ color: location.pathname === item.path ? '#008060' : '#212b36', fontWeight: location.pathname === item.path ? 'bold' : 'normal', background: location.pathname === item.path ? '#eaf6f3' : 'transparent', borderRadius: 8 }}
            >
              {item.icon}{item.label}
            </Nav.Link>
          </Nav.Item>
        )
      ))}
      {/* Sales channels */}
      <div className="mt-4 mb-2 text-uppercase text-muted" style={{ fontSize: 13, letterSpacing: 1 }}>Sales channels</div>
      <Nav.Item>
        <Nav.Link as={Link} to="#" style={{ color: '#212b36' }}>
          <FaStore size={18} className="me-2" />Online Store
        </Nav.Link>
      </Nav.Item>
      {/* Apps */}
      <div className="mt-4 mb-2 text-uppercase text-muted" style={{ fontSize: 13, letterSpacing: 1 }}>Apps</div>
      <Nav.Item>
        <Nav.Link as={Link} to="#" style={{ color: '#212b36' }}>
          <FaPlus size={18} className="me-2" />Add
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar; 