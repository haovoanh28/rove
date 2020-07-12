import styled from 'styled-components';

import variables from '../../_variables';

export const StyledUserCardsCollection = styled.div`
    display : flex;
    justify-content : space-evenly;
    flex-wrap : wrap;
    padding : 1.5rem;

    @media only screen and (max-width : ${variables.tab}) {
        padding : 1.5rem 0;
    }
`