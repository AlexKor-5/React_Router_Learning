import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import App from "./App/App";
import "./index.css"

ReactDOM.render(
    <Router>
        <App/>

        <NavLink to="/events" activeClassName="activeLink">Home</NavLink>
    </Router>,
    document.querySelector("#container")
);