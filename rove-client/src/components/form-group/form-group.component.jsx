import React from 'react';

import {FormGroupContainer} from './form-group.styles';

const FormGroup = ({children}) => {
    return (
        <FormGroupContainer>
            {children}
        </FormGroupContainer>
    )
}

export default FormGroup;