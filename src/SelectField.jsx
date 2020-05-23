import React from "react";
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

const InputSelect = ({value, onChange, onBlur, className, name, children, label}) => {
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-required-label">
        {label}
      </InputLabel>
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

export default SelectField;
