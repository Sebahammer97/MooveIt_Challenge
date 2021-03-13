import React, { useState } from "react";
import "../App.css";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

// Components
import { Button, InputNumber } from "../components/index";

export default function InputNumberExample() {
  const [number, setNumber] = useState("");
  const [numberDark, setNumberDark] = useState("");
  const [numberSizes, setNumberSizes] = useState("");
  const [numberWithReset, setNumberWithReset] = useState("");
  const [numberWithLimits, setNumberWithLimits] = useState("");
  const [celphoneNumber, setCelphoneNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [dateNumber, setDateNumber] = useState("");
  const [numberWithPrefix, setNumberWithPrefix] = useState("");
  const [numberWithSuffix, setNumberWithSuffix] = useState("");
  const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => history.goBack()}>
          <LeftOutlined /> Back
        </Button>

        <p className="title">Input number</p>
        <p className="description-row">
          This is the default input number which is saved in a variable. You
          will need to set the <b>type</b> property for 'number' value.
        </p>
        <div className="row">
          <div className="column">
            <InputNumber
              value={number}
              onChange={(value) => setNumber(value)}
            />
            {number.length > 0 ? <p>You wrote N°: {number}</p> : null}
          </div>
        </div>

        <p className="title">Input number size</p>
        <p className="description-row">
          It supports a default input number size as well as a large and small
          size. If a large or small input number is desired, set the <b>size</b>{" "}
          property to either 'large' or 'small' respectively. Omit the{" "}
          <b>size</b> property for an input number with the default size.
        </p>

        <div className="row">
          <div className="column">
            <p className="description">Small input</p>
            <InputNumber
              size="small"
              value={numberSizes}
              onChange={(value) => setNumberSizes(value)}
            />
          </div>
          <div className="column">
            <p className="description">Default input</p>
            <InputNumber
              value={numberSizes}
              onChange={(value) => setNumberSizes(value)}
            />
          </div>
          <div className="column">
            <p className="description">Large input</p>
            <InputNumber
              size="large"
              value={numberSizes}
              onChange={(value) => setNumberSizes(value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Input number dark</p>
            <p className="description">
              This is an example of an additional input number style. To see
              this style set the <b>variant</b> property with 'dark' value. Also
              you can create new styles writting on the css file.
            </p>
            <InputNumber
              value={numberDark}
              variant="dark"
              onChange={(value) => setNumberDark(value)}
            />
          </div>
          <div className="column">
            <p className="title">Input number limit</p>
            <p className="description">
              You can limit the input of an user setting <b>minValue</b> and{" "}
              <b>maxValue</b> properties, they can be setted at the same time or
              only one. In this example the minValue is 0 and the maxValue is
              100.
            </p>
            <InputNumber
              value={numberWithLimits}
              onChange={(value) => setNumberWithLimits(value)}
              minValue={0}
              maxValue={100}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Input number disabled</p>
            <p className="description">
              You can disable an input number if you put the <b>disabled</b>{" "}
              property with a true value.
            </p>
            <InputNumber disabled={true} value={"0"} />
          </div>
          <div className="column">
            <p className="title">Input Number with reset button</p>
            <p className="description">
              When this input number has a different value than 0 shows a button
              to clean it. You can show this button putting the <b>reset</b>{" "}
              property with a true value. For default is disabled.
            </p>
            <InputNumber
              value={numberWithReset}
              onChange={(value) => setNumberWithReset(value)}
              reset={true}
            />
          </div>
        </div>

        <p className="title">Input number format</p>
        <p className="description-row">
          You can put a mask into the input number if you put the <b>mask</b>{" "}
          property with the value that you want.
        </p>
        <div className="row">
          <div className="column">
            <p className="title">Input number phone format</p>
            <InputNumber
              placeholder="+54 (###) ####-####"
              format="+54 (###) ####-####"
              mask="_"
              value={celphoneNumber}
              onChange={(value) => setCelphoneNumber(value)}
            />
          </div>
          <div className="column">
            <p className="title">Input number credit card format</p>
            <InputNumber
              placeholder="####-####-####-####"
              format="####-####-####-####"
              mask="#"
              value={creditCard}
              onChange={(value) => setCreditCard(value)}
            />
          </div>
          <div className="column">
            <p className="title">Input number date format</p>
            <InputNumber
              format="##/##/####"
              placeholder="DD/MM/YYYY"
              mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
              value={dateNumber}
              onChange={(value) => setDateNumber(value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Input number with a prefix</p>
            <p className="description">
              You can set the <b>prefix</b> property with any string that you
              want. This will be shown at the beginning of the input. In this
              example, the value of the prefix is 'U$D'.
            </p>
            <InputNumber
              prefix="U$D "
              value={numberWithPrefix}
              onChange={(value) => setNumberWithPrefix(value)}
            />
          </div>
          <div className="column">
            <p className="title">Input number with a sufix</p>
            <p className="description">
              As the <b>prefix</b> property, you can pass any string to the{" "}
              <b>suffix</b> property with the difference that his value will be
              shown at last of the input. In this example, the value of the
              suffix is 'likes'.
            </p>
            <InputNumber
              suffix=" likes"
              value={numberWithSuffix}
              onChange={(value) => setNumberWithSuffix(value)}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
