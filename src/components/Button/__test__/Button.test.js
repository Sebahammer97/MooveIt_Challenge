import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click me" />);
  expect(getByTestId("button")).toHaveTextContent("Click me");
});

it("matches snapshots button", () => {
  const tree = renderer.create(<Button label="Click me" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots disabled", () => {
  const tree = renderer.create(<Button disabled={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots size", () => {
  const tree = renderer
    .create(
      <div>
        <Button size="small" /> <Button size="medium" /> <Button size="large" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshots variant styles", () => {
  const tree = renderer
    .create(
      <div>
        <Button variant="primary" /> <Button variant="secondary" />{" "}
        <Button variant="link" /> <Button variant="danger" />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
