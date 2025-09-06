import React from "react";
import "../styles/InfoPage.css";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const InfoPage = () => {
    const navigate = useNavigate()

    React.useState(()=>{
    api.get('deposit/')
    .then(res => {
      if (res.data.status === 'confirmed'){
        navigate("/home")
      }
    }).catch(err=> {
      console.error(err)
   })
  },[])
  return (
    <div className="info-container">
      <div className="info-card">
        <h1 className="info-title">Welcome to Earnify 🚀</h1>
        <p className="info-text">
          Earn money by simply <strong>watching ads</strong> and inviting
          friends through your referral link. The more referrals you bring, the
          more you earn per ad!
        </p>

        <ul className="info-list">
          <li>✅ Earn ₹1 for every ad you watch.</li>
          <li>✅ Invite friends & increase your earnings per ad.</li>
          <li>✅ Simple and transparent withdrawal system.</li>
        </ul>

        <div className="status-box">
          <h2 className="status-title">Deposit Under Process ⏳</h2>
          <p className="status-text">
            Thank you for making a deposit. Once it is{" "}
            <strong>confirmed by our system</strong>, a{" "}
            <strong>Home button</strong> will appear here. From there, you can
            start your journey to earn money daily.
          </p>
        </div>

        <p className="note-text">
          🔔 Please wait for confirmation. You’ll get notified once everything
          is ready.
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
