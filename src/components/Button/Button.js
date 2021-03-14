import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

class Button extends Component {
  // Definition of props types to this component
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool,
  };

  // Assigning default values for the props
  static defaultProps = {
    className: "",
    label: "Button",
    size: "",
    variant: "default",
    disabled: false,
    disabledClassName: "",
  };

  // Function that handles when the user did a click on this button
  handleButtonClick = (event) => {
    const { onClick, disabled } = this.props;

    // If it is disabled do nothing
    if (disabled) {
      return;
    }

    // If the father component passed a function, the button calls it
    onClick &&
      onClick({
        event,
      });
  };

  // Function that handles what will be shown inside the button
  renderChildren = () => {
    const { label, children } = this.props;

    // Case to show only a label
    if (label !== "Button") {
      return label;
    }

    // Case to show a label with an icon or another component
    if (children) {
      return children;
    }

    // Default case
    return "Button";
  };

  render() {
    const {
      className,
      size,
      variant,
      disabled,
      disabledClassName,
    } = this.props;

    // Import style of the css file
    const styles = require("./style.module.css");

    // Handling the different styles
    const _className = cx(
      className,
      styles[size],
      styles.button,
      styles[variant],
      {
        [styles.disabled]: disabled,
        [disabledClassName]: disabled,
      }
    );

    return (
      <div
        onClick={this.handleButtonClick}
        className={_className}
        data-testid="button"
      >
        {this.renderChildren()}
      </div>
    );
  }
}

export default Button;
