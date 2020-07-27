import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import path from "../../assets/coding.jpg";

const MainPage = () => {
  let roomName = generateName(10);

  function generateName() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.mainText}>Share Code in Real-time</h1>
      <p className={styles.mainDesc}>
        An online code editor for every purpose...
      </p>
      <Link to={'/' + roomName} className={styles.button}>
        Start sharing code
      </Link>

      <img className={styles.codeImage} src={path} alt="codeImage" />

      <div className={styles.informations}>
        <div className={styles.information}>
          <h3>Code with friends</h3>
          <p>
            Open an editor, write or copy code, then share it with friends and
            colleagues.
          </p>
          <Link to={'/' + roomName}>Code Together</Link>
        </div>
        <div className={styles.information}>
          <h3>Interview developers</h3>
          <p>
            Set coding tasks and observe in real-time when interviewing remotely
            or in person. Nobody likes writing code on a whiteboard.
          </p>
          <Link to={'/' + roomName}>Start An Interview</Link>
        </div>
        <div className={styles.information}>
          <h3>Teach people programming</h3>
          <p>
            Share your code with students and peers then educate them.
            Universities and colleges around the world use similar solutions
            every day.
          </p>
          <Link to={'/' + roomName}>Teach Code</Link>
        </div>
      </div>
      <div className={styles.footer}> &copy; Jakub Gorka 2020 </div>
    </div>
  );
};

export default MainPage;
