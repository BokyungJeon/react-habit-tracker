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
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-button">Add</button>
        </form>
        <Habits />;<button className="add-button">Reset All</button>
      </div>
    );
  }
}

export default App;
