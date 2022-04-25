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
    <div className="App">
      <header className="App-header">
        <img src={logo} style={styles.logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Welcome to NewsHub, your new home for all news across the political
          spectrum.
        </p>
        <br></br>
        <div>
          <button type="button" class="btn btn-outline-primary btn-lg" style={styles.buttons}>
            Liberal
          </button>
          <button type="button" class="btn btn-outline-light btn-lg" style={styles.buttons}>
            Middle
          </button>
          <button type="button" class="btn btn-outline-danger btn-lg" style={styles.buttons}>
            Conservative
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
