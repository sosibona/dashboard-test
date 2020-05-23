import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Test from "./ErrorField";

const positionItemsSelect = [
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "Ruby on Rails",
    value: "ruby_on_rails",
  },
  {
    label: "Python",
    value: "python",
  },
];

const InputSelect = ({
  value,
  onChange,
  onBlur,
  className,
  name,
  children,
  label,
}) => {
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        label={label}
      >
        {children}
      </Select>
    </FormControl>
  );
};

const SelectField = ({ label, name, className }) => {
  const selectList = positionItemsSelect.map((item) => (
    <MenuItem key={item.value} value={item.value}>
      {item.label}
    </MenuItem>
  ));
  return (
    <div>
      <Field name={name} as={InputSelect} label={label} className={className}>
        {selectList}
      </Field>
      <ErrorMessage name={name} component={Test} />
    </div>
  );
};

InputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SelectField;
