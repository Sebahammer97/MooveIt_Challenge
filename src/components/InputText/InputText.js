// Dependencies
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// Style
import styles from "./style.module.css";

// Components
import Button from "../Button/Button";

function InputText({
  className,
  type,
  value,
  placeholder,
  size,
  minLength,
  maxLength,
  variant,
  disabled,
  disabledClassName,
  textarea,
  reset,
  onChange,
}) {
  // Function that handles the user input
  const handleInputChange = (event) => {
    // If it is disabled do nothing
    if (disabled) {
      return;
    }

    // If the father component passed a function, the input number calls it
    if (onChange) {
      onChange(event.target.value);
    }
  };

  // Function that handles the reset action, erasing all the input
  const resetInputValue = () => {
    if (onChange) {
      onChange("");
    }
  };

  // Handling the different styles
  const _className = cx(className, styles[size], styles[variant], {
    [styles.disabled]: disabled,
    [styles.error]:
      value.length < minLength || (maxLength && value.length > maxLength),
    [disabledClassName]: disabled,
  });

  // Handling the differents types of inputs
  const InputElement = textarea ? "textarea" : "input";

  return (
    <div>
      <InputElement
        className={_className}
        type={type}
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleInputChange}
        disabled={disabled}
        data-testid="input-text"
      />
      {reset && !!value.length > 0 && (
        <Button label="X" variant="reset" onClick={resetInputValue} />
      )}
    </div>
  );
}

// Definition of props types to this component
InputText.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabledClassName: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  textarea: PropTypes.bool,
  reset: PropTypes.bool,
};

// Assigning default values for the props
InputText.defaultProps = {
  className: "input",
  placeholder: "",
  value: "",
  variant: "default",
  disabled: false,
  disabledClassName: "",
  size: "medium",
  type: "text",
  minLength: 0,
  maxLength: 9999,
  textarea: false,
  reset: false,
};

export default InputText;
