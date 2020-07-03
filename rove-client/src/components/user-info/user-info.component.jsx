import React, { useState } from "react";

import {StyledUserInfoForm} from './user-info.styles';

import FormGroup from "../form-group/form-group.component";
import Input from "../input/input.component";
import Label from "../label/label.component";
import Button from "../button/button.component";

const UserInfoForm = props => {
  const { email, password, confirmPassword, handleChange, nextStep } = props;

  const [err, setErr] = useState("");

  const check = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErr("Password not match");
      setTimeout(() => {
        setErr("");
      }, 2000);
      return;
    }

    nextStep();
  };

  return (
    <StyledUserInfoForm>
      {err ? <div className="errText">Password not match</div> : null}
      <div className="text">
        <h2>Sign up for free !</h2>
      </div>
      <FormGroup>
        <Input
          type="text"
          name="email"
          value={email}
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <Label htmlFor="email">email</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          value={password}
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Label htmlFor="password">password</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          id="confirmPassword"
          placeholder="confirm password"
          onChange={handleChange}
        />
        <Label htmlFor="confirmPassword">confirm password</Label>
      </FormGroup>

      <Button primary type="button" onClick={check}>
        Next &#8594;
      </Button>
    </StyledUserInfoForm>
  );
};

export default UserInfoForm;
