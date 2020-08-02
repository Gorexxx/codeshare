import React, { useState } from "react";
import styles from "./SideBar.module.css";
import MenuItem from "./MenuItem";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");
  const ItemList = [
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
                <select defaultValue="default">
                  <option value="default">Default</option>
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div className={styles.option}>
                <p>More coming soon</p>
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
                  Your progress is saved every time you stop writing.
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
