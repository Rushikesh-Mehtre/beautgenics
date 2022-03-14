import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Performence.module.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
const Performence = () => {
  const showMethodHandler = () => {
    Toastify({
      text: "To be updated soon.",
      duration: 5000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "center",
      background: "red",
      stopOnFocus: true,
    }).showToast();
  };
  return (
    <div className={styles.performence}>
      <div className={styles.header}>
        <p className={styles.head}>Your Performence so far</p>
        <Link to="#" onClick={showMethodHandler}>
          How its measured ?{" "}
        </Link>
      </div>
      <div className={styles.performenceNumbers}>
        <label htmlFor="">Customer rating</label>
        <div className={styles.progress}>
          <div className={styles.bar1}>3.5</div>
        </div>{" "}
        <label htmlFor="">Management rating</label>
        <div className={styles.progress}>
          <div className={styles.bar2}>4</div>
        </div>{" "}
        <label htmlFor="">Ranking among other employees</label>
        <div className={styles.progress}>
          <div className={styles.bar3}>4.2</div>
        </div>{" "}
        <label htmlFor="">Overall Performence</label>
        <div className={styles.progress}>
          <div className={styles.bar4}>3.75</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Performence;
