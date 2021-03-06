import React, { useState } from "react";
import ReactDOM from "react-dom";
import Select from "../Select";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

function SelectTest() {
  const options = [
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
  ];
  const [selectedObj, setSelectedObj] = useState(options[0]);

  return (
    <Select
      optionsList={options}
      valueObj={selectedObj}
      handleChange={(value) => setSelectedObj(value)}
      multiSelect={false}
    />
  );
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SelectTest />, div);
});

it("renders select one item correctly", () => {
  const utils = render(<SelectTest />);
  const container = utils.getByTestId("select");
  const select = container.firstChild;

  expect(select).toBeDefined();
  expect(select).not.toBeNull();

  select.focus();
  fireEvent.keyDown(select, { keyCode: 40 }); // Key Down
  fireEvent.keyDown(select, { keyCode: 40 }); // Key Down
  fireEvent.keyDown(select, { keyCode: 13 }); // Key Enter

  expect(select.textContent).toEqual("Blue");
});

it("matches snapshots select", () => {
  const tree = renderer.create(<SelectTest />).toJSON();
  expect(tree).toMatchSnapshot();
});

// It is not necessary doing tests because in the repository
// of the dependency 'react-select' already has done the tests cases.
// https://github.com/JedWatson/react-select/tree/master/packages/react-select/src/__tests__
