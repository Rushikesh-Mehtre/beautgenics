import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import logoDesign from "../assets/images/logoDesign.png";
import LogoutModal from "./LogoutModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [menusShown, setMenusShown] = useState(true);
  const btnClickHandler = () => {
    if (mql.matches) {
      setMenusShown(!menusShown);
    }
  };
  const mql = window.matchMedia("(max-width: 600px)");
  useEffect(() => {
    if (mql.matches) {
      setMenusShown(false);
    }
  }, [mql.matches]);

  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <NavLink
          to="/home"
          onClick={() => {
            setMenusShown(false);
          }}
        >
          <img src={logoDesign} alt="" className={styles.logo} />
        </NavLink>
        {menusShown ? (
          <ImCross className={styles.crossMenu} onClick={btnClickHandler} />
        ) : (
          <GiHamburgerMenu
            className={styles.hamMenu}
            onClick={btnClickHandler}
          />
        )}
      </div>
      {menusShown && (
        <div className={styles.menuItems}>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={(navData) => (navData.isActive ? styles.active : "")}
                onClick={btnClickHandler}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={(navData) => (navData.isActive ? styles.active : "")}
                onClick={btnClickHandler}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(navData) => (navData.isActive ? styles.active : "")}
                onClick={btnClickHandler}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={(navData) => (navData.isActive ? styles.active : "")}
                onClick={btnClickHandler}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <LogoutModal />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
