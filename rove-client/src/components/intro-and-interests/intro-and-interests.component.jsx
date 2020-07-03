import React from "react";

import { IntroAndInterestsContainer } from "./intro-and-interests.styles";

import FormGroup from "../form-group/form-group.component";
import Label from "../label/label.component";

const IntroAndInterests = (props) => {
  const { introduction, interests, handleChange } = props;
  return (
    <IntroAndInterestsContainer>
      <FormGroup>
        <Label htmlFor="introduction">introduction</Label>
        <textarea
          name="introduction"
          id="introduction"
          cols="30"
          rows="10"
          value={introduction}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="interests">interests</Label>
        <textarea
          name="interests"
          id="interests"
          cols="30"
          rows="10"
          value={interests}
          onChange={handleChange}
        />
      </FormGroup>
    </IntroAndInterestsContainer>
  );
};

export default IntroAndInterests;
