import logo from "./images/homepage/NewsLogo.png";
import "./App.css";

const styles = {
  logo: {
    borderRadius: "100%",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={styles.logo} className="App-logo" alt="logo" />
        <p>
          Welcome to NewsHub, your new home for all news across the political
          spectrum.
        </p>
        <div style={styles.buttons}>
          <button type="button" class="btn btn-outline-primary">
            Liberal
          </button>
          <button type="button" class="btn btn-outline-light">
            Middle
          </button>
          <button type="button" class="btn btn-outline-danger">
            Conservative
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
