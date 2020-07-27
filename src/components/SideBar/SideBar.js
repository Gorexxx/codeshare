import React from "react";
import styles from "./SideBar.module.css";
import addIcon from "../../assets/add.svg";
import settingsIcon from "../../assets/settings.svg";
import infoIcon from "../../assets/info.svg";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideButton}>
        <img src={addIcon} alt="Add" />
      </div>
      <div className={styles.sideButton}>
        <img src={settingsIcon} alt="Settings" />
      </div>
      <div className={styles.sideButton}>
        <img src={infoIcon} alt="Info" />
      </div>
    </div>
  );
};

export default SideBar;
