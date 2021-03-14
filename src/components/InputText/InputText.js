import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// Components
import Button from "../Button/Button";

class Input extends Component {
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
    type: PropTypes.string.isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    textarea: PropTypes.bool,
    reset: PropTypes.bool,
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
    type: "text",
    minLength: 0,
    maxLength: 9999,
    textarea: false,
    reset: false,
  };

  // Function that handles the user input
  handleInputChange = (event) => {
    const { onChange, disabled } = this.props;

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
  resetInputValue = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange("");
    }
  };

  // Function that handles what will be shown inside the input text
  renderChildren = () => {
    const { placeholder, children } = this.props;

    // Case to show only a placeholder
    if (placeholder) {
      return placeholder;
    }

    // Case to show a placeholder with an icon or another component
    if (children) {
      return children;
    }

    // Default case
    return "";
  };

  render() {
    const {
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
    } = this.props;

    // Import style of the css file
    const styles = require("./style.module.css");

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
          onChange={this.handleInputChange}
          disabled={disabled}
          data-testid="input-text"
        />
        {reset && value.length > 0 ? (
          <Button label="X" variant="reset" onClick={this.resetInputValue} />
        ) : null}
      </div>
    );
  }
}

export default Input;
