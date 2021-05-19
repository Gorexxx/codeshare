import React from "react";
import styles from "./Coding.module.css";
import SideBar from "../SideBar/SideBar";
import openSocket from "socket.io-client";

class Coding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      socket: openSocket("https://codeshare-server.herokuapp.com/"),
      colorScheme: {
        text: "#ffffff",
        background: "#222222",
      },
      placeholder:
        "Checking if room has any information saved on the server...\n This might take a while if it is the first time opening this app because of slow server speed",
    };
  }

  componentDidMount() {
    let that = this;
    let roomName = window.location.href.split("/").slice(-1);
    //Handle sockets on mount
    let socket = this.state.socket;
    socket.on("connect", function () {
      socket.emit("room", roomName);
      that.setState({ placeholder: 'You can start writing your code!' });
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
          placeholder={this.state.placeholder}
          onChange={(event) => {
            this.setState({
              value: event.target.value,
            });
            this.send(event.target.value);
          }}
          style={{
            color: this.state.colorScheme.text,
            backgroundColor: this.state.colorScheme.background,
          }}
        ></textarea>
        <SideBar
          save={() => {
            this.state.value === ""
              ? console.log("You can not save an empty room!")
              : this.reqSave();
          }}
          changeColor={(newColor) => {
            this.setState({ colorScheme: newColor });
          }}
        />
      </div>
    );
  }
}

export default Coding;
