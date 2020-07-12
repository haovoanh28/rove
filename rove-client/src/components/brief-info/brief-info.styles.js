import styled from 'styled-components';

import variables from '../../_variables';

export const BriefInfoContainer = styled.div`
    flex : 0 0 40%;
    align-self : center;
    text-align : center;

    @media only screen and (max-width : ${variables.phone}) {
        order : 2;
        width: 100%;
    }
`;