import React, { useState } from "react";
import "../App.css";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

// Components
import { Button, InputText } from "../components/index";

export default function InputTextExample() {
  const [textDefault, setTextDefault] = useState("");
  const [textSizes, setTextSizes] = useState("");
  const [textDark, setTextDark] = useState("");
  const [textArea, setTextArea] = useState("");
  const [textWithLimit, setTextWithLimit] = useState("");
  const [textWithReset, setTextWithReset] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [textPlaceholder, setTextPlaceholder] = useState("");
  const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => history.goBack()}>
          <LeftOutlined /> Back
        </Button>

        <p className="title">Input Text</p>
        <p className="description-row">
          This is the default input text which is saved in a variable. The
          default type of input is text but can change it editing the{" "}
          <b>type</b> property for password or email.
        </p>
        <div className="row">
          <div className="column">
            <InputText
              type="text"
              placeholder="Write me!"
              value={textDefault}
              onChange={(value) => setTextDefault(value)}
            />
            {textDefault !== "" ? (
              <p className="description">You wrote: "{textDefault}"</p>
            ) : null}
          </div>
        </div>

        <p className="title">Input text size</p>
        <p className="description-row">
          It supports a default input text size as well as a large and small
          size. If a large or small input text is desired, set the <b>size</b>{" "}
          property to either 'large' or 'small' respectively. Omit the{" "}
          <b>size</b> property for an input text with the default size.
        </p>
        <div className="row">
          <div className="column">
            <p className="description">Small input</p>
            <InputText
              type="text"
              size="small"
              value={textSizes}
              onChange={(value) => setTextSizes(value)}
            />
          </div>
          <div className="column">
            <p className="description">Default input</p>
            <InputText
              type="text"
              value={textSizes}
              onChange={(value) => setTextSizes(value)}
            />
          </div>
          <div className="column">
            <p className="description">Large input</p>
            <InputText
              type="text"
              size="large"
              value={textSizes}
              onChange={(value) => setTextSizes(value)}
            />
          </div>
        </div>

        <p className="title">Input Text disabled</p>
        <p className="description">
          You can disable an input if you put the <b>disabled</b> property with
          a true value.
        </p>
        <div className="row">
          <div className="column">
            <InputText type="text" disabled={true} value="" />
          </div>
          <div className="column">
            <InputText type="text" textarea={true} disabled={true} value="" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Input Text dark</p>
            <p className="description">
              This is an example of an additional input text style. To see this
              style set the <b>variant</b> property with 'dark' value. Also you
              can create new styles writting on the css file.
            </p>
            <InputText
              type="text"
              variant="dark"
              value={textDark}
              onChange={(value) => setTextDark(value)}
            />
          </div>
          <div className="column">
            <p className="title">Input Textarea</p>
            <p className="description">
              You can change the input type setting the <b>textarea</b> property
              with a true value. For default this property is false.
            </p>
            <InputText
              type="text"
              textarea={true}
              value={textArea}
              onChange={(value) => setTextArea(value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Input Text with limit of length</p>
            <p className="description">
              This example is configured with a minimun length of 3 and maximun
              length of 10 characters. The only thing that you need to do is
              setting <b>minLength</b> and <b>maxLength</b> properties with a
              number value. For default the <b>minLength</b> is 0 and{" "}
              <b>maxLength</b> is unlimited.
            </p>
            <InputText
              type="text"
              minLength={3}
              maxLength={10}
              value={textWithLimit}
              onChange={(value) => setTextWithLimit(value)}
            />
            <p className="description">
              Size of characters wrote: "{textWithLimit.length}"
            </p>
          </div>
          <div className="column">
            <p className="title">Input Text with reset button</p>
            <p className="description">
              When this input text is not empty shows a button to clean it. You
              can show this button putting the <b>reset</b> property with a true
              value. For default is disabled.
            </p>
            <InputText
              type="text"
              value={textWithReset}
              reset={true}
              onChange={(value) => setTextWithReset(value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="title">Input Text password</p>
            <p className="description">
              You can convert the input text into an input password changing the
              value of the property <b>type</b> to password value.
            </p>
            <InputText
              type="password"
              value={password}
              reset={true}
              onChange={(value) => setPassword(value)}
            />
          </div>
          <div className="column">
            <p className="title">Input Text email</p>
            <p className="description">
              You can convert the input text into an input email changing the
              value of the property <b>type</b> to email value. If the input
              does not match with a valid email, will show with a red border.
            </p>
            <InputText
              type="email"
              value={email}
              reset={true}
              onChange={(value) => setEmail(value)}
            />
          </div>
        </div>

        <p className="title">Input Text placeholder</p>
        <p className="description-row">
          To explain better what the user need to write, you can set the{" "}
          <b>placeholder</b> property with any string value. In this case, the
          value is 'Write me a joke'.
        </p>
        <div className="row">
          <InputText
            type="text"
            textarea={true}
            value={textPlaceholder}
            onChange={(value) => setTextPlaceholder(value)}
            placeholder={"Write me a joke"}
          />
        </div>
      </header>
    </div>
  );
}
