import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import ErrorField from "./ErrorField";

const InputField = ({ label, name, type, className }) => {
  return (
    <div>
      <Field
        as={TextField}
        label={label}
        name={name}
        type={type}
        id={name}
        variant="outlined"
        className={className}
      />
      <ErrorMessage name={name} component={ErrorField} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
