import React, { useState } from 'react';
import { Card, Button, Form, ListGroup } from 'react-bootstrap';

const ElementManager = () => {
  const [elements, setElements] = useState([]);

  const addElement = (newElement) => {
    setElements([...elements, newElement]);
  };

  const removeElement = (index) => {
    const updatedElements = elements.filter((_, i) => i !== index);
    setElements(updatedElements);
  };

  const changeElementColor = (index, color) => {
    const updatedElements = elements.map((element, i) =>
      i === index ? { ...element, color } : element
    );
    setElements(updatedElements);
  };

  const replaceElementWithFile = (index, file) => {
    const url = URL.createObjectURL(file);
    const updatedElements = elements.map((element, i) =>
      i === index ? { ...element, type: 'image', src: url } : element
    );
    setElements(updatedElements);
  };

  return (
    <Card className="mb-3 p-3 element-manager">
      <Card.Title>Element Manager</Card.Title>
      <ListGroup className="mb-2">
        {elements.map((element, index) => (
          <ListGroup.Item key={index} style={{ color: element.color }} className="d-flex align-items-center justify-content-between">
            <div>
              {element.type === 'image' ? (
                <img src={element.src} alt="Element" style={{ width: 50, height: 50, marginRight: 10 }} />
              ) : (
                element.name
              )}
            </div>
            <div>
              <Button variant="danger" size="sm" className="me-2" onClick={() => removeElement(index)}>Remove</Button>
              <Button variant="warning" size="sm" className="me-2" onClick={() => changeElementColor(index, 'red')}>Red</Button>
              <Form.Control
                type="file"
                accept="image/*"
                size="sm"
                style={{ display: 'inline-block', width: 120 }}
                onChange={e => replaceElementWithFile(index, e.target.files[0])}
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="success" onClick={() => addElement({ name: 'New Element', color: 'black', type: 'text' })}>
        Add Element
      </Button>
    </Card>
  );
};

export default ElementManager;