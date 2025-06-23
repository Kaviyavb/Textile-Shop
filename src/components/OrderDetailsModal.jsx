// src/components/OrderDetailsModal.jsx
import React from "react";
import "./OrderDetailsModal.css";

const OrderDetailsModal = ({ isOpen, onClose, order, onGenerateInvoice }) => {
  if (!isOpen || !order) return null;

  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="section">
          <h3>Customer Details</h3>
          <p><strong>Customer Name:</strong> {order.name}</p>
          <p><strong>Date of Order:</strong> {order.date}</p>
          <p><strong>Contact Number:</strong> {order.contact}</p>
          <p><strong>Email ID:</strong> {order.email || "ramesh@gmail.com"}</p>
          <p><strong>Billing Address:</strong><br />XYZ, ABCDE,<br />Tambaram, Chennai,<br />Tamil Nadu, India<br />600 002</p>
        </div>

        <div className="section">
          <h3>Product Details</h3>
          <table>
            <thead>
              <tr>
                <th>Sl. no.</th>
                <th>Product Code</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Product Name</th>
                <th>Size</th>
                <th>Colour</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>{`0${index + 1}`}</td>
                  <td>{item.code || (index === 0 ? "245" : "103")}</td>
                  <td>{item.category}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.product}</td>
                  <td>{item.size || (index === 0 ? "M" : "34")}</td>
                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        width: 14,
                        height: 14,
                        backgroundColor: item.color || (index === 0 ? "#640000" : "#004C5A"),
                        borderRadius: 4,
                      }}
                    ></span>
                  </td>
                  <td>{item.qty}</td>
                  <td>{`Rs. ${item.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="totals">
            <p><strong>Subtotal:</strong> Rs. {subtotal}</p>
            <p><strong>Gst (10%):</strong> Rs. {gst}</p>
            <p><strong>Total:</strong> Rs. {total}</p>
          </div>

          <div className="invoice-btn-wrapper">
            <button className="invoice-btn" onClick={onGenerateInvoice}>
              Generate Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
