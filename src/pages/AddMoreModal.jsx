import React from "react";
import "./Stocks.css";

const AddMoreModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add More to Stock</h2>
        <form className="product-form">
          <div className="form-grid">
            <input defaultValue={product.code} placeholder="Product Code" />
            <input defaultValue={product.category} placeholder="Product Category" />
            <input defaultValue={product.subCategory} placeholder="Sub Category" />
            <input defaultValue={product.product} placeholder="Product Name" />
            <input placeholder="Product Type" />
            <input placeholder="Price" />
            <input placeholder="GST" />
          </div>

          <h4>Available Colours, Sizes & Quantity</h4>
          <div className="form-grid">
            <input placeholder="Colour" />
            <input placeholder="Size" />
            <input placeholder="Add Quantity" />
            <input type="file" />
          </div>

          <div className="modal-actions">
            <button type="button" className="discard-btn" onClick={onClose}>
              Discard
            </button>
            <button type="submit" className="save-btn">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMoreModal;
