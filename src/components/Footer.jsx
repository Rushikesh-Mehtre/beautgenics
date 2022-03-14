import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>All copyrights reserved | Beautgenics &copy; 2022</p>
      <div className={styles.icons}>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillYoutube />
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default Footer;
