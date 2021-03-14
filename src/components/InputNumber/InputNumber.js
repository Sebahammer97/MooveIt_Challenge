import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

// Components
import Button from "../Button/Button";

class InputNumber extends Component {
  // Definition of props types to this component
  static propTypes = {
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
  static defaultProps = {
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

  // Initializing state params of this component
  state = { isOnLimit: false };

  // Function that handles the user input
  handleInputChange = (formattedValue, value) => {
    const { onChange, disabled, minValue, maxValue } = this.props;

    // If it is disabled do nothing
    if (disabled) {
      return;
    }

    // If the father component passed a function, the input number calls it
    if (onChange) {
      // If the father component passed minimum value, maximum value or both,
      // it checks if the input is within the bounds
      if (this.numberLimits(parseInt(value), minValue, maxValue)) {
        this.setState({ isOnLimit: true });
        onChange(formattedValue);
      } else {
        // If the input value does not comply with the limits, it does not
        // perform any action
        this.setState({ isOnLimit: false });
      }
    }
  };

  // Function that verify if an input is within the bounds
  numberLimits = (number, minValue, maxValue) => {
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
  resetInputValue = () => {
    const { onChange } = this.props;

    if (onChange) {
      onChange("");
    }
  };

  render() {
    const {
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
    } = this.props;
    const { handleInputChange, resetInputValue } = this;

    // Import style of the css file
    const styles = require("./style.module.css");

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
        {reset && value.length > 0 ? (
          <Button label="X" variant="reset" onClick={resetInputValue} />
        ) : null}
      </div>
    );
  }
}

export default InputNumber;
