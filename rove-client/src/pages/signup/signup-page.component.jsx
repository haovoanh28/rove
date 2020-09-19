import React from "react";
import { connect } from "react-redux";

import SignUp from "./../../components/sign-up-form/sign-up.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  SignUpPageContainer,
  BackgroundImgContainer,
} from "./signup-page.styles";
const SignUpPage = ({ isPending, ...otherProps }) => {
  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <SignUpPageContainer>
          <BackgroundImgContainer />
          <SignUp />
        </SignUpPageContainer>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isPending: state.user.isPending,
});

export default connect(mapStateToProps)(SignUpPage);
