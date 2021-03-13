import React from "react";
import logo from "../assets/logo.svg";
import "../App.css";
import { useHistory } from "react-router-dom";

// Components
import { Button } from "../components/index";

export default function Home() {
  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> React Challenge </p>

        <Button
          label="Start"
          size="large"
          onClick={() => history.push("/options")}
        />

        <p>
          Made by Sebastian Hammerschmidt (
          <a className="link" href="https://github.com/Sebahammer97">
            SebaHammer97
          </a>
          )
        </p>
      </header>
    </div>
  );
}
