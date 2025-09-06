import React from "react";
import "../styles/Home.css";
import api from "../api";
import { useNavigate } from "react-router-dom";




export default function Home() {
  const navigate = useNavigate()
  const [data, setData] = React.useState('')

   React.useState(()=>{
    api.get('deposit/')
    .then(res => {
      if (res.data.status === 'pending'){
        navigate("/infopage")
      }
    }).catch(err=> {
      console.error(err)
      navigate("/deposit")
   })
  },[])
  
  React.useEffect(()=>{
    api.get('users/profile/')
    .then((res)=> console.log(res.data[0]))
    .catch((error) => console.error(error));
  },[])

  return (
    <div className="home-container">
      <h2 className="welcome-title">Welcome Back 👋</h2>

      {/* Earnings summary */}
      <div className="earnings-summary">
        <h3>Total Earnings</h3>
        {data !== "" && <p>{data.balance}</p>}
      </div>

      {/* Quick links */}
      <div className="quick-links-container">
        <QuickLink 
          title="📺 Watch Ads" 
          description="Earn money by watching ads." 
          onClick={() => navigate('/ads')} 
        />
        <QuickLink 
          title="🤝 Referral Program" 
          description="Invite friends & earn rewards." 
          onClick={() => navigate("/referral")} 
        />
        <QuickLink 
          title="💳 Withdraw" 
          description="Cash out your earnings easily." 
          onClick={() => navigate('/withdrawl')} 
        />
        <QuickLink 
          title="👤 My Profile" 
          description="View and update your account." 
          onClick={() => navigate('/profile')} 
        />
      </div>
    </div>
  );
}


function QuickLink({ title, description, onClick }) {
  return (
    <div className="quick-link" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}