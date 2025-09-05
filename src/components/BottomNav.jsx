import React from "react";
import "../styles/BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="/home" className="nav-item">💰 Dashboard</a>
      <a href="/home" className="nav-item">🏠 Home</a>
      <a href="/ads" className="nav-item">📺 Ads</a>
      <a href="/referral" className="nav-item">👥 Referral</a>
    </nav>
  );
}

export default BottomNav;
