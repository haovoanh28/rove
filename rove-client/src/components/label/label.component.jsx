import React from 'react';

import {StyledLabel} from './label.styles';

const Label = ({children, ...props}) => {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    )
};

export default Label;