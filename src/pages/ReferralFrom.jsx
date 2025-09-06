import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ReferralForm.css";
import { Link } from "react-router-dom";

function ReferralSignup() {
  const location = useLocation();
  const [referralCode, setReferralCode] = useState("");

  // Auto-fill referral code from URL (?ref=XYZ123)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("ref");
    if (code) {
      setReferralCode(code);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up with referral code: ${referralCode}`);
    // TODO: send data to backend
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h1 className="signup-title">Create Your Account</h1>
        <p className="signup-subtitle">
          Watch ads, earn money, and boost your rewards with referrals.  
          Your referral code is applied automatically if available.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Referral Code</label>
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              placeholder="Referral code"
            />
          </div>

          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default ReferralSignup;
