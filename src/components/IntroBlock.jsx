import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/IntroBlock.module.scss";

const IntroBlock = () => {
  return (
    <div className={styles.introBlock}>
      <div className={styles.block1}>
        {" "}
        <p className={styles.head}>
          Hey{" "}
          <span style={{ color: "tomato", fontWeight: "500" }}>
            {" "}
            Rushikesh !
          </span>{" "}
          Welcome to Beautgenics admin portal
        </p>
        <p className={styles.subhead}>Lets manage your sales track ! </p>
        <Link to="/dashboard" className={styles.link}>
          Go to dashboard
        </Link>
      </div>
      <div className={styles.block2}>
        <p className={styles.head}>Want to manage your profile ?</p>{" "}
        <Link to="/profile">upadate profile</Link>
      </div>
      <div className={styles.block3}>
        <p className={styles.head}>New to application ? read FAQs</p>
        <Link to="/faqs">go to FAQs</Link>
      </div>
      <div className={styles.block4}>
        <p className={styles.head}>Have new ideas ? let us know</p>
        <Link to="/contact">Submit your ideas</Link>
      </div>
    </div>
  );
};

export default IntroBlock;
