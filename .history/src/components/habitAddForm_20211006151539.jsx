import React, { Component } from "react";

class habitAddForm extends Component {
  render() {
    return (
      <form className="add-form">
        <input type="text" className="add-input" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default habitAddForm;
