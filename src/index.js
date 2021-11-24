import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit.jsx";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root")
);
