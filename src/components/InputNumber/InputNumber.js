// Dependencies
import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

// Style
import styles from "./style.module.css";

// Components
import Button from "../Button/Button";

function InputNumber({
  onChange,
  className,
  value,
  size,
  minValue,
  maxValue,
  variant,
  disabled,
  disabledClassName,
  reset,
  format,
  mask,
  placeholder,
  prefix,
  suffix,
}) {
  // Initializing state params of this component
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({ isOnLimit: false });

  // Function that handles the user input
  const handleInputChange = (formattedValue, value) => {
    // If it is disabled do nothing
    if (disabled) {
      return;
    }

    // If the father component passed a function, the input number calls it
    if (onChange) {
      // If the father component passed minimum value, maximum value or both,
      // it checks if the input is within the bounds
      if (numberLimits(parseInt(value), minValue, maxValue)) {
        setState({ isOnLimit: true });
        onChange(formattedValue);
      } else {
        // If the input value does not comply with the limits, it does not
        // perform any action
        setState({ isOnLimit: false });
      }
    }
  };

  // Function that verify if an input is within the bounds
  const numberLimits = (number, minValue, maxValue) => {
    if (typeof minValue === "number") {
      if (minValue > number) {
        return false;
      }
    }
    if (typeof maxValue === "number") {
      if (maxValue < number) {
        return false;
      }
    }
    return true;
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
      (minValue && parseInt(value) < parseInt(minValue)) ||
      (maxValue && parseInt(value) > parseInt(maxValue)),
    [disabledClassName]: disabled,
  });

  return (
    <div>
      <NumberFormat
        className={_className}
        value={value}
        allowLeadingZeros={false}
        thousandSeparator={true}
        isNumericString={false}
        onValueChange={({ formattedValue, value }) =>
          handleInputChange(formattedValue, value)
        }
        disabled={disabled}
        format={format}
        mask={mask}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        data-testid="input-number"
      />
      {reset && !!value.length && (
        <Button label="X" variant="reset" onClick={resetInputValue} />
      )}
    </div>
  );
}

// Definition of props types to this component
InputNumber.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabledClassName: PropTypes.string,
  disabled: PropTypes.bool,
  reset: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  format: PropTypes.string,
  mask: PropTypes.any,
};

// Assigning default values for the props
InputNumber.defaultProps = {
  className: "input",
  placeholder: "",
  value: "",
  variant: "default",
  disabled: false,
  disabledClassName: "",
  size: "medium",
  reset: false,
  mask: "",
};

export default InputNumber;
