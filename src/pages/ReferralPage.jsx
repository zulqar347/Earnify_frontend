import { useState } from "react";
import "../styles/ReferralPage.css";
import React from "react";
import api from "../api";
import { Link } from "react-router-dom";

const ReferralPage = ({ referralCode }) => {
  const [copied, setCopied] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [data, setData] = React.useState('')
  
  React.useEffect(()=>{
    api.get('users/profile/')
    .then((res)=> setData(res.data[0]))
    .catch((error) => console.error(error));
  },[])

  const handleCopy = () => {
    navigator.clipboard.writeText(data.referral_link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://yourapp.com?ref=${referralCode}`,
    twitter: `https://twitter.com/intent/tweet?text=Join%20me%20on%20this%20app!%20Use%20my%20code%20${referralCode}%20https://yourapp.com`,
    whatsapp: `https://api.whatsapp.com/send?text=Join%20me%20on%20this%20app!%20Use%20my%20code%20${referralCode}%20https://yourapp.com`,
  };

  return (
    <div className="referral-container">
      <div className="referral-card">
        <h2 className="referral-title">Invite Friends & Earn!</h2>
        <p className="referral-subtitle">
          Share your unique referral link and earn rewards every time someone joins through your code. It’s easy, fast, and rewarding!
        </p>

        <div className="referral-input-box">
          <input
            type="text"
            value={referralCode}
            placeholder={data.referral_link}
            readOnly
            className="referral-input"
          />
          <button className="btn-copy" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            className="btn-share"
            onClick={() => setShowShareOptions(!showShareOptions)}
          >
            Share
          </button>
        </div>

        {showShareOptions && (
          <div className="share-options">
            <Link
              to={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn facebook"
            >
              F
            </Link>
            <Link
              to={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn twitter"
            >
              T
            </Link>
            <Link
              to={shareUrls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn whatsapp"
            >
              W
            </Link>
          </div>
        )}

        <p className="referral-note">
          The more you share, the more you earn! Start spreading your referral link today and turn your network into rewards.
        </p>
      </div>
    </div>
  );
};

export default ReferralPage;
