import React from "react";
import styles from "../styles/Locations.module.scss";

import { GrLocationPin } from "react-icons/gr";

const Locations = () => {
  return (
    <div className={styles.locations}>
      <p className={styles.head}>Where we deliver</p>
      <div className={styles.numbers}>
        <p>
          <span className={styles.number}>5+</span>
          <span className={styles.text}>countries</span>
        </p>
        <p>
          <span className={styles.number}>25+</span>
          <span className={styles.text}>cities</span>
        </p>
        <p>
          <span className={styles.number}>50+</span>
          <span className={styles.text}>towns</span>
        </p>
      </div>
      <p className={styles.head}>12 hours delivery available in </p>
      <div className={styles.cities}>
        <p>
          <GrLocationPin className={styles.icon} />
          <span className={styles.text}>Mumbai</span>
        </p>
        <p>
          <GrLocationPin className={styles.icon} />
          <span className={styles.text}>Delhi</span>
        </p>
        <p>
          <GrLocationPin className={styles.icon} />
          <span className={styles.text}>Jaipur</span>
        </p>
        <p>
          <GrLocationPin className={styles.icon} />
          <span className={styles.text}>Banglore</span>
        </p>
        <p>
          <GrLocationPin className={styles.icon} />
          <span className={styles.text}>Chennai</span>
        </p>
        <p>
          <GrLocationPin className={styles.icon} />
          <span className={styles.text}>Pune</span>
        </p>
      </div>
    </div>
  );
};

export default Locations;
