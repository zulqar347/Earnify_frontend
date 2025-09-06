import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Earnify</h1>
        <p className="landing-tagline">
          Watch ads. Invite friends. Earn money — it's that simple!
        </p>

        <div className="landing-info">
          <p>
            💰 <strong>Earn 1 rupee for every ad you watch.</strong>
          </p>
          <p>
            👥 <strong>Boost your earnings!</strong> As your referral count
            increases, the money you earn per ad also goes up.
          </p>
          <p>
            🚀 Start building your income today by watching ads and sharing your
            referral link with friends.
          </p>
        </div>

        <div className="landing-buttons">
          <Link to={"signup"} className="btn signup-btn">
            Sign Up
          </Link>
          <Link to="/login" className="btn login-btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
