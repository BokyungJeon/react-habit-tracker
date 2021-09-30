import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">0</span>
      </nav>
    );
  }
}

export default Navbar;
