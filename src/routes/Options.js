import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

// Components
import { Button } from "../components/index";

export default function Options() {
  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <p> Options </p>

        <Button
          label="Autocomplete"
          onClick={() => history.push("/autocomplete")}
        />
        <Button label="Button" onClick={() => history.push("/button")} />
        <Button
          label="Input Number"
          onClick={() => history.push("/inputnumber")}
        />
        <Button label="Input Text" onClick={() => history.push("/inputtext")} />
        <Button label="Select Input" onClick={() => history.push("/select")} />

        <p>
          Link of the repository clicking{" "}
          <a
            className="link"
            href="https://github.com/Sebahammer97/MooveIt_Challenge"
          >
            here
          </a>
        </p>
      </header>
    </div>
  );
}
