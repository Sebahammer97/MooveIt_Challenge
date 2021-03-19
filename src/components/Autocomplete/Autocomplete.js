// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";

// Style
import "./style.css";

function Autocomplete({ options, onSelect, onSubmit }) {
  // Initializing state params of this component
  const [state, setState] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
  });

  // Function that filters the options with the user input
  const handleOnChange = (e) => {
    const userInput = e.target.value;
    // Contain filter
    const filteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput,
    });
  };

  // Function that handles when the user did a click on a item of the list, update the state
  // of this component and return the value to the father component
  const handleOnClick = (e) => {
    setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });

    onSelect(e.currentTarget.innerText);
  };

  // Function that handles when the user press down a key (Up, Down or Enter)
  const handleOnKeyDown = (e) => {
    const { activeOption, filteredOptions } = state;

    if (e.keyCode === 13) {
      // Key Enter
      setState({
        activeOption: 0,
        showSuggestions: false,
        filteredOptions,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });

      onSelect(filteredOptions[activeOption]);
    } else if (e.keyCode === 38) {
      // Key Up
      if (activeOption === 0) {
        // There are no more options above
        return;
      }

      setState({ ...state, activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      // Key Down
      if (activeOption + 1 === filteredOptions.length) {
        // There are no more options below
        return;
      }

      setState({ ...state, activeOption: activeOption + 1 });
    }
  };

  let optionList;

  const { showOptions, userInput, filteredOptions, activeOption } = state;

  // Fill the variable optionList
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = "option-active";
            }
            return (
              <li
                className={className}
                key={optionName}
                onClick={(e) => handleOnClick(e)}
              >
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        className="search-box"
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(e) => handleOnKeyDown(e)}
        value={userInput}
        data-testid="autocomplete"
      />
      <input
        type="submit"
        value=""
        onClick={() => onSubmit(userInput)}
        className="search-btn"
      />
      {optionList}
    </div>
  );
}

// Definition of props types to this component
Autocomplete.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  userInput: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  onSubmit: PropTypes.func,
};

// Assigning default values for the props
Autocomplete.defaultProps = {
  options: [],
  userInput: "",
};

export default Autocomplete;
