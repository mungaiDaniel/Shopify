import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap';
import DraggableEditable from '../../components/DraggableEditable';
import { FaTrash, FaPlus, FaImage } from 'react-icons/fa';

export default function AddProduct() {
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState([]);
  const [elements, setElements] = useState([
    { type: 'button', label: 'Sample Button', color: '#212b36' },
    { type: 'image', src: '', color: '#fff' },
  ]);

  // Add new media
  const handleAddMedia = (file) => {
    setMedia((prev) => [...prev, file]);
  };
  // Remove media
  const handleRemoveMedia = (idx) => setMedia(media.filter((_, i) => i !== idx));
  // Replace media
  const handleReplaceMedia = (idx, file) => setMedia(media.map((m, i) => i === idx ? file : m));

  // Remove element
  const removeElement = (idx) => setElements(elements.filter((_, i) => i !== idx));
  // Change color
  const changeColor = (idx, color) => setElements(elements.map((el, i) => i === idx ? { ...el, color } : el));
  // Replace with file
  const replaceWithFile = (idx, file) => {
    const url = URL.createObjectURL(file);
    setElements(elements.map((el, i) => i === idx ? { ...el, type: 'image', src: url } : el));
  };

  return (
    <div style={{ background: '#f6f6f7', minHeight: '100vh', padding: '32px 0' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <h4 className="mb-4">Add product</h4>
        <Form>
          <Row>
            <Col md={8}>
              <Card className="mb-4 p-3" style={{ borderRadius: 12 }}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control value={title} onChange={e => setTitle(e.target.value)} placeholder="Short sleeve t-shirt" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={4} value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload and size files</Form.Label>
                  <div style={{ width: '100%', maxWidth: '100%', marginBottom: 16 }}>
                    <DraggableEditable
                      allowedTypes="image/*,video/*"
                      onChange={file => handleAddMedia(file)}
                      showRemove={false}
                      showReplace={false}
                      showZoom={false}
                      showGuidesToggle={true}
                    >
                      <div style={{ color: '#888', fontSize: 15, padding: 16 }}>
                        <FaImage style={{ fontSize: 32, opacity: 0.3 }} />
                        <div>Drag and drop or click to upload files to size<br /><span style={{ fontSize: 13, color: '#888' }}>Accepts images, videos, or 3D models</span></div>
                      </div>
                    </DraggableEditable>
                  </div>
                  <div className="d-flex flex-wrap gap-3" style={{ width: '100%', maxWidth: '100%' }}>
                    {media.map((file, idx) => (
                      <DraggableEditable
                        key={idx}
                        initialFile={file}
                        allowedTypes="image/*,video/*"
                        onChange={f => handleReplaceMedia(idx, f)}
                        onRemove={() => handleRemoveMedia(idx)}
                        showRemove={true}
                        showReplace={true}
                        showGuidesToggle={true}
                        showZoom={true}
                        style={{ width: 320, minHeight: 180 }}
                      />
                    ))}
                  </div>
                </Form.Group>
                {/* Example: Element management */}
                <Form.Group className="mb-3">
                  <Form.Label>Demo: Manage elements</Form.Label>
                  <div className="d-flex flex-wrap gap-3 ">
                    {elements.map((el, idx) => (
                      <div key={idx} style={{ background: '#f3f4f6', borderRadius: 8, padding: 12, minWidth: 120, textAlign: 'center', color: el.color }}>
                        {el.type === 'button' ? (
                          <Button style={{ background: el.color, border: 'none' }}>{el.label}</Button>
                        ) : el.type === 'image' && el.src ? (
                          <img src={el.src} alt="element" style={{ width: 60, height: 60, borderRadius: 6 }} />
                        ) : null}
                        <div className="mt-2">
                          <Button size="sm" variant="outline-danger" className="me-1" onClick={() => removeElement(idx)}><FaTrash /></Button>
                          <Button size="sm" variant="outline-secondary" className="me-1" onClick={() => changeColor(idx, '#008060')}>Green</Button>
                          <Button size="sm" variant="outline-secondary" className="me-1" onClick={() => changeColor(idx, '#e53935')}>Red</Button>
                          <Form.Control type="file" size="sm" style={{ display: 'inline', width: 90 }} onChange={e => replaceWithFile(idx, e.target.files[0])} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Form.Group>
              </Card>
            </Col>
            <Col md={4}>
              {/* Sidebar fields (status, publishing, org, etc.) */}
              <Card className="mb-3 p-3" style={{ borderRadius: 12 }}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select>
                    <option>Active</option>
                    <option>Draft</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Publishing</Form.Label>
                  <InputGroup>
                    <Form.Control value="Online Store" readOnly />
                    <Button variant="outline-secondary" size="sm">Manage</Button>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Product organization</Form.Label>
                  <Form.Control placeholder="Type" className="mb-2" />
                  <Form.Control placeholder="Vendor" className="mb-2" />
                  <Form.Control placeholder="Collections" className="mb-2" />
                  <Form.Control placeholder="Tags" className="mb-2" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Theme template</Form.Label>
                  <Form.Select>
                    <option>Default product</option>
                  </Form.Select>
                </Form.Group>
              </Card>
              {/* Pricing, Inventory, Shipping, Variants, SEO, etc. can be added here as more fields */}
            </Col>
          </Row>
          <Button variant="primary" className="mt-3" style={{ borderRadius: 8, minWidth: 120 }}>Save</Button>
        </Form>
      </div>
    </div>
  );
} 