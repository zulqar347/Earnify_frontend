import SignupForm from "./pages/Signup"
import LoginForm from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import SidebarNavbar from "./components/SideBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import "./styles/App.css"
import BottomNav from "./components/BottomNav"
import ProfilePage from "./pages/Profile"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReferralPage from "./pages/ReferralPage"
import AdsPage from "./pages/Ads"
import VideoAd from "./pages/WatchAds"
import WithdrawalPage from "./pages/WithdrawlPage"
import LandingPage from "./pages/LandingPage"
import DepositPage from "./pages/DepositPage"
import ReferralForm from "./pages/ReferralFrom"
import InfoPage from "./pages/InfoPage"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/deposit" element={<DepositPage/>}/>
        <Route path="/home" element={<div><SidebarNavbar/><Home/><BottomNav/></div>}/>
        <Route path="/dashboard" element={<div><SidebarNavbar/><Dashboard/><BottomNav/></div>}/>
        <Route path="/login" element={<div><LoginForm/></div>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/profile" element={<div><ProfilePage/><BottomNav/></div>}/>
        <Route path="/referral" element={<div><ReferralPage/><BottomNav/></div>}/>
        <Route path="/ads" element={<div><AdsPage/><BottomNav/></div>}/>
        <Route path="/watch-ad" element={<VideoAd/>}/>
        <Route path="/withdrawl" element={<div><WithdrawalPage/><BottomNav/></div>}/>
        <Route path="/infopage" element={<InfoPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
