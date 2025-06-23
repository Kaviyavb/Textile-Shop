// UploadProducts.jsx
import React, { useState } from "react";
import "./UploadProduct.css";
import UploadProductModal from "./UploadProductModal"; // Your popup modal

const UploadProducts = () => {
  const [activeTab, setActiveTab] = useState("Inactive");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productData = [
    {
      id: 1,
      date: "10/11/2023",
      code: "008",
      category: "Men",
      subCategory: "T-shirt",
      product: "Men Printed Polo...",
      price: "Rs.100",
      gst: "10%",
      status: "Inactive",
    },
    {
      id: 2,
      date: "12/11/2023",
      code: "018",
      category: "Men",
      subCategory: "T-shirt",
      product: "Men Printed Rou...",
      price: "Rs.100",
      gst: "10%",
      status: "Inactive",
    },
     // Inactive products
  {
    id: 1,
    date: "10/11/2023",
    code: "008",
    category: "Men",
    subCategory: "T-shirt",
    product: "Men Printed Polo...",
    price: "Rs.100",
    gst: "10%",
    status: "Inactive",
  },
  {
    id: 2,
    date: "12/11/2023",
    code: "018",
    category: "Men",
    subCategory: "T-shirt",
    product: "Men Printed Round...",
    price: "Rs.120",
    gst: "10%",
    status: "Inactive",
  },

  // Active products
  {
    id: 3,
    date: "15/06/2024",
    code: "021",
    category: "Women",
    subCategory: "Kurti",
    product: "Floral Kurti",
    price: "Rs.299",
    gst: "12%",
    status: "Active",
  },
  {
    id: 4,
    date: "17/06/2024",
    code: "022",
    category: "Kids",
    subCategory: "Dress",
    product: "Party Frock",
    price: "Rs.349",
    gst: "5%",
    status: "Active",
  },

  // Out of Stock products
  {
    id: 5,
    date: "05/06/2024",
    code: "030",
    category: "Men",
    subCategory: "Jeans",
    product: "Slim Fit Jeans",
    price: "Rs.799",
    gst: "18%",
    status: "Out of Stock",
  },
  {
    id: 6,
    date: "06/06/2024",
    code: "031",
    category: "Accessories",
    subCategory: "Belt",
    product: "Leather Belt",
    price: "Rs.199",
    gst: "5%",
    status: "Out of Stock",
  },
   
  ];

  const filteredProducts = productData.filter(
    (product) => product.status === activeTab
  );

  return (
    <div className="upload-products">
      <div className="header-row">
        <h3 className="h3">Product Details</h3>
        <div className="actions">
          <input type="text" placeholder="Search....." className="search-box" />
          <button className="new-product-btn" onClick={() => setIsModalOpen(true)}>
            + New Product
          </button>
        </div>
      </div>

      <div className="tabs">
        {['Active', 'Inactive', 'Out of Stock'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Sl. no.</th>
            <th>Posted on</th>
            <th>Product code</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Product</th>
            <th>Price</th>
            <th>GST</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.date}</td>
              <td>{product.code}</td>
              <td>{product.category}</td>
              <td>{product.subCategory}</td>
              <td>{product.product}</td>
              <td>{product.price}</td>
              <td>{product.gst}</td>
              <td className={product.status === 'Out of Stock' ? 'out-stock' : 'inactive'}>{product.status}</td>
              <td>
                <span role="button" title="View">👁</span>
                <span role="button" title="Edit">✏️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && <UploadProductModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default UploadProducts;
