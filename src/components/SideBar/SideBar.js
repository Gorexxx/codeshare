import React, { useState } from "react";
import styles from "./SideBar.module.css";
import MenuItem from "./MenuItem";

const SideBar = (props) => {
  const schemes = {
    dark: {
      text: "#ffffff",
      background: "#222222",
    },
    light: {
      text: "#111111",
      background: "#cfcfcf",
    },
    blue: {
      text: "#54dce8",
      background: "#002a2e",
    },
    pink: {
      text: "#f500ed",
      background: "#210020",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");
  const ItemList = [
    { value: "save", action: () => props.save() },
    { value: "settings", action: (x) => openClose(x) },
    { value: "info", action: (x) => openClose(x) },
  ];

  function openClose(current) {
    setCurrentTab(current);
    if (currentTab === current || currentTab === "" || !isOpen) {
      setIsOpen(!isOpen);
      if (isOpen) {
        setCurrentTab("");
      }
    }
  }

  function changeColorScheme(newColor){
    props.changeColor(schemes[newColor])
  }

  return (
    <div className={isOpen ? styles.sideBarOpen : styles.sideBarClosed}>
      <div className={styles.sideBar}>
        {ItemList.map((item, index) => {
          return (
            <MenuItem
              isFocused={item.value === currentTab}
              content={item.value}
              key={index}
              action={() => item.action(item.value)}
            />
          );
        })}
      </div>
      {isOpen ? (
        <div className={styles.content}>
          {currentTab === "settings" ? (
            <div>
              <h2>Settings</h2>
              <div className={styles.option}>
                <p>Theme</p>
                <select defaultValue="default" onChange={(event) => changeColorScheme(event.target.value)}>
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="blue">Blue</option>
                  <option value="pink">Pink</option>
                </select>
              </div>

              
            </div>
          ) : (
            <div>
              <h2>Info</h2>
              <div className={styles.option}>
                <p>
                  <span role="img" aria-label="ok">
                    👌
                  </span>
                  This app enables people to share code in real time. Anyone who
                  visits the same URL can see changes and edit text.
                </p>
              </div>
              <div className={styles.option}>
                <p>
                  <span role="img" aria-label="save">
                    💾
                  </span>
                  You can save your progress by clicking on save icon. Next time
                  you visit this URL your text will still be there!
                </p>
              </div>
              <div className={styles.option}>
                <p>
                  <span role="img" aria-label="clock">
                    🕞
                  </span>
                  Your room data will be automatically deleted after 24 hours
                  without any change. (coming soon)
                </p>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SideBar;
