import React, { useState } from 'react';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Drafts from './pages/Drafts';
import Abandoned from './pages/Abandoned';
import Products from './pages/Products';
import Collections from './pages/Products/Collections';
import Inventory from './pages/Products/Inventory';
import PurchaseOrders from './pages/Products/PurchaseOrders';
import Transfers from './pages/Products/Transfers';
import GiftCards from './pages/Products/GiftCards';
import Customers from './pages/Customers';
import Marketing from './pages/Marketing';
import Discounts from './pages/Discounts';
import Content from './pages/Content';
import Markets from './pages/Markets';
import Analytics from './pages/Analytics';
import AddProduct from './pages/Products/AddProduct';
import Metaobjects from './pages/Metaobjects';
import Files from './pages/Files';
import Menus from './pages/Menus';
import BlogPosts from './pages/BlogPosts';
import Catalogs from './pages/Catalogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';

function App() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 992);

  React.useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleSidebar = () => setShowSidebar(s => !s);
  const handleCloseSidebar = () => setShowSidebar(false);

  return (
    <Router>
      <AppNavbar onToggleSidebar={handleToggleSidebar} />
      <div style={{ display: 'flex' }}>
        <Sidebar showSidebar={showSidebar} onCloseSidebar={handleCloseSidebar} />
        <main style={{ marginLeft: showSidebar && window.innerWidth >= 992 ? 240 : 0, width: '100%', transition: 'margin-left 0.3s cubic-bezier(.4,0,.2,1)', marginTop: 56 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/drafts" element={<Drafts />} />
            <Route path="/orders/abandoned" element={<Abandoned />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/collections" element={<Collections />} />
            <Route path="/products/inventory" element={<Inventory />} />
            <Route path="/products/purchase-orders" element={<PurchaseOrders />} />
            <Route path="/products/transfers" element={<Transfers />} />
            <Route path="/products/gift-cards" element={<GiftCards />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/metaobjects" element={<Metaobjects />} />
            <Route path="/content/files" element={<Files />} />
            <Route path="/content/menus" element={<Menus />} />
            <Route path="/content/blog-posts" element={<BlogPosts />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/markets/catalogs" element={<Catalogs />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;