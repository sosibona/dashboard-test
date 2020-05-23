import React from "react";
import PropTypes from "prop-types";

const ErrorField = (props) => {
  return <div className="error">{props.children}</div>;
};

ErrorField.propTypes = {
  children: PropTypes.string,
};

export default ErrorField;
