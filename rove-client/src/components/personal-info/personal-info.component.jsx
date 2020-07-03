import React from "react";

import { StyledPersonalInfoForm } from "./personal-info.styles";

import FormGroup from "../form-group/form-group.component";
import Input from "../input/input.component";
import Label from "../label/label.component";
import Button from "../button/button.component";

const PersonalInfoForm = props => {
  const {
    firstName,
    lastName,
    nation,
    gender,
    dateOfBirth,
    handleChange,
    preStep,
    handleSubmit
  } = props;
  return (
    <StyledPersonalInfoForm onSubmit={handleSubmit}>
      <div className="text">
        <h2>Personal Information</h2>
      </div>
      <FormGroup>
        <Input
          type="text"
          name="firstName"
          value={firstName}
          id="firstName"
          placeholder="first name"
          onChange={handleChange}
        />
        <Label htmlFor="firstName">first name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="lastName"
          value={lastName}
          id="lastName"
          placeholder="last name"
          onChange={handleChange}
        />
        <Label htmlFor="lastName">last name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="nation"
          value={nation}
          id="nation"
          placeholder="nation"
          onChange={handleChange}
        />
        <Label htmlFor="nation">nation</Label>
      </FormGroup>
      <FormGroup>
        <select
          name="gender"
          id="gender"
          onChange={handleChange}
          defaultValue={gender}
        >
          <option value="defaultValue" disabled>
            ---Select your gender---
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unidentified">Unidentified</option>
        </select>
        <Label htmlFor="gender">gender</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleChange}
        />
        <Label htmlFor="dateOfBirth">date of birth</Label>
      </FormGroup>

      <div className="form-btn-group">
        <Button type="submit" primary>
          Sign up now
        </Button>
        <Button type="button" onClick={preStep}>
          &#8592; Back
        </Button>
      </div>
    </StyledPersonalInfoForm>
  );
};

export default PersonalInfoForm;
