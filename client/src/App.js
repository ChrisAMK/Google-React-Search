import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
      </Router>
      <Banner />
    </React.Fragment>
  );
}


export default App;
