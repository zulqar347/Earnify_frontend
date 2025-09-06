import React from "react";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

function EarningsCard({ title, amount }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>${amount}</p>
    </div>
  );
}

export default function Dashboard() {
  
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">My Dashboard</h2>

      <div className="cards-container">
        <EarningsCard title="Referral Earnings" amount="120.00" />
        <EarningsCard title="Ads Earnings" amount="45.50" />
        <EarningsCard title="Total Earnings" amount="165.50" />
      </div>

      <div className="coming-soon">
        <p>📌 More features coming soon...</p>
      </div>
    </div>
  );
}
