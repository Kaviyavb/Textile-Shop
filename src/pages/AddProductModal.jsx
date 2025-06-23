import React, { useState } from "react";
import "./AddProductModal.css";

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [product, setProduct] = useState({
    productNo: "",
    category: "Mens",
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file),
        imagePreview: file.name,
      });
    }
  };

  const handleSave = () => {
    onSave(product);
    setProduct({ productNo: "", category: "Mens", image: null, imagePreview: null });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Product No. : {product.productNo || "01"}</h3>

        <label>Product Category</label>
        <select name="category" value={product.category} onChange={handleChange}>
          <option>Mens</option>
          <option>Women</option>
          <option>Kids</option>
          <option>Others</option>
        </select>

        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {product.imagePreview && <p>📷 {product.imagePreview}</p>}

        <label>Product No</label>
        <input
          type="text"
          name="productNo"
          value={product.productNo}
          placeholder="Enter Product No"
          onChange={handleChange}
        />

        <div className="modal-actions">
          <button className="discard-btn" onClick={onClose}>Discard</button>
          <button className="save-btn" onClick={handleSave}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
