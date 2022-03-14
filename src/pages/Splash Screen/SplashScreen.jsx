import React, { useState } from "react";
import styles from "./SplashScreen.module.scss";
import logo from "../../assets/images/logo.png";
import LoginModal from "../../components/LoginModal";
import LoadingOverlay from "react-loading-overlay-ts";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const spinnerHandler = (value) => {
    setActive(value);
    setTimeout(() => {
      setActive(false);
      navigate("/home");
    }, 2000);
  };
  return (
    <LoadingOverlay active={isActive} spinner text="Logging in...">
      <div style={{ height: "100vh" }}>
        <div className={styles.splashScreen}>
          <img src={logo} alt="" className={styles.logoImg} />
          <p className={styles.head}>Welcome Sales respresentives</p>
          <LoginModal onclick={spinnerHandler} />
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default SplashScreen;
