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
        <a href="/">Home</a>
        <a href="/dashboard">Earnings</a>
        <a href="/ads">Ads</a>
        <a href="/referral">Referral</a>
        <a href="/profile">Profile</a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Earnify. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
