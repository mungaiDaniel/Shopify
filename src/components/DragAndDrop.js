import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, Button } from 'react-bootstrap';

const DragAndDrop = () => {
  const [files, setFiles] = useState([]);
  const [showLines, setShowLines] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Card className="mb-3 p-3">
      <Card.Title>Drag and Drop</Card.Title>
      <Button
        variant={showLines ? 'secondary' : 'primary'}
        className="mb-2"
        onClick={() => setShowLines((prev) => !prev)}
      >
        {showLines ? 'Hide Lines' : 'Show Lines'}
      </Button>
      <div {...getRootProps({ className: showLines ? 'dropzone with-lines' : 'dropzone' })} style={{ border: '2px dashed #61dafb', borderRadius: 10, padding: 20, textAlign: 'center' }}>
      <input {...getInputProps()} />
        <p className="text-muted">Drag 'n' drop some files here, or click to select files</p>
        <ul className="list-unstyled">
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
    </Card>
  );
};

export default DragAndDrop;