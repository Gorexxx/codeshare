import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Coding from './components/Coding/Coding'
import MainPage from './components/MainPage/MainPage'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route path="/">
            <Coding/>
            <SideBar/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
