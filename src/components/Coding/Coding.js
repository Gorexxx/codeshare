import React from "react";
import styles from "./Coding.module.css";
import SideBar from "../SideBar/SideBar";
const Coding = () => {
  return (
    <div className={styles.code}>
      <textarea
        className={styles.codeText}
        placeholder="Write your code here. People in the same room can see code as you type it!"
      ></textarea>
      <SideBar />
    </div>
  );
};

export default Coding;
