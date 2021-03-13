import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputText from "../InputText";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("input text renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputText type={"text"} />, div);
});

it("textarea renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputText type={"text"} textarea={true} />, div);
});

it("password renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputText type={"password"} />, div);
});

function InputTextTest({ type, textarea, variant, disabled, size }) {
  const [input, setInput] = useState("");

  return (
    <InputText
      type={type}
      textarea={textarea}
      value={input}
      onChange={(value) => setInput(value)}
      variant={variant}
      disabled={disabled}
      size={size}
    />
  );
}

it("renders input text correctly", () => {
  const utils = render(<InputTextTest type="text" />);
  const input = utils.getByTestId("input-text");
  fireEvent.change(input, { target: { value: "abcdefg" } });
  expect(input.value).toBe("abcdefg");
  fireEvent.change(input, { target: { value: "123456" } });
  expect(input.value).toBe("123456");
  fireEvent.change(input, { target: { value: "a1b2c3d4f5" } });
  expect(input.value).toBe("a1b2c3d4f5");
});

it("renders textarea correctly", () => {
  const utils = render(<InputTextTest type="text" textarea={true} />);
  const input = utils.getByTestId("input-text");
  fireEvent.change(input, { target: { value: "abcdefg" } });
  expect(input.value).toBe("abcdefg");
  fireEvent.change(input, { target: { value: "123456" } });
  expect(input.value).toBe("123456");
  fireEvent.change(input, { target: { value: "a1b2c3d4f5" } });
  expect(input.value).toBe("a1b2c3d4f5");
});

it("renders password correctly", () => {
  const utils = render(<InputTextTest type="password" />);
  const input = utils.getByTestId("input-text");
  fireEvent.change(input, { target: { value: "abcdefg" } });
  expect(input.value).toBe("abcdefg");
  fireEvent.change(input, { target: { value: "123456" } });
  expect(input.value).toBe("123456");
  fireEvent.change(input, { target: { value: "a1b2c3d4f5" } });
  expect(input.value).toBe("a1b2c3d4f5");
});

it("disable input text correctly", () => {
  const utils = render(<InputTextTest type="text" disabled={true} />);
  const input = utils.getByTestId("input-text");
  fireEvent.change(input, { target: { value: "abcdefg" } });
  expect(input).toBeDisabled();
});

it("matches snapshots input text", () => {
  const tree = renderer.create(<InputText type="text" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots textarea", () => {
  const tree = renderer
    .create(<InputText type="text" textarea={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots password", () => {
  const tree = renderer.create(<InputText type="password" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots disabled", () => {
  const tree = renderer
    .create(<InputText type="text" disabled={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots with reset", () => {
  const tree = renderer.create(<InputText type="text" reset={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots size", () => {
  const tree = renderer
    .create(
      <div>
        <InputText type="text" size="small" />{" "}
        <InputText type="text" size="medium" />{" "}
        <InputText type="text" size="large" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots variant styles", () => {
  const tree = renderer
    .create(
      <div>
        <InputText type="text" variant="dark" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
