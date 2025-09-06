import React from "react";
import "../styles/Ads.css";
import api from '../api'
import VideoAd from "./WatchAds";
import { Link } from "react-router-dom";

const demoAds = [
  {
    id: 1,
    title: "Earn $50 Online Today!",
    description: "Click here to discover amazing online earning opportunities.",
    link: "https://example.com/ad1",
    image: "https://via.placeholder.com/300x150?text=Ad+1",
  },
  {
    id: 2,
    title: "Get Your Free E-Book",
    description: "Learn the secrets of online income with this free guide.",
    link: "https://example.com/ad2",
    image: "https://via.placeholder.com/300x150?text=Ad+2",
  },
  {
    id: 3,
    title: "Join Our Survey Platform",
    description: "Complete surveys and earn money effortlessly!",
    link: "https://example.com/ad3",
    image: "https://via.placeholder.com/300x150?text=Ad+3",
  },
];

const AdsPage = () => {
  const [adsRemaining, setAdsRemaining] = React.useState('')

  // React.useEffect(()=>{
  //   api.get('')
  // })
 
  return (
    <div className="ads-container">
      <h2 className="ads-title">Available Ads</h2>
      <p className="ads-subtitle">
        Click on any ad below to earn rewards. Every click counts!
      </p>
      
      <div className="ads-grid">
        {demoAds.map((ad) => (
          <Link
            key={ad.id}
            to='/watch-ad'
            target="_blank"
            rel="noopener noreferrer"
            className="ad-card"
          >
            <img src={ad.image} alt={ad.title} className="ad-image" />
            <div className="ad-content">
              <h3 className="ad-title">{ad.title}</h3>
              <p className="ad-description">{ad.description}</p>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default AdsPage;
