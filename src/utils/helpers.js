export const handleFileUpload = (file) => {
  // Function to handle file uploads
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('File reading error'));
    reader.readAsDataURL(file);
  });
};

export const calculateNewSize = (originalSize, scaleFactor) => {
  // Function to calculate new size based on a scaling factor
  return {
    width: originalSize.width * scaleFactor,
    height: originalSize.height * scaleFactor,
  };
};

export const removeElement = (elements, id) => {
  // Function to remove an element by its ID
  return elements.filter(element => element.id !== id);
};

export const changeElementColor = (elements, id, newColor) => {
  // Function to change the color of an element by its ID
  return elements.map(element => 
    element.id === id ? { ...element, color: newColor } : element
  );
};