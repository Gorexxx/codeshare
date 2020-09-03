import React, { Component } from "react";
import styles from "./Coding.module.css";
import SideBar from "../SideBar/SideBar";
import openSocket from "socket.io-client";

class Coding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      socket: openSocket("https://codeshare-server.herokuapp.com/"),
      colorScheme: {
        text: "#ffffff",
        background: "#222222",
      }
    };
  }

  componentDidMount() {
    let that = this;
    let roomName = window.location.href.substring(37);
    //let roomName = window.location.href.substring(22);
    let socket = this.state.socket;
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

  componentWillUnmount() {
    this.state.socket.disconnect();
  }

  render() {
    return (
      <div className={styles.code}>
        <textarea
          value={this.state.value}
          className={styles.codeText}
          placeholder="WARNING! You might experience an initial lag caused by a server.&#10;Write your code here. People in the same room can see code as you type it!"
          onChange={(event) => {
            this.setState({
              value: event.target.value,
            });
            this.send(event.target.value);
          }}
          style={{color: this.state.colorScheme.text, backgroundColor: this.state.colorScheme.background}}
        ></textarea>
        <SideBar
          save={() => {
            this.state.value === ""
              ? console.log("You can not save an empty room!")
              : this.reqSave();
          }}
          changeColor={(newColor) => {
            this.setState({colorScheme: newColor})
          }}
        />
      </div>
    );
  }
}

export default Coding;
