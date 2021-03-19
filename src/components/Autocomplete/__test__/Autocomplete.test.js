import React, { useState } from "react";
import ReactDOM from "react-dom";
import Autocomplete from "../Autocomplete";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("autocomplete renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Autocomplete type={"text"} />, div);
});

function AutocompleteTest() {
  const options = ["Red", "Green", "Blue", "Black", "White", "Yellow"];
  const [input, setInput] = useState("");

  const handleSelect = (value) => {
    setInput(value);
  };

  const handleSubmit = (value) => {
    setInput(value);
  };

  return (
    <Autocomplete
      options={options}
      onSelect={handleSelect}
      onSubmit={handleSubmit}
      userInput={input}
    />
  );
}

it("renders autocomplete input text correctly", () => {
  const utils = render(<AutocompleteTest />);
  const autocomplete = utils.getByTestId("autocomplete");
  fireEvent.change(autocomplete, { target: { value: "abcdefg" } });
  expect(autocomplete.value).toBe("abcdefg");
  fireEvent.change(autocomplete, { target: { value: "123456" } });
  expect(autocomplete.value).toBe("123456");
  fireEvent.change(autocomplete, { target: { value: "a1b2c3d4f5" } });
  expect(autocomplete.value).toBe("a1b2c3d4f5");
});

it("renders autocomplete keydowns", () => {
  const utils = render(<AutocompleteTest />);
  const autocomplete = utils.getByTestId("autocomplete");

  autocomplete.focus();
  fireEvent.change(autocomplete, { target: { value: "b" } });
  fireEvent.keyDown(autocomplete, { keyCode: 40 }); // Key Down
  fireEvent.keyDown(autocomplete, { keyCode: 13 }); // Key Enter

  expect(autocomplete.value).toEqual("Black");
});

it("matches snapshots autocomplete", () => {
  const tree = renderer.create(<Autocomplete />).toJSON();
  expect(tree).toMatchSnapshot();
});
