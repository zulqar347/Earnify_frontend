import React, { useState } from "react";
import "../styles/SideBar.css"

const SidebarNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Earnify</h2>
        <ul>
          <li><a href="/home">Dashboard</a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/ads">Ads</a></li>
          <li><a href="/referral">Referral</a></li>
          <li><a href="/deposit">Deposit</a></li>
        </ul>
      </aside>

      {/* Mobile Topbar */}
      <div className="mobile-topbar">
        <h2 className="logo">MyApp</h2>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          <li><a href="/home">Dashboard</a></li>
          <li><a href="/earnings">Earnings</a></li>
          <li><a href="/ads">Ads</a></li>
          <li><a href="/referral">Referral</a></li>
          <li><a href="/deposit">Deposit</a></li>
        </ul>
      )}
    </div>
  );
};

export default SidebarNavbar;
