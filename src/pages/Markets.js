// Markets page
import React from 'react';
import MarketsSubNav from '../components/MarketsSubNav';
import { Card, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import { FaGlobe, FaSyncAlt, FaPlus, FaStore, FaFolder, FaCog, FaProjectDiagram } from 'react-icons/fa';

const usaFlag = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg';

export default function Markets() {
  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0 0 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4" style={{ background: '#f3f4f6', borderRadius: 12, padding: '18px 32px', borderBottom: '1px solid #e1e3e5', fontWeight: 600, fontSize: 22 }}>
          <span><FaGlobe className="me-2" />Markets</span>
          <div>
            <Button variant="light" style={{ borderRadius: 8, fontWeight: 600, minWidth: 110, border: '1px solid #d1d5db' }} className="me-2">
              <FaProjectDiagram className="me-2" />Graph view
            </Button>
            <Button variant="dark" style={{ borderRadius: 8, fontWeight: 600, minWidth: 140 }}>Create market</Button>
          </div>
        </div>
        <MarketsSubNav />
        {/* Main Content */}
        <div className="d-flex" style={{ gap: 24 }}>
          {/* Left Sidebar */}
          <Card style={{ minWidth: 220, borderRadius: 12, border: '1px solid #e1e3e5', boxShadow: 'none', background: '#fff' }}>
            <Card.Body className="p-3">
              <div className="mb-3" style={{ fontWeight: 500, fontSize: 16, display: 'flex', alignItems: 'center' }}>
                <FaStore className="me-2" />Store default
              </div>
              <div style={{ color: '#637381', fontSize: 15, marginLeft: 6, display: 'flex', alignItems: 'center' }}>
                <FaFolder className="me-2" />Regions
              </div>
            </Card.Body>
          </Card>
          {/* Main Table Card */}
          <Card className="flex-grow-1" style={{ borderRadius: 12, border: '1px solid #e1e3e5', boxShadow: 'none', background: '#fff' }}>
            <Card.Body className="p-0">
              {/* Search and controls */}
              <div className="d-flex align-items-center p-3 pb-0" style={{ gap: 12 }}>
                <Button variant="light" style={{ borderRadius: 8, border: '1px solid #d1d5db', fontWeight: 600, padding: '6px 10px' }}>
                  <FaSyncAlt />
                </Button>
                <InputGroup style={{ maxWidth: 350 }}>
                  <FormControl placeholder="Search in all markets" style={{ borderRadius: 8, background: '#f6f6f7', border: '1px solid #e1e3e5' }} />
                </InputGroup>
                <div className="ms-auto">
                  {/* Placeholder for right controls */}
                </div>
              </div>
              {/* Table */}
              <Table hover borderless className="mb-0 mt-3" style={{ minWidth: 600 }}>
                <thead style={{ background: '#f9fafb', fontSize: 15, color: '#637381' }}>
                  <tr>
                    <th style={{ fontWeight: 600 }}>Market</th>
                    <th style={{ fontWeight: 600 }}>Status</th>
                    <th style={{ fontWeight: 600 }}>Includes</th>
                    <th style={{ fontWeight: 600 }}>Customizations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 500, fontSize: 16 }}><FaGlobe className="me-2" />USA</td>
                    <td><span style={{ background: '#d1fadf', color: '#008060', borderRadius: 8, padding: '2px 14px', fontWeight: 600, fontSize: 15 }}>Active</span></td>
                    <td><img src={usaFlag} alt="USA" style={{ width: 28, height: 18, borderRadius: 3, marginRight: 8, border: '1px solid #e1e3e5', verticalAlign: 'middle' }} />USA</td>
                    <td><FaCog style={{ color: '#637381', fontSize: 18 }} /></td>
                  </tr>
                  <tr style={{ background: '#f6f3ff' }}>
                    <td colSpan={4}>
                      <Button variant="link" style={{ color: '#7c3aed', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                        <FaPlus className="me-2" style={{ background: '#ede9fe', borderRadius: '50%', color: '#7c3aed', padding: 2, fontSize: 18 }} />
                        Create International Market
                      </Button>
                      <span className="ms-3" style={{ float: 'right', color: '#637381', cursor: 'pointer', fontSize: 15 }}>Dismiss</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        {/* Footer Link */}
        <div className="text-center mt-4 mb-4">
          <span className="text-muted" style={{ fontSize: 15 }}>Learn more about <a href="#" style={{ color: '#1463ff', textDecoration: 'underline' }}>markets</a></span>
        </div>
      </div>
    </div>
  );
} 