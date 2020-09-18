import styled from 'styled-components';

import { FormContainer} from "../form/form.styles";

export const StyledPersonalInfoForm = styled(FormContainer)`
    & > * {
        margin-bottom : 3rem;
    }

    h2 { 
        padding : 3rem 0;
    }

    .form-btn-group {
        margin : 2rem auto;
    }

    select {
        display : block;
        border-radius : 2rem;
        padding : 0.7rem;
        background-color : #fcf8f3;
        outline : none;
        
        option {
            display : block;
            padding : 0.6rem;
        }
    }
`