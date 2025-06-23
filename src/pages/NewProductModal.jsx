// File: NewProductModal.jsx
import React, { useState } from "react";
import UploadImageModal from "./UploadImageModal";
import "./NewProductModal.css";

const NewProductModal = ({ onClose }) => {
  const [showImagePopup, setShowImagePopup] = useState(false);

  return (
    <div className="new-product-modal">
      <div className="modal-box">
        <h2>New Product</h2>
        <div className="form-grid">
          <input placeholder="Product Code" />
          <select>
            <option>Mens</option>
            <option>Womens</option>
            <option>Kids</option>
          </select>
          <input placeholder="Sub Category" />
          <input placeholder="Product Name" />
          <select>
            <option>Western Wear</option>
            <option>Ethnic Wear</option>
          </select>
          <input placeholder="Price" />
          <input placeholder="GST" />
        </div>

        <h4>Available Colours, Sizes & Quantity</h4>
        <div className="form-grid">
          <input placeholder="Colour" />
          <input placeholder="Size" />
          <input placeholder="Quantity" />
          <button
            className="upload-image-button"
            onClick={() => setShowImagePopup(true)}
          >
            Upload Image
          </button>
        </div>

        <div className="form-actions">
          <button className="discard-btn" onClick={onClose}>Discard</button>
          <button className="continue-btn">Continue</button>
        </div>

        {showImagePopup && (
          <UploadImageModal onClose={() => setShowImagePopup(false)} />
        )}
      </div>
    </div>
  );
};

export default NewProductModal;
