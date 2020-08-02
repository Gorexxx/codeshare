import React from "react";
import styles from "./SideBar.module.css";
import cx from "classnames";
const MenuItem = (props) => {
  let path = require("../../assets/" + props.content + ".svg");
  return (
    <div
      onClick={props.action}
      className={cx(styles.sideButton, {
        [styles.focusedItem]: props.isFocused,
      })}
    >
      <img src={path} alt="Item" />
    </div>
  );
};

export default MenuItem;
