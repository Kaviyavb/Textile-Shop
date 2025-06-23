// Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaUpload,
  FaBoxOpen,
  FaTruckMoving,
  FaTshirt,
  FaMoneyCheckAlt,
  FaStar,
  FaBullhorn,
  FaSignOutAlt,
  FaBars
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-links">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            <FaClipboardList className="icon" /> Dashboard
          </NavLink>

          <NavLink to="/upload" className={({ isActive }) => isActive ? "active" : ""}>
            <FaUpload className="icon" /> Upload Product
          </NavLink>

          <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>
            <FaBoxOpen className="icon" /> Orders
          </NavLink>

          <NavLink to="/delivery" className={({ isActive }) => isActive ? "active" : ""}>
            <FaTruckMoving className="icon" /> Delivery Tracking
          </NavLink>

          <NavLink to="/stocks" className={({ isActive }) => isActive ? "active" : ""}>
            <FaTshirt className="icon" /> Stocks
          </NavLink>

          <NavLink to="/expense" className={({ isActive }) => isActive ? "active" : ""}>
            <FaMoneyCheckAlt className="icon" /> Expense
          </NavLink>

          <NavLink to="/reviews" className={({ isActive }) => isActive ? "active" : ""}>
            <FaStar className="icon" /> Reviews & Ratings
          </NavLink>

          <NavLink to="/ads" className={({ isActive }) => isActive ? "active" : ""}>
            <FaBullhorn className="icon" /> Advertisement
          </NavLink>

          <div className="logout">
            <FaSignOutAlt className="icon" /> Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
