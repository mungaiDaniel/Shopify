import React, { useState, useCallback } from 'react';
import { Form, Button, Card, Row, Col, InputGroup, Dropdown } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { FaTrash, FaPlus, FaImage, FaEye, FaMinus, FaPlusCircle } from 'react-icons/fa';

export default function AddProduct() {
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState([]);
  const [showLines, setShowLines] = useState(false);
  const [mediaSize, setMediaSize] = useState(200);
  const [elements, setElements] = useState([
    { type: 'button', label: 'Sample Button', color: '#212b36' },
    { type: 'image', src: '', color: '#fff' },
  ]);

  // Drag and drop
  const onDrop = useCallback((acceptedFiles) => {
    setMedia((prev) => [...prev, ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Remove element
  const removeElement = (idx) => setElements(elements.filter((_, i) => i !== idx));
  // Change color
  const changeColor = (idx, color) => setElements(elements.map((el, i) => i === idx ? { ...el, color } : el));
  // Replace with file
  const replaceWithFile = (idx, file) => {
    const url = URL.createObjectURL(file);
    setElements(elements.map((el, i) => i === idx ? { ...el, type: 'image', src: url } : el));
  };

  // Media zoom
  const handleWheel = (e) => {
    e.preventDefault();
    setMediaSize((prev) => Math.max(50, prev + (e.deltaY < 0 ? 20 : -20)));
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
                  <Form.Label>Media</Form.Label>
                  <div className="mb-2">
                    <Button size="sm" variant={showLines ? 'secondary' : 'outline-secondary'} onClick={() => setShowLines(v => !v)} className="me-2">{showLines ? 'Hide lining' : 'Show lining'}</Button>
                  </div>
                  <div {...getRootProps({ className: showLines ? 'dropzone with-lines' : 'dropzone' })} style={{ border: showLines ? '2px dashed #61dafb' : '2px dashed #ccc', borderRadius: 10, padding: 24, background: '#fafbfc', textAlign: 'center', marginBottom: 12 }}>
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop files here...</p> : <p>Upload new / Select existing<br /><span style={{ fontSize: 13, color: '#888' }}>Accepts images, videos, or 3D models</span></p>}
                  </div>
                  <div className="d-flex flex-wrap gap-3">
                    {media.map((file, idx) => (
                      <div key={idx} style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                          src={file.preview}
                          alt="media"
                          style={{ width: mediaSize, height: 'auto', borderRadius: 8, border: '1px solid #eee', marginBottom: 4 }}
                          onWheel={handleWheel}
                        />
                        <Button size="sm" variant="danger" style={{ position: 'absolute', top: 4, right: 4, borderRadius: 20, padding: 2 }} onClick={() => setMedia(media.filter((_, i) => i !== idx))}><FaTrash /></Button>
                        <div className="text-center" style={{ fontSize: 12 }}>Scroll to zoom</div>
                      </div>
                    ))}
                  </div>
                </Form.Group>
                {/* Example: Element management */}
                <Form.Group className="mb-3">
                  <Form.Label>Demo: Manage elements</Form.Label>
                  <div className="d-flex flex-wrap gap-3">
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