import React, { useState } from "react";
import UploadImageModal from "./UploadImageModal";
import "./UploadProductModal.css";

const UploadProductModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    code: "",
    category: "Mens",
    subCategory: "",
    productName: "",
    productType: "Western Wear",
    price: "",
    gst: "",
    variants: [{ colour: "", size: "", quantity: "", image: null }],
  });

  const [imageModalIndex, setImageModalIndex] = useState(null);

  const handleChange = (e, index = null) => {
    const { name, value, files } = e.target;
    if (index !== null) {
      const updatedVariants = [...formData.variants];
      updatedVariants[index][name] = files ? files[0] : value;
      setFormData({ ...formData, variants: updatedVariants });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddMoreVariant = () => {
    setFormData({
      ...formData,
      variants: [...formData.variants, { colour: "", size: "", quantity: "", image: null }],
    });
  };

  const closeImageModal = () => {
    setImageModalIndex(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>New Product</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Product Code</label>
            <input name="code" value={formData.code} onChange={handleChange} />
          </div>

          <div className="form-group">
            <div className="label-with-action">
              <label>Product Category</label>
                         </div>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option>Mens</option>
              <option>Womens</option>
              <option>Kids</option>
              <option>Accessories</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Sub Category</label>
            <input name="subCategory" value={formData.subCategory} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Product name</label>
            <input name="productName" value={formData.productName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <div className="label-with-action">
              <label>Product Type</label>
             
            </div>
            <input name="productType" value={formData.productType} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input name="price" value={formData.price} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>GST</label>
          <input name="gst" value={formData.gst} onChange={handleChange} />
        </div>

        <label className="section-label">Available Colours, Sizes & Quantity.</label>
        {formData.variants.map((variant, index) => (
          <div key={index} className="form-row">
            <input
              type="color"
              name="colour"
              value={variant.colour}
              onChange={(e) => handleChange(e, index)}
              className="color-picker"
            />
            <input
              name="size"
              placeholder="Size"
              value={variant.size}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              name="quantity"
              placeholder="Quantity"
              value={variant.quantity}
              onChange={(e) => handleChange(e, index)}
            />
            <button
              className="upload-image-btn"
              onClick={(e) => {
                e.preventDefault();
                setImageModalIndex(index);
              }}
            >
              Upload Image
            </button>
          </div>
        ))}

        <div className="form-actions"><br />
          <span className="link" onClick={handleAddMoreVariant}>
            Add More
          </span>
        </div>

        <div className="modal-actions">
          <button className="discard-btn" onClick={onClose}>
            Discard
          </button>
          <button className="continue-btn">Continue</button>
        </div>

        {imageModalIndex !== null && <UploadImageModal onClose={closeImageModal} />}
      </div>
    </div>
  );
};

export default UploadProductModal;
