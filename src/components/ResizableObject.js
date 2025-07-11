import React, { useState, useRef } from 'react';
import { Card, Form } from 'react-bootstrap';

const ResizableObject = () => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [isResizing, setIsResizing] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startSize = useRef({ width: 200, height: 200 });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleMouseDown = (e) => {
    setIsResizing(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    startSize.current = { width, height };
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      setWidth(Math.max(50, startSize.current.width + dx));
      setHeight(Math.max(50, startSize.current.height + dy));
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <Card className="mb-3 p-3">
      <Card.Title>Resizable Object</Card.Title>
      <Form.Group controlId="formImage" className="mb-2">
        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
      </Form.Group>
    <div
        className="resizable-object border position-relative d-inline-block"
        style={{ width, height }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
        {image && (
          <img src={image} alt="Resizable" style={{ width: '100%', height: '100%' }} />
        )}
        <div
          className="resize-handle bg-primary"
          style={{ position: 'absolute', width: 14, height: 14, bottom: 0, right: 0, cursor: 'se-resize', borderRadius: 3 }}
          onMouseDown={handleMouseDown}
        />
    </div>
    </Card>
  );
};

export default ResizableObject;