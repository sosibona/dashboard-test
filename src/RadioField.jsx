import React from "react";
import { Field, ErrorMessage } from "formik";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Test from "./ErrorField";

const genderItemsRadio = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
];

const InputRadio = ({value, onChange, onBlur, className, name, children, label}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

const RadioField = ({ label, name, className }) => {
  const RadioList = genderItemsRadio.map((item) => (
    <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
  ));
  return (
    <div>
      <Field
        name={name}
        as={InputRadio}
        label={label}
        className={className}
      >
        {RadioList}
      </Field>
      <ErrorMessage name={name} component={Test} />
    </div>
  );
};

export default RadioField;
