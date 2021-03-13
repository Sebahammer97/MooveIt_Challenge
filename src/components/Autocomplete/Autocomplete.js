import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class Autocomplete extends Component {
  // Definition of props types to this component
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
    userInput: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  // Assigning default values for the props
  static defaultProps = {
    options: [],
    userInput: "",
  };

  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
  };

  handleOnChange = (e) => {
    const { options } = this.props;

    const userInput = e.target.value;
    const filteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput,
    });
  };

  handleOnClick = (e) => {
    const { onSelect } = this.props;

    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
    onSelect(e.currentTarget.innerText);
  };

  handleOnKeyDown = (e) => {
    const { onSelect } = this.props;
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      // Key Enter
      this.setState({
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
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      // Key Down
      if (activeOption + 1 === filteredOptions.length) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const { onSubmit } = this.props;
    const {
      handleOnChange,
      handleOnKeyDown,
      handleOnClick,
      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;

    let optionList;

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
}

export default Autocomplete;
