import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [linkUrl, setLinkUrl] = useState("");
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.enterRoom}>
        <input
          type="text"
          placeholder="Enter room name..."
          value={linkUrl}
          onChange={(event) => {
            setLinkUrl(event.target.value);
          }}
        />
        <Link to={"/" + linkUrl} onClick={() => setLinkUrl('')}>JOIN</Link>
      </div>
    </div>
  );
};

export default NavBar;
