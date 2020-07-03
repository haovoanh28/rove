import React from "react";

import {BriefInfoContainer} from './brief-info.styles';

import FormGroup from "../form-group/form-group.component";
import Input from "../input/input.component";
import Label from "../label/label.component";
import Button from '../button/button.component';

const BriefInfo = (props) => {
  const { firstName, lastName, nation, handleChange } = props;
  return (
    <BriefInfoContainer>
      <FormGroup>
        <Input
          type="text"
          placeholder="first name"
          value={firstName}
          name="firstName"
          id="firstName"
          onChange={handleChange}
        />
        <Label htmlFor="firstName">first name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="last name"
          value={lastName}
          name="lastName"
          id="lastName"
          onChange={handleChange}
        />
        <Label htmlFor="lastName">last name</Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="nation"
          value={nation}
          name="nation"
          id="nation"
          onChange={handleChange}
        />
        <Label htmlFor="nation">nation</Label>
      </FormGroup>
      <Button type="submit" primary>Submit Changes</Button>
    </BriefInfoContainer>
  );
};

export default BriefInfo;
