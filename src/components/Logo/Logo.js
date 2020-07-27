import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/Icon.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img className={styles.logoImg} src={Icon} alt="No_img" />
        <p className={styles.logoText}>ShareCodeTogether</p>
      </div>
    </Link>
  );
};

export default Logo;
