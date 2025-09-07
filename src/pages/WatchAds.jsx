import { useState, useEffect } from "react";
import "../styles/WatchAds.css"; // import css file
import { useNavigate } from "react-router-dom"
import api from "../api";
import { Link } from "react-router-dom";

export default function VideoAd(props) {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(30);
  const [completed, setCompleted] = useState(false);
  const [play, setPlay] = useState(false)
  
  
  function addBalance(){
    api.post('watch-ad/', {})
    .then(res=> console.log(res.data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCompleted(true);
    }
  }, [timeLeft]);

  return (
    <div className="video-ad-container" onClick={()=> navigate("/ads")}>
      <iframe
        // width="560"
        // height="315"
        // src="https://youtube.com/embed/6w_fbVcBG0M"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="video-frame"
      />
       <div id="container-df3cb164dcd32c13dceaaa75535110ce"></div>
      <div className="status-section">
        {completed ? (
          <button className="reward-btn" onClick={addBalance} >Claim Reward</button>
        ) : (
          <p className="timer-text">
            Watch for {timeLeft} seconds to unlock reward...
          </p>
        )}
      </div>
    </div>
  );
}
