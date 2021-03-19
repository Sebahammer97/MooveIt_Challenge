// Dependencies
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// Style
import styles from "./style.module.css";

function Button({
  onClick,
  disabled,
  label,
  children,
  size,
  variant,
  className,
  disabledClassName,
}) {
  // Function that handles when the user did a click on this button
  const handleButtonClick = (event) => {
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
  const renderChildren = () => {
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
    <button
      onClick={handleButtonClick}
      className={_className}
      data-testid="button"
    >
      {renderChildren()}
    </button>
  );
}

// Definition of props types to this component
Button.propTypes = {
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
Button.defaultProps = {
  className: "",
  label: "Button",
  size: "",
  variant: "default",
  disabled: false,
  disabledClassName: "",
};

export default Button;
