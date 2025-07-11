import React, { useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaTrash, FaUpload, FaEye, FaEyeSlash, FaSync, FaPalette } from 'react-icons/fa';

const defaultStyle = {
  border: '2px dashed #61dafb',
  borderRadius: 10,
  padding: 20,
  textAlign: 'center',
  position: 'relative',
  background: '#fff',
  minHeight: 120,
  minWidth: 700,
  width: 400,
  overflow: 'hidden',
};

export default function DraggableEditable({
  initialFile = null,
  allowedTypes = 'image/*',
  onChange,
  onRemove,
  children,
  style = {},
  showRemove = true,
  showReplace = true,
  showGuidesToggle = true,
  showZoom = true,
  replaceable = true,
}) {
  const [file, setFile] = useState(initialFile);
  const [showGuides, setShowGuides] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [bgColor, setBgColor] = useState('');
  const containerRef = useRef();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
      setBgColor('');
      if (onChange) onChange(acceptedFiles[0]);
    }
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: allowedTypes,
    noClick: !replaceable,
    noKeyboard: !replaceable,
  });

  // Scroll to zoom
  const handleWheel = (e) => {
    if (!showZoom) return;
    e.preventDefault();
    setZoom((z) => Math.max(0.2, Math.min(3, z + (e.deltaY < 0 ? 0.1 : -0.1))));
  };

  // Remove/replace logic
  const handleRemove = () => {
    setFile(null);
    setBgColor('');
    if (onRemove) onRemove();
  };
  const handleReplaceWithColor = () => {
    setFile(null);
    setBgColor('#e1e3e5');
    if (onChange) onChange(null, '#e1e3e5');
  };

  // Render content
  let content = children;
  if (file) {
    const url = typeof file === 'string' ? file : URL.createObjectURL(file);
    content = (
      <img
        src={url}
        alt="uploaded"
        style={{
          maxWidth: '100%',
          maxHeight: 180,
          transform: `scale(${zoom})`,
          transition: 'transform 0.2s',
          display: 'block',
          margin: '0 auto',
        }}
        onWheel={handleWheel}
        draggable={false}
      />
    );
  } else if (bgColor) {
    content = <div style={{ width: 120, height: 120, background: bgColor, borderRadius: 8, margin: '0 auto' }} />;
  }

  return (
    <Card style={{ ...defaultStyle, ...style, border: showGuides ? '2px solid #008060' : defaultStyle.border }} ref={containerRef}>
      <div {...getRootProps()} style={{ cursor: replaceable ? 'pointer' : 'default', outline: showGuides ? '2px dashed #008060' : 'none', minHeight: 120 }}>
        <input {...getInputProps()} />
        {content}
        {isDragActive && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,128,96,0.08)', borderRadius: 10, zIndex: 2 }} />
        )}
      </div>
      <div className="d-flex justify-content-center gap-1 mt-2 w-100">
        {showGuidesToggle && (
          <Button variant={showGuides ? 'success' : 'outline-secondary'} size="sm" onClick={() => setShowGuides((g) => !g)}>
            {showGuides ? <FaEye /> : <FaEyeSlash />} Guides
          </Button>
        )}
        {showRemove && (
          <Button variant="outline-danger" size="sm" onClick={handleRemove}><FaTrash /> Remove</Button>
        )}
        {showReplace && (
          <Button variant="outline-primary" size="sm" onClick={() => containerRef.current.querySelector('input[type=file]').click()}><FaUpload /> Replace</Button>
        )}
        {replaceable && (
          <Button variant="outline-secondary" size="sm" onClick={handleReplaceWithColor}><FaPalette /> Color</Button>
        )}
        {showZoom && file && (
          <ButtonGroup>
            <Button size="sm" variant="outline-secondary" onClick={() => setZoom((z) => Math.max(0.2, z - 0.1))}>-</Button>
            <Button size="sm" variant="outline-secondary" onClick={() => setZoom(1)}>Reset</Button>
            <Button size="sm" variant="outline-secondary" onClick={() => setZoom((z) => Math.min(3, z + 0.1))}>+</Button>
          </ButtonGroup>
        )}
      </div>
    </Card>
  );
} 