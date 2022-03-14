import React from "react";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IntroBlock from "../../components/IntroBlock";
import Locations from "../../components/Locations";
import News from "../../components/News";
import styles from "./HomeScreen.module.scss";
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      {/* <Header /> */}
      <IntroBlock />
      <div className={styles.topContent}>
        <News />
        <Blogs />
      </div>
      <Locations />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeScreen;
