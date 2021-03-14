import React, { useState } from "react";
import "../App.css";
import { LeftOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

// Components
import { Button } from "../components/index";

export default function ButtonExample() {
  let [counter, setCounter] = useState(0);
  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => history.goBack()}>
          <LeftOutlined /> Back
        </Button>

        <div className="row">
          <div className="column">
            <p className="title">Default button with a functionality</p>
            <p className="description">
              This button triggers a functionality, in this case is a counter.
              Also this example is the default button.
            </p>
            <Button label="Click me!" onClick={() => setCounter(counter + 1)} />

            {counter > 0 ? (
              <p className="description">
                You clicked the button {counter}{" "}
                {counter === 1 ? "time" : "times"}
              </p>
            ) : null}
          </div>
          <div className="column">
            <p className="title">Button disabled</p>
            <p className="description">
              To mark a button as disabled, add the <b>disabled</b> property to
              the button. The value default is false.
            </p>
            <Button label="Disabled" disabled={true} />
          </div>
        </div>

        <p className="title">Type</p>
        <p className="description-row">
          It is supported some differents kind of styles, like 'primary',
          'secondary', 'link', 'danger'. Also you can create new styles writting
          on the css file. Omit the <b>type</b> property for a button with the
          default style.
        </p>
        <div className="row">
          <div className="column">
            <p className="title">Default button</p>
            <Button label="Default" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p className="title">Primary button</p>
            <Button label="Primary" variant="primary" />
          </div>
          <div className="column">
            <p className="title">Secondary button</p>
            <Button label="Secondary" variant="secondary" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Link button</p>
            <Button label="Link" variant="link" />
          </div>
          <div className="column">
            <p className="title">Danger button</p>
            <Button variant="danger">
              <p className="label-button">Danger</p>
              <ExclamationCircleOutlined />
            </Button>
          </div>
        </div>

        <p className="title">Size</p>
        <p className="description-row">
          It supports a default button size as well as a large and small size.
          If a large or small button is desired, set the <b>size</b> property to
          either 'large' or 'small' respectively. Omit this property to get the
          default size.
        </p>
        <div className="row">
          <div className="column">
            <p className="title">Small button</p>
            <Button size="small" label="Small size button" />
          </div>
          <div className="column">
            <p className="title">Default button</p>
            <Button label="Default size button" />
          </div>
          <div className="column">
            <p className="title">Big button</p>
            <Button size="large" label="Big size button" />
          </div>
        </div>
      </header>
    </div>
  );
}
