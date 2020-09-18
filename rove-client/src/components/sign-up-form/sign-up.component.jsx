import React, { useState } from "react";
import { connect } from "react-redux";

import PersonalInfoForm from "../personal-info/personal-info.component";
import UserInfoForm from "../user-info/user-info.component";

import { userSignupStart } from "../../redux/user/user.actions";

const SignUp = ({ userSignupStart }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    nation: "",
    gender: "defaultValue",
    dateOfBirth: "1990-01-01",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((pre) => pre + 1);
  };

  const preStep = () => {
    setStep((pre) => pre - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userSignupStart(state);
    setState({
      firstName: "",
      lastName: "",
      nation: "",
      gender: "defaultValue",
      dateOfBirth: "1990-01-01",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const {
    firstName,
    lastName,
    nation,
    gender,
    dateOfBirth,
    email,
    password,
    confirmPassword,
  } = state;

  switch (step) {
    case 1:
      return (
        <UserInfoForm
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <PersonalInfoForm
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          nation={nation}
          dateOfBirth={dateOfBirth}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          preStep={preStep}
        />
      );

    default:
      return <div>Something wrong </div>;
  }
};

const mapDispatchToProps = (dispatch) => ({
  userSignupStart: (data) => dispatch(userSignupStart(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
