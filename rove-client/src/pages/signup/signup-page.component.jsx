import React from 'react';

import SignUp from './../../components/sign-up-form/sign-up.component';

import {SignUpPageContainer, BackgroundImgContainer} from './signup-page.styles';
const SignUpPage = () => {
    return (
        <SignUpPageContainer>
            <BackgroundImgContainer />
            <SignUp />
        </SignUpPageContainer>
    )
}

export default SignUpPage;