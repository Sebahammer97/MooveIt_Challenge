// Dependencies
import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

// Style
import "./style.css";

function CustomSelect({
  optionsList,
  multiSelect,
  valueArr,
  placeholder,
  closeMenuOnSelect,
  handleChange,
}) {
  const customStyle = {
    container: (styles) => ({ ...styles, width: "15em", margin: "auto" }),
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? "grey"
          : isSelected || isFocused
          ? "#08a1b6"
          : null,
        color: isDisabled ? "#fff" : isSelected || isFocused ? "#fff" : "#000",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
    input: (styles) => ({ ...styles, color: "#000" }),
    placeholder: (styles) => ({ ...styles, color: "#000" }),
    singleValue: (styles) => ({ ...styles, color: "#000" }),
    multiValue: (styles) => ({ ...styles, color: "#000" }),
  };

  return (
    <div className="select" data-testid="select">
      <Select
        closeMenuOnSelect={closeMenuOnSelect}
        value={valueArr}
        isMulti={multiSelect}
        options={optionsList}
        styles={customStyle}
        placeholder={placeholder}
        onChange={(value) => handleChange(value)}
      />
    </div>
  );
}

// Definition of props types to this component
CustomSelect.propTypes = {
  valueArr: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  multiSelect: PropTypes.bool,
  optionsList: PropTypes.instanceOf(Array).isRequired,
  handleChange: PropTypes.func.isRequired,
  closeMenuOnSelect: PropTypes.bool,
};

// Assigning default values for the props
CustomSelect.defaultProps = {
  value: [],
  placeholder: "Select an option",
  multiSelect: false,
  optionList: [],
  closeMenuOnSelect: true,
};

export default CustomSelect;
