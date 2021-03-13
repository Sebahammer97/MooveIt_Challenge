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

  handleButtonClick = (event) => {
    const { onClick, disabled } = this.props;

    if (disabled) {
      return;
    }

    onClick &&
      onClick({
        event,
      });
  };

  renderChildren = () => {
    const { label, children } = this.props;

    if (label !== "Button") {
      return label;
    }

    if (children) {
      return children;
    }

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

    const styles = require("./style.module.css");

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
