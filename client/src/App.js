import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>

            <Route exact path="/search">
              <Banner />
              <Search />
              <Results />
            </Route>

            <Route exact path="/saved">
              <Banner />
              <Saved />
            </Route>

          </Switch>
        </div>
      
      </Router>
    </React.Fragment>
  );
}


export default App;
