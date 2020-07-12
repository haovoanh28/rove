import styled from 'styled-components';

import variables from '../../_variables';

export const AboutMeContainer = styled.div`
    color : #698474;
`
export const TextContainer = styled.div`
    width : 75%;
    margin : 2rem auto;

    h3, p {
        padding-top : 1rem;
    }

    p {
        padding-left : 1.4rem;
        line-height : 2.3rem;
        text-align : justify;
    }

    @media only screen and (max-width : ${variables.phone}) {
        width: 90%;

        p {
            padding-left : 0;
        }
    }
`