import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-logo">💸 Earnify</h3>
        <p className="footer-tagline">Turn your time into earnings</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Earnings</Link>
        <Link to="/ads">Ads</Link>
        <Link to="/referral">Referral</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Earnify. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
