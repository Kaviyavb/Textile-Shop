// InvoiceModal.jsx
import React from "react";
import "./InvoiceModal.css";

const InvoiceModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  return (
    <div className="modal-overlay">
      <div className="modal-box invoice">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        {/* Header Row */}
        <div className="invoice-header">
          <div className="invoice-number">
            <strong>Invoice number :</strong> 62786457345
          </div>
          <button className="print-btn">🖨️ Print</button>
        </div>

        {/* Company and Customer Details */}
        <div className="invoice-details">
          <div className="column">
            <p><strong>Company Name</strong><br />Shree Clothings</p>
            <p><strong>Date of Dispatch</strong><br />07/12/2023</p>
            <p><strong>Contact Number</strong><br />+91 99999 88888</p>
            <p><strong>Email ID</strong><br />sutharaniseets@gmail.com</p>
            <p><strong>Company Address</strong><br />XYZ, ABCDE,<br />dgjdgj, Thoothukudi,<br />Tamil Nadu<br />India<br />600 002</p>
          </div>

          <div className="column">
            <p><strong>Customer Name</strong><br />{order.name}</p>
            <p><strong>Date of Order</strong><br />{order.date}</p>
            <p><strong>Contact Number</strong><br />{order.contact}</p>
            <p><strong>Email ID</strong><br />ramesh@gmail.com</p>
            <p><strong>Billing Address</strong><br />XYZ, ABCDE,<br />Tambaram, Chennai,<br />Tamil Nadu<br />India<br />600 002</p>
          </div>
        </div>

        {/* Product Details */}
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
                  <td>{item.code}</td>
                  <td>{item.category}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.product}</td>
                  <td>{item.size || "M"}</td>
                  <td>
                    <div
                      style={{
                        backgroundColor: item.color,
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                        display: "inline-block"
                      }}
                    ></div>
                  </td>
                  <td>{item.qty}</td>
                  <td>Rs. {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="totals">
            <p>Subtotal : Rs. {subtotal}</p>
            <p>Gst (10%) : Rs. {gst}</p>
            <p><strong>Total : Rs. {total}</strong></p>
          </div>
        </div>

        <div className="invoice-btn-wrapper">
          <button className="invoice-btn">Save Invoice</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
