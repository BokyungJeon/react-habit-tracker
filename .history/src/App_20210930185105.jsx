import React, { Component } from "react";
import "./App.css";
import Habit from "./components/habit";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <span>Habit Tracker</span>
        </header>
        <Habit />;
      </div>
    );
  }
}

export default App;
