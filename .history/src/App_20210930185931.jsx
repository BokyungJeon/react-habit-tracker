import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      // id는 key를 위해 지정
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  render() {
    return (
      <div>
        <header className="navbar">
          <i className="navber-logo"></i>
          <span>Habit Tracker</span>
          <span className="navbar-count">0</span>
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
