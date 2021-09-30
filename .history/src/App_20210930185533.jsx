import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";

class App extends Component {
  render() {
    return (
      <div>
        <header className="navbar">
          <span>Habit Tracker</span>
        </header>
        <Habits />;<button className="button">Reset All</button>
      </div>
    );
  }
}

export default App;
