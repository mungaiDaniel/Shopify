import React, { useState, useRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [size, setSize] = useState(200);
  const imgRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file && file.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Implement the file upload logic here
      console.log('File uploaded:', selectedFile);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setSize((prev) => Math.max(50, prev + (e.deltaY < 0 ? 20 : -20)));
  };

  return (
    <Card className="mb-3 p-3">
      <Card.Title>File Upload</Card.Title>
      <Form>
        <Form.Group controlId="formFile" className="mb-2">
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleFileUpload} className="mb-2">Upload</Button>
      </Form>
      {selectedFile && <div className="mb-2">Selected file: {selectedFile.name}</div>}
      {previewUrl && (
        <div style={{ overflow: 'auto', display: 'inline-block' }} onWheel={handleWheel}>
          <img
            ref={imgRef}
            src={previewUrl}
            alt="Preview"
            style={{ width: size, height: 'auto', border: '1px solid #ccc', marginTop: 10 }}
          />
          <div className="text-muted">Scroll to zoom</div>
        </div>
      )}
    </Card>
  );
};

export default FileUpload;