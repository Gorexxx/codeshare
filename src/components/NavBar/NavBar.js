import React from "react";
import styles from './NavBar.module.css'
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <div>
      <Logo />
      <input type='text' placeholder='Enter room name...'/>
      <button>JOIN</button>
    </div>
  );
};

export default NavBar;
