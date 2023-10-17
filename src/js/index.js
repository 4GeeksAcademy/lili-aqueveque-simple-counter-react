//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/home.jsx";

//render your react application
ReactDOM.render(<Counter />, document.querySelector("#app"));
