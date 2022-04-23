import logo from "./images/homepage/NewsLogo.png";
import "./App.css";

const styles = {
  logo: {
    borderRadius: "100%",
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={styles.logo} className="App-logo" alt="logo" />
        <p>
          Welcome to NewsHub, your new home for all news across the political spectrum.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
