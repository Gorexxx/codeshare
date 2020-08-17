import React, { Component } from "react";
import styles from "./Coding.module.css";
import SideBar from "../SideBar/SideBar";
import openSocket from "socket.io-client";

class Coding extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidMount() {
    let that = this;
    let roomName = window.location.href.substring(37);
    const socket = openSocket("https://codeshare-server.herokuapp.com/");
    socket.on("connect", function () {
      socket.emit("room", roomName);
    });
    socket.on("message", function (data) {
      if (that.state.value !== data) {
        that.setState({ value: data });
      }
    });
    socket.on("request-data", function () {
      socket.emit("requested-data", roomName, that.state.value);
    });
    this.send = (value) => {
      socket.emit("change", roomName, value);
    };

    this.reqSave = () => {
      socket.emit("request-save", roomName, this.state.value);
    };
  }

  render() {
    return (
      <div className={styles.code}>
        <textarea
          value={this.state.value}
          className={styles.codeText}
          placeholder="Write your code here. People in the same room can see code as you type it!"
          onChange={(event) => {
            this.setState({
              value: event.target.value,
            });
            this.send(event.target.value);
          }}
        ></textarea>
        <SideBar
          save={() => {
            this.state.value === ""
              ? console.log("You can not save an empty room!")
              : this.reqSave();
          }}
        />
      </div>
    );
  }
}

export default Coding;
