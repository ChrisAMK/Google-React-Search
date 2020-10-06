import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";

import Search from "./pages/Search"
import Saved from "./pages/Saved";



function App() {


  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <div className="container">
        <Banner />
          <Switch>

            <Route exact path="/search">
              <Search />
            </Route>

            <Route exact path="/saved">
              <Saved />
            </Route>

            <Route path="/">
              <Search />
            </Route>

          </Switch>
        </div>
      
      </Router>
    </React.Fragment>
  );
}


export default App;
