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
          <li><Link to="/home">Dashboard</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/ads">Ads</Link></li>
          <li><Link to="/referral">Referral</Link></li>
          <li><Link to="/deposit">Deposit</Link></li>
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
          <li><Link to="/home">Dashboard</Link></li>
          <li><Link to="/earnings">Earnings</Link></li>
          <li><Link to="/ads">Ads</Link></li>
          <li><Link to="/referral">Referral</Link></li>
          <li><Link to="/deposit">Deposit</Link></li>
        </ul>
      )}
    </div>
  );
};

export default SidebarNavbar;
