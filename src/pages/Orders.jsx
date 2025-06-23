// Orders.jsx
import React, { useState } from "react";
import "./Orders.css";
import InvoiceModal from "../components/InvoiceModal";
import OrderDetailsModal from "../components/OrderDetailsModal";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const orders = [
    {
      id: 1,
      date: "07/12/2023",
      name: "Ramesh",
      location: "Coimbatore",
      contact: "99999 88888",
      category: "Men",
      subCategory: "T-Shirt",
      product: "Printed",
      qty: 1,
      price: 100,
      items: [
        {
          code: 245,
          category: "Men",
          subCategory: "T-shirt",
          product: "Printed",
          size: "M",
          color: "#801f1f",
          qty: 1,
          price: 100
        },
        {
          code: 103,
          category: "Men",
          subCategory: "Shirt",
          product: "Formals",
          size: "34",
          color: "#126178",
          qty: 1,
          price: 100
        }
      ]
    },
    // Add more orders as needed
  ];

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const handleGenerateInvoice = () => {
    setShowDetailsModal(false);
    setShowInvoiceModal(true);
  };

  return (
    <div className="orders-page">
      <div className="orders-table">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Category</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} onClick={() => handleRowClick(order)}>
                <td>{index + 1}</td>
                <td>{order.date}</td>
                <td>{order.name}</td>
                <td>{order.location}</td>
                <td>{order.contact}</td>
                <td>{order.category}</td>
                <td>{order.product}</td>
                <td>{order.qty}</td>
                <td>Rs. {order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        order={selectedOrder}
        onGenerateInvoice={handleGenerateInvoice}
      />

      {/* Invoice Modal */}
      <InvoiceModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        order={selectedOrder}
      />
    </div>
  );
};

export default Orders;
