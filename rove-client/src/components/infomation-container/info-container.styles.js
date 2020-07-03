import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
    font-size : 1.7rem;
    width : 80%;
    margin : 0 auto;
    margin-bottom : 2rem;
    padding : 1rem 0;
    border-bottom : 1px solid gray;

    & > * {
        display : inline-block;
    }

    p {
        padding-left : 0.6rem;
        border : none;
        font-size : 1.7rem;
        background-color : inherit;
        outline : none;
    }
`