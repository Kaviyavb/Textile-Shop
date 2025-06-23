import React, { useState } from "react";
import "./UploadImageModal.css";

const UploadImageModal = ({ onClose }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 4) {
      alert("Maximum 4 images allowed");
      return;
    }
    setImages([...images, ...files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (images.length + files.length > 4) {
      alert("Maximum 4 images allowed");
      return;
    }
    setImages([...images, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="upload-image-modal-overlay" onClick={onClose}>
      <div
        className="upload-image-modal"
        onClick={(e) => e.stopPropagation()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="upload-icon">📷</div>
        <div className="upload-instruction">
          Drop your images here, or <label htmlFor="imageUpload">browse</label>
        </div>
        <div className="upload-subtext">(upload maximum 4 photos)</div>
        <input
          id="imageUpload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        {images.length > 0 && (
          <div className="preview-container">
            {images.map((img, idx) => (
              <div key={idx} className="preview-item">
                <img src={URL.createObjectURL(img)} alt={`preview-${idx}`} />
                <button className="remove-btn" onClick={() => removeImage(idx)}>
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="modal-actions">
          <button className="discard-btn" onClick={onClose}>
            Discard
          </button>
          <button className="save-btn" onClick={() => alert("Uploaded!")}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImageModal;
