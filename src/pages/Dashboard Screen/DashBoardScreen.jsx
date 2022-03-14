import React from "react";
import Cards from "../../components/Cards";
import Orders from "../../components/Orders";
import Performence from "../../components/Performence";
import SalesAnalysis from "../../components/SalesAnalysis";
import Target from "../../components/Target";
import styles from "./DashBoardScreen.module.scss";
const DashBoardScreen = () => {
  return (
    <div className={styles.dashBoardScreen}>
      <Cards />
      <div className={styles.topContent}>
        <SalesAnalysis />
        <Target />
      </div>
      <div className={styles.midContent}>
        <Orders />
        <Performence />
      </div>
    </div>
  );
};

export default DashBoardScreen;
