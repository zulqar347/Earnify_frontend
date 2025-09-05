import React, { useState, useEffect } from "react";
import "../styles/Signup.css";
import api from "../api";
import { useNavigate, useLocation } from 'react-router-dom';

const SignupForm = () => {
  const [Data, setData] = useState('');
  const [referralCode, setReferralCode] = useState(''); // 👈 state for ref code
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-fill referral code from URL (?ref=XYZ123)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("ref");
    if (code) {
      setReferralCode(code);
    }
  }, [location.search]);

  function handleData(formData) {
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get("confirmPassword");
    const referred_by = formData.get('referredBy');

    if (password === confirmPassword) {
      try {
        api.post('users/profile/', {username, email, password, referred_by})
          .then(res => {
            console.log(res.data),
            navigate("/login")
          })
          .catch(err => {
            console.error(err)
            alert("Try Another Username Or Email!")
          });
      }
      catch (err) { console.error(err) }
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" action={handleData}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />

        <input
          type="text"
          name="referredBy"
          placeholder="Referral Code (Optional)"
          value={referralCode}  // 👈 auto-filled
          onChange={(e) => setReferralCode(e.target.value)} // still editable
        />

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
