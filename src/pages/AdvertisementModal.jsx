import React, { useState } from "react";
import "./AdvertisementModal.css";

const AdvertisementModal= ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    productNo: "",
    category: "Mens",
    heading: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Product No. : {formData.productNo || "01"}</h3>

        <label>Product Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Mens">Mens</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Others">Others</option>
        </select>

        <label>Product Images</label>
        <input type="file" name="image" onChange={handleChange} />

        <label>Heading</label>
        <input type="text" name="heading" value={formData.heading} onChange={handleChange} />

        <label>Content</label>
        <textarea
          name="content"
          rows="4"
          value={formData.content}
          onChange={handleChange}
        ></textarea>

        <div className="modal-actions">
          <button className="discard-btn" onClick={onClose}>Discard</button>
          <button className="upload-btn" onClick={handleSubmit}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementModal;
