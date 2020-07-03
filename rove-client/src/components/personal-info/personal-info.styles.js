import styled from 'styled-components';

import { FormContainer} from "../form/form.styles";

export const StyledPersonalInfoForm = styled(FormContainer)`
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