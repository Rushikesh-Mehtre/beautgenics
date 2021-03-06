import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import SplashScreen from "./pages/Splash Screen/SplashScreen";
import HomeScreen from "./pages/Home Screen/HomeScreen";
import DashBoardScreen from "./pages/Dashboard Screen/DashBoardScreen";
import AboutPage from "./pages/About/AboutPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import FAQs from "./pages/FAQs/FAQs";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingOverlay from "react-loading-overlay-ts";
import { useState } from "react";

function App() {
  let location = useLocation();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const logOutHandler = (value) => {
    console.log(value);
    setActive(value);
    setTimeout(() => {
      setActive(false);
      navigate("/");
    }, 2000);
  };
  return (
    <div>
      <LoadingOverlay active={isActive} spinner text="Logging out...">
        <div style={{ height: "100vh" }}>
          {location.pathname === "/" ? null : (
            <Header onClick={logOutHandler} />
          )}
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/dashboard" element={<DashBoardScreen />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {location.pathname === "/" ? null : <Footer />}
        </div>
      </LoadingOverlay>
    </div>
  );
}

export default App;
