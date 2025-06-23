import React, { useState } from "react";
import "./TrackingDetailsModal.css"; // Reuse the same CSS file

const TrackingDetailsModal = ({ isOpen, onClose, order }) => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [deliveryPartner, setDeliveryPartner] = useState("");
  const [trackingLink, setTrackingLink] = useState("");

  if (!isOpen || !order) return null;

  const handleSave = () => {
    const updatedTracking = {
      invoiceNumber: order.invoiceNumber,
      customerName: order.customerName,
      trackingNumber,
      deliveryPartner,
      trackingLink,
    };

    console.log("Saved tracking info:", updatedTracking);
    onClose(); // close modal after save
  };

  return (
    <div className="tracking-modal-overlay">
      <div className="tracking-modal">
        <h2>Tracking Details</h2>

        <div className="tracking-field">
          <label>Invoice Number:</label>
          <span>{order.invoiceNumber}</span>
        </div>

        <div className="tracking-field">
          <label>Customer Name:</label>
          <span>{order.customerName}</span>
        </div>

        <div className="tracking-field">
          <label>Tracking Number:</label>
          <input
            type="text"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </div>

        <div className="tracking-field">
          <label>Delivery Partner:</label>
          <input
            type="text"
            placeholder="E.g., DTDC, Delhivery..."
            value={deliveryPartner}
            onChange={(e) => setDeliveryPartner(e.target.value)}
          />
        </div>

        <div className="tracking-field">
          <label>Tracking Link:</label>
          <input
            type="text"
            placeholder="https://..."
            value={trackingLink}
            onChange={(e) => setTrackingLink(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button className="discard-btn" onClick={onClose}>
            Discard
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetailsModal;
