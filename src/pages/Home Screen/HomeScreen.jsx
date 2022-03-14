import React from "react";
import Blogs from "../../components/Blogs";
import IntroBlock from "../../components/IntroBlock";
import Locations from "../../components/Locations";
import News from "../../components/News";
import styles from "./HomeScreen.module.scss";
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <IntroBlock />
      <div className={styles.topContent}>
        <News />
        <Blogs />
      </div>
      <Locations />
    </div>
  );
};

export default HomeScreen;
