import React, { useState } from "react";
import "./Stocks.css";
import AddMoreModal from "./AddMoreModal";
import AddNewProductModal from "./AddNewProductModal"; // 👈 New component

const Stocks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNewProductModal, setShowNewProductModal] = useState(false); // 👈 For "New Product"

  const stockData = [
    {
      code: "P001",
      category: "Mens",
      subCategory: "Shirt",
      product: "Formal Shirt",
      updatedOn: "2025-06-21",
      quantity: 45,
    },
    {
      code: "P002",
      category: "Womens",
      subCategory: "Kurti",
      product: "Printed Kurti",
      updatedOn: "2025-06-20",
      quantity: 28,
    },
    {
      code: "P003",
      category: "Kids",
      subCategory: "Frock",
      product: "Party Frock",
      updatedOn: "2025-06-18",
      quantity: 60,
    },
  ];

  const handleAddMoreClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="stocks-page">
      <div className="stocks-header">
        <div className="left-controls">
          <button className="filter-btn">Filter</button>
          <button className="filter-btn">Category</button>
          <input type="text" placeholder="Search..." className="stocks-search" />
        </div>
        <div className="right-controls">
          <button
            className="new-product-btn"
            onClick={() => setShowNewProductModal(true)} // 👈 Show new modal
          >
            + New Product
          </button>
        </div>
      </div>

      <table className="stocks-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Product Code</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Product</th>
            <th>Updated On</th>
            <th>Available Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.code}</td>
              <td>{item.category}</td>
              <td>{item.subCategory}</td>
              <td>{item.product}</td>
              <td>{item.updatedOn}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="add-more-btn" onClick={() => handleAddMoreClick(item)}>
                  Add More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Existing Add More Modal */}
      {isModalOpen && (
        <AddMoreModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* New Product Modal */}
      {showNewProductModal && (
        <AddNewProductModal
          onClose={() => setShowNewProductModal(false)}
        />
      )}
    </div>
  );
};

export default Stocks;
