import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputNumber from "../InputNumber";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputNumber />, div);
});

function InputNumberTest({
  minValue,
  maxValue,
  variant,
  disabled,
  format,
  mask,
  placeholder,
  prefix,
  suffix,
}) {
  const [input, setInput] = useState("");

  return (
    <InputNumber
      value={input}
      onChange={(value) => setInput(value)}
      variant={variant}
      disabled={disabled}
      minValue={minValue}
      maxValue={maxValue}
      format={format}
      mask={mask}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
    />
  );
}

it("renders input number correctly", () => {
  const utils = render(<InputNumberTest />);
  const input = utils.getByTestId("input-number");
  fireEvent.change(input, { target: { value: "123" } });
  expect(input.value).toBe("123");
});

it("render input number format correctly", () => {
  const utils = render(
    <InputNumberTest
      format="####-####-####-####"
      mask="#"
      placeholder="####-####-####-####"
    />
  );
  const input = utils.getByTestId("input-number");
  fireEvent.change(input, { target: { value: "1234567890123456" } });
  expect(input.value).toBe("1234-5678-9012-3456");
});

it("render input number limit correctly", () => {
  const utils = render(<InputNumberTest minValue={0} maxValue={100} />);
  const input = utils.getByTestId("input-number");
  fireEvent.change(input, { target: { value: "55" } });
  expect(input.value).toBe("55");
  fireEvent.change(input, { target: { value: "999" } });
  expect(input.value).toBe("55");
});

it("render input number prefix correctly", () => {
  const utils = render(<InputNumberTest prefix="$" />);
  const input = utils.getByTestId("input-number");
  fireEvent.change(input, { target: { value: "100" } });
  expect(input.value).toBe("$100");
});

it("render input number suffix correctly", () => {
  const utils = render(<InputNumberTest suffix=" likes" />);
  const input = utils.getByTestId("input-number");
  fireEvent.change(input, { target: { value: "100" } });
  expect(input.value).toBe("100 likes");
});

it("matches snapshots input number", () => {
  const tree = renderer.create(<InputNumber />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots disabled", () => {
  const tree = renderer.create(<InputNumber disabled={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots with reset", () => {
  const tree = renderer.create(<InputNumber reset={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots size", () => {
  const tree = renderer
    .create(
      <div>
        <InputNumber size="small" /> <InputNumber size="medium" />{" "}
        <InputNumber size="large" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots variant styles", () => {
  const tree = renderer
    .create(
      <div>
        <InputNumber variant="dark" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots formats", () => {
  const tree = renderer
    .create(
      <div>
        <InputNumber
          format={"+54 (###) ####-####"}
          mask="_"
          placeholder="+54 (###) ####-####"
        />
        <InputNumber
          format={"####-####-####-####"}
          mask="#"
          placeholder="####-####-####-####"
        />
        <InputNumber
          format={"##/##/####"}
          mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
          placeholder="DD/MM/YYYY"
        />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots prefix", () => {
  const tree = renderer
    .create(
      <div>
        <InputNumber prefix="$" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots suffix", () => {
  const tree = renderer
    .create(
      <div>
        <InputNumber suffix=".-" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
