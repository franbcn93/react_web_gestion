import "./App.css";
import React, { Component, Fragment } from "react";
import Switcher from "./components/Switcher";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <Switcher />
        </div>
      </Fragment>
    );
  }
}
