import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

export default function AppRouting() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
    console.log("logged in!");
  };

  const logout = () => {
    setLoggedIn(false);
    console.log("logged out!");
  };

  return (
    <Router>
      <Switch>
        {/* Index */}
        <Route
          exact
          path="/"
          render={() => {
            return loggedIn ? <App logout={logout} /> : <Redirect to="/login" />;
          }}
        />
        {/* Login Route */}
        <Route
          exact
          path="/login"
          render={() => {
            return loggedIn ? <Redirect to="/" /> : <Login login={login} />;
          }}
        />
        {/* Login Route */}
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouting />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
