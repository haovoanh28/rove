import styled from 'styled-components';

import variables from '../../_variables';

export const EditProfileContainer = styled.div`
    height : 90vh;
    background-color : #ffd3b6;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    padding : 3rem;

    @media only screen and (max-width : ${variables.largeTab}) {
        height : 100%;
        flex-direction : column;
    }

    @media only screen and (max-width : ${variables.phone}) {
        padding: 3rem 0;
    }
`