import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import user from "../img/user_default.png";
import Button from "@material-ui/core/Button";
import InputField from "../fields/input/InputField";
import SelectField from "../fields/select/SelectField";
import RadioField from "../fields/radio/RadioField";
import ErrorField from "../fields/error/ErrorField";
import getUserInfo from "./user.actions";
import PropTypes from "prop-types";
import "./profile.scss";

const initialValues = {
  name: "",
  email: "",
  password: "",
  age: "",
  language: "",
  gender: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  age: Yup.number("Invalid type").required("Required"),
});

const useStyles = makeStyles(() => ({
  input: {
    marginBottom: "20px",
    width: "200px",
    outline: "none",
  },
  uploadInput: {
    display: "none",
  },
  radioInput: {
    flexDirection: "row",
    color: "rgba(0, 0, 0, 0.54)",

    "&:checked": {
      color: "#3fb580",
    },
  },
  uploadButton: {
    border: "none",
    width: "200px",
    height: "40px",
    backgroundColor: "#3fb580",

    "&:hover": {
      backgroundColor: "#3f51b5",
    },
  },
}));

const UserProfile = ({ getUserData }) => {
  const classes = useStyles();
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const onSubmit = (values) => {
    const userData = {
      ...values,
      avatar,
    };
    getUserData(userData);
  };

  const handleImageChange = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setAvatar(URL.createObjectURL(file));
      setAvatarPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="profile">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="profile__form">
          <div className="profile__user-info">
            <div className="profile__avatar">
              <div className="profile__img">
                <img
                  className="profile__user-avatar"
                  src={avatarPreview || user}
                  alt="user_avatar"
                />
              </div>
              <input
                accept="image/*"
                className={classes.uploadInput}
                id="contained-button-file"
                name="avatar"
                type="file"
                onChange={(event) => handleImageChange(event)}
              />
              <label htmlFor="contained-button-file">
                <Button
                  className={classes.uploadButton}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload
                </Button>
                <ErrorMessage name="avatar" component={ErrorField} />
              </label>
            </div>
            <div className="profile__info">
              <InputField
                label="Name"
                name="name"
                type="text"
                className={classes.input}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                className={classes.input}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                className={classes.input}
              />
            </div>
            <div className="profile__info">
              <InputField
                label="Age"
                name="age"
                type="number"
                className={classes.input}
              />
              <SelectField
                label="Language"
                name="language"
                className={classes.input}
              />
              <RadioField
                label="Gender"
                name="gender"
                className={classes.radioInput}
              />
              <button className="profile__btn-save" type="submit">
                Save
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const mapDispatch = {
  getUserData: getUserInfo,
};

UserProfile.propTypes = {
  getUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(UserProfile);
