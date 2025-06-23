import React, { useState } from "react";
import "./AddExpenseModal.css";

const AddExpenseModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    subCategory: "",
    amount: "",
    status: "Paid",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (
      !formData.date ||
      !formData.category ||
      !formData.subCategory ||
      !formData.amount ||
      !formData.mobile
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSave(formData);
    setFormData({
      date: "",
      category: "",
      subCategory: "",
      amount: "",
      status: "Paid",
      mobile: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="expense-modal-overlay">
      <div className="expense-modal">
        <h3>Add New Expense</h3>

        <div className="expense-field">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="expense-field">
          <label>Category</label>
          <input type="text" name="category" placeholder="e.g. Transport" value={formData.category} onChange={handleChange} />
        </div>

        <div className="expense-field">
          <label>Sub Category</label>
          <input type="text" name="subCategory" placeholder="e.g. Delivery" value={formData.subCategory} onChange={handleChange} />
        </div>

        <div className="expense-field">
          <label>Amount</label>
          <input type="text" name="amount" placeholder="e.g. ₹1000" value={formData.amount} onChange={handleChange} />
        </div>

        <div className="expense-field">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        <div className="expense-field">
          <label>Mobile No</label>
          <input type="text" name="mobile" placeholder="10-digit number" value={formData.mobile} onChange={handleChange} />
        </div>

        <div className="modal-actions">
          <button className="discard-btn" onClick={onClose}>Discard</button>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
