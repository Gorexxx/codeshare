import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Coding from "./components/Coding/Coding";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const keyContext = React.createContext(1);

  return (
    <div className={styles.App}>
      <keyContext.Provider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/">
              <Coding />
            </Route>
          </Switch>
        </BrowserRouter>
      </keyContext.Provider>
    </div>
  );
}

export default App;
