import styled from 'styled-components';

import variables from '../../_variables';

export const UserDashboardContentContainer = styled.div`
    height : 90%;
    & > * {
        height : 100%;
        overflow-y : scroll;
        overflow-x : hidden;
    }

    @media only screen and (max-width : ${variables.tab}) {
        height : 50rem;
    }
`