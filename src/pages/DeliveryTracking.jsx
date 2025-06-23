import React, { useState } from "react";
import TrackingDetailsModal from "../components/TrackingDetailsModal"; // adjust path if needed
import "../pages/DeliveryTracking.css";

const DeliveryTracking = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const deliveries = [
    {
      invoiceNumber: "INV001",
      customerName: "Ramesh",
      location: "Chennai",
      contact: "9876543210",
      product: "Kurti",
      price: "₹1,200",
    },
    {
      invoiceNumber: "INV002",
      customerName: "Divya",
      location: "Erode",
      contact: "9845671234",
      product: "Shirt",
      price: "₹999",
    },
  ];

  const handleRowClick = (delivery) => {
    setSelectedDelivery(delivery);
    setShowModal(true);
  };

  return (
    <div className="delivery-tracking-page">
      <h2>Delivery Tracking</h2>
      <table className="delivery-table">
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Name</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Product</th>
            <th>Price</th>
            <th>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery, index) => (
            <tr key={index} onClick={() => handleRowClick(delivery)}>
              <td>{delivery.invoiceNumber}</td>
              <td>{delivery.customerName}</td>
              <td>{delivery.location}</td>
              <td>{delivery.contact}</td>
              <td>{delivery.product}</td>
              <td>{delivery.price}</td>
              <td>
                <button className="track-btn">Enter Track ID</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Integration */}
      <TrackingDetailsModal
        isOpen={showModal}
        order={selectedDelivery}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default DeliveryTracking;
