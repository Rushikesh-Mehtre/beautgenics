import React, { useEffect } from "react";
import styles from "./ProfilePage.module.scss";
const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.profilePage}>
      <div className={styles.profile}>
        <p className={styles.head}>To be updated soon...</p>
      </div>
    </div>
  );
};

export default ProfilePage;
