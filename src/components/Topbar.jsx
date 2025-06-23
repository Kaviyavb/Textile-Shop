import React from "react";
import "./Topbar.css";
import userImage from "../assets/user.png"; // Your user image

const Topbar = () => {
  return (
    <div className="topbar">

      <div className="topbar-row">
        {/* Logo */}
        <div className="logo">.cloths</div>
        <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search....."
          className="search-bar"
        />
      </div>
        {/* Right Side: Notification + User */}
        <div className="right-section">
          <div className="notification">🔔</div>

          <div className="user-section">
            <img src={userImage} alt="User" className="user-image" />

            <div className="user-info">
              <div className="username">Joseph</div>
              <div className="role">Admin</div>
            </div>

            <div className="dropdown-icon">⌄</div>
          </div>
        </div>
      </div>

      {/* Search Bar (goes below in mobile) */}
      {/* <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search....."
          className="search-bar"
        />
      </div> */}
    </div>
  );
};

export default Topbar;
