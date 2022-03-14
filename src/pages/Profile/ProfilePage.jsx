import React from "react";
import Header from "../../components/Header";
import styles from "./ProfilePage.module.scss";
import user from "../../assets/images/user.jpg";
const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      {/* <Header /> */}
      <div className={styles.profile}>
        <p className={styles.head}>To be updated soon...</p>
      </div>
    </div>
  );
};

export default ProfilePage;
