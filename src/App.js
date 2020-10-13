import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 className="header1">Weather App</h1>
        <Weather defaultCity="Edmonton" />
        <footer>
          This is{" "}
          <a
            href="https://github.com/jnasmbrd/react-weatherapp-finalproject.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.shecodes.io/students/173-janice-asumbrado"
            target="_blank"
            rel="noopener noreferrer"
          >
            Janice Asumbrado.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
