import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import login from "./login";
import signup from "./signup";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Login</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">              
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={login} />
            <Route path="/sign-in" component={login} />
            <Route path="/sign-up" component={signup} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
