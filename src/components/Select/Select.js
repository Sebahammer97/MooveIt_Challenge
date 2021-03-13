import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./style.css";

export class CustomSelect extends Component {
  static propTypes = {
    valueArr: PropTypes.instanceOf(Array),
    valueObj: PropTypes.object,
    placeholder: PropTypes.string,
    multiSelect: PropTypes.bool,
    optionsList: PropTypes.instanceOf(Array).isRequired,
    handleChange: PropTypes.func.isRequired,
    closeMenuOnSelect: PropTypes.bool,
  };

  static defaultProps = {
    value: [],
    placeholder: "Select an option",
    multiSelect: false,
    optionList: [],
    closeMenuOnSelect: true,
  };

  render() {
    const {
      optionsList,
      multiSelect,
      valueObj,
      valueArr,
      placeholder,
      closeMenuOnSelect,
      handleChange,
    } = this.props;

    const customStyle = {
      container: (styles) => ({ ...styles, width: "15em" }),
      control: (styles) => ({ ...styles, backgroundColor: "white" }),
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled
            ? "grey"
            : isSelected || isFocused
            ? "#08a1b6"
            : null,
          color: isDisabled
            ? "#fff"
            : isSelected || isFocused
            ? "#fff"
            : "#000",
          cursor: isDisabled ? "not-allowed" : "default",
        };
      },
      input: (styles) => ({ ...styles, color: "#000" }),
      placeholder: (styles) => ({ ...styles, color: "#000" }),
      singleValue: (styles) => ({ ...styles, color: "#000" }),
      multiValue: (styles) => ({ ...styles, color: "#000" }),
    };

    return multiSelect ? (
      <div className="select">
        <Select
          closeMenuOnSelect={closeMenuOnSelect}
          value={valueArr}
          isMulti={true}
          options={optionsList}
          styles={customStyle}
          placeholder={placeholder}
          onChange={(value) => handleChange(value)}
          data-testid="select"
        />
      </div>
    ) : (
      <div className="select">
        <Select
          closeMenuOnSelect={closeMenuOnSelect}
          value={valueObj}
          isMulti={false}
          options={optionsList}
          styles={customStyle}
          placeholder={placeholder}
          onChange={(value) => handleChange(value)}
          data-testid="select"
        />
      </div>
    );
  }
}

export default CustomSelect;
