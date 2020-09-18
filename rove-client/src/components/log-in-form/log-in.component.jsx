import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { LogInForm } from "./log-in.styles";

import FormGroup from "../form-group/form-group.component";
import Input from "../input/input.component";
import Label from "../label/label.component";
import Button from "../button/button.component";

import {
  userLoginStart,
  hideErrorMessage,
} from "../../redux/user/user.actions";
import { selectMessageError } from "../../redux/user/user.selectors";

const LogIn = ({ userLoginStart, errMessage, hideErrorMessage }) => {
  useEffect(() => {
    if (errMessage) {
      setTimeout(() => hideErrorMessage(), 3000);
    }
  }, [errMessage, hideErrorMessage]);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLoginStart(state);
  };

  return (
    <LogInForm onSubmit={handleSubmit} id="login_form">
      {errMessage ? <div className="errText">{errMessage}</div> : null}

      <div className="text">
        <h2>Find your love now</h2>
      </div>
      <FormGroup>
        <Input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <Label htmlFor="email">email</Label>
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <Label htmlFor="password">password</Label>
      </FormGroup>

      <div className="text">
        <span>Not have an account yet ? </span>
        <Link to="/signup">Sign up</Link>
        <span> now</span>
      </div>

      <div className="form-btn-group">
        <Button primary>Log in</Button>
        <Button as="a" href="/signup">
          Sign up
        </Button>
      </div>
    </LogInForm>
  );
};

const mapStateToProps = (state) => ({
  errMessage: selectMessageError(state),
});

const mapDispatchToProps = (dispatch) => ({
  userLoginStart: (payload) => dispatch(userLoginStart(payload)),
  hideErrorMessage: () => dispatch(hideErrorMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
