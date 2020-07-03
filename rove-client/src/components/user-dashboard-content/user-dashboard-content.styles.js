import styled from 'styled-components';

export const UserDashboardContentContainer = styled.div`
    height : 90%;
    & > * {
        height : 100%;
        overflow-y : scroll;
        overflow-x : hidden;
    }
`