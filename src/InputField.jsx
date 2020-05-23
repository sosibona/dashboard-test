import React from "react";
import { Field, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import Test from "./ErrorField";

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
      <ErrorMessage name={name} component={Test} />
    </div>
  );
};

export default InputField;
