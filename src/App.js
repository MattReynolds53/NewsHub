import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Liberal from "./components/Liberal";
import Middle from "./components/Middle";
import Conservative from "./components/Conservative";

import logo from "./images/homepage/NewsLogo.png";
import "./App.css";

const styles = {
  logo: {
    borderRadius: "100%",
  },
  buttons: {
    // display: "flex",
    // justifyContent: "space-around",
    margin: "0vh 15vh",
    padding: "3vh 7vh",
    fontSize: "150%"
  }
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} style={styles.logo} className="App-logo" alt="logo" />
          <br></br>
          <p>
            Welcome to NewsHub, your new home for all news across the political
            spectrum.
          </p>
          <br></br>
        </header>
        <body>
          <div>
            <button type="button" class="btn btn-outline-primary btn-lg" style={styles.buttons}>
              <Link to="/liberal">Liberal</Link>
            </button>
            <button type="button" class="btn btn-outline-light btn-lg" style={styles.buttons}>
              <Link to="/middle">Middle</Link>
            </button>
            <button type="button" class="btn btn-outline-danger btn-lg" style={styles.buttons}>
              <Link to="/conservative">Conservative</Link>
            </button>
          </div>
          <Switch>
            <Route path="/liberal">
              <Liberal />
            </Route>
            <Route path="/middle">
              <Middle />
            </Route>
            <Route path="/conservative">
              <Conservative />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
