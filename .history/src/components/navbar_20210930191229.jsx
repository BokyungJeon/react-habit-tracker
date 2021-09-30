import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <i className="navber-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">0</span>
      </header>
    );
  }
}

export default Navbar;