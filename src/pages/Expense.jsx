import React, { useState } from "react";
import "./Expense.css";
import AddExpenseModal from "./AddExpenseModal"; // adjust path if needed

const Expense = () => {
  const [expenses, setExpenses] = useState([
    {
      date: "2025-06-15",
      category: "Purchase",
      subCategory: "Mens",
      amount: "₹12,000",
      status: "Paid",
      mobile: "9876543210",
    },
    {
      date: "2025-06-16",
      category: "Transport",
      subCategory: "Delivery",
      amount: "₹2,500",
      status: "Unpaid",
      mobile: "9123456780",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setShowModal(false);
  };

  return (
    <div className="expense-page">
      <div className="expense-header">
        <h2>Expense Report</h2>
        <button className="add-expense-btn" onClick={() => setShowModal(true)}>
          + Add Expense
        </button>
      </div>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.subCategory}</td>
              <td>{item.amount}</td>
              <td className={item.status.toLowerCase()}>{item.status}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddExpenseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddExpense}
      />
    </div>
  );
};

export default Expense;
