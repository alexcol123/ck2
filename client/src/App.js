import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Navbar from "./Components/layout/Navbar";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alerts from "./Components/layout/Alerts";
import PrivateRoute from "./Components/routing/PrivateRoute";

import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
