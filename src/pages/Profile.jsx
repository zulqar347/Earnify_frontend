import React from "react";
import "../styles/Profile.css";
import api from "../api";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [data, setData] = React.useState('')
  React.useEffect(()=>{
    api.get('users/profile/')
    .then((res)=> setData(res.data[0]))
    .catch((error) => console.error(error));
  },[])
  console.log(data)

   const handleCopy = () => {
    const text = document.querySelector(".referral-code")?.innerText;
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log("Copied:", text);
          // optional: show UI feedback
          alert("Referral link copied!");
        })
        .catch(err => console.error("Failed to copy:", err));
    }
};


  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-pic">👤</div>
        <h2 className="username">{data.username}</h2>
        <p className="email">{data.email}</p>

        <div className="info-box">
          <label>Referral Link:</label>
          <div className="referral-box">
            <span className="referral-code">{data.referral_link}</span>
            <button className="copy-btn" onClick={handleCopy}>Copy</button>
          </div>
        </div>

        <div className="info-box">
          <label>Balance:</label>
          <p className="earnings">{data.balance}</p>
        </div>

        {/* <button className="edit-btn">Edit Profile</button> */}
      </div>
    </div>
  );
}

export default ProfilePage;
