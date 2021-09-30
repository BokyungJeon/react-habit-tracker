import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habit";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <span>Habit Tracker</span>
        </header>
        <Habits />;
      </div>
    );
  }
}

export default App;
