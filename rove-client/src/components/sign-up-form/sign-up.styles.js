import styled from 'styled-components';
import {FormContainer} from '../form/form.styles';

import variables from '../../_variables';

export const SignUpForm = styled(FormContainer)`
    width : 30%;
    background-color : #fcf8f3;

    button {
        margin-bottom : 3rem;
    }

    @media only screen and (max-width : ${variables.tab}) {
        width: 70%;
        margin-bottom : 1rem;
    }

    @media only screen and (max-width : ${variables.phone}) {
        width: 90%
    }
`
