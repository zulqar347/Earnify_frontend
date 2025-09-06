import React from "react";
import "../styles/BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/home" className="nav-item">💰 Dashboard</Link>
      <Link to="/home" className="nav-item">🏠 Home</Link>
      <Link to="/ads" className="nav-item">📺 Ads</Link>
      <Link to="/referral" className="nav-item">👥 Referral</Link>
    </nav>
  );
}

export default BottomNav;
