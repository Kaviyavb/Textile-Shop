import React, { useState } from "react";
import "./AdvertisementList.css";
import AdvertisementModal from "./AdvertisementModal";

const AdvertisementList = () => {
  const [ads, setAds] = useState([
    { id: 1, productNo: "01", category: "Mens", image: null },
    { id: 2, productNo: "02", category: "Women", image: "/images/product2.png" },
    { id: 3, productNo: "03", category: "Kids", image: "/images/product3.png" },
    { id: 4, productNo: "04", category: "Others", image: "/images/product4.png" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = (newProduct) => {
    setAds([...ads, { ...newProduct, id: ads.length + 1 }]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setAds(ads.filter((ad) => ad.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit product ID: ${id}`);
  };

  return (
    <div className="advertisement-list">
      <div className="header">
        <h2>Advertisements</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Products
        </button>
      </div>

      <div className="card-container">
        {ads.map((ad) => (
          <div key={ad.id} className="ad-card">
            <h4>Product No. : {ad.productNo}</h4>
            <p className="category-title">Product Category</p>
            <p>{ad.category}</p>
            {ad.image && <img src={ad.kids} alt="Product" className="product-img" />}
            <div className="actions">
              <button className="delete-btn" onClick={() => handleDelete(ad.id)}>
                 Delete
              </button>
              <button className="edit-btn" onClick={() => handleEdit(ad.id)}>
                ✏️ Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdvertisementModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddProduct}
      />
    </div>
  );
};

export default AdvertisementList;
