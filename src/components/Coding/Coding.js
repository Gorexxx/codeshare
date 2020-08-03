import React, { useState, useEffect, useRef } from "react";
import styles from "./Coding.module.css";
import SideBar from "../SideBar/SideBar";
import { useLocation } from "react-router-dom";

const Coding = () => {
  const roomName = useLocation().pathname.substr(1);
  let timer = useRef();

  const [roomData, setRoomData] = useState({
    version: 0,
    value: "",
  });

  //Fetch data from the server and check for updates - terrible solution but only temporary
  useEffect(() => {
    fetch(`https://sharecodetogether.firebaseio.com/rooms/${roomName}.json`)
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          setRoomData((roomData) => {
            return { ...roomData, value: data.value };
          });
        }
      });
  }, [roomName]);

  //Save data to server
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetch(`https://sharecodetogether.firebaseio.com/rooms/${roomName}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      });
    }, 500);
  }, [roomData, roomName]);

  return (
    <div className={styles.code}>
      <textarea
        value={roomData.value}
        className={styles.codeText}
        placeholder="Write your code here. People in the same room can see code as you type it!"
        onChange={(event) => {
          setRoomData({
            ...roomData,
            value: event.target.value,
          });
        }}
      ></textarea>
      <SideBar />
    </div>
  );
};

export default Coding;
