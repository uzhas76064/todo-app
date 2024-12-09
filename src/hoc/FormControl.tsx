import React from "react";
import styled from 'styled-components';

const Error = styled.span`
    color: #FF5722;
    font-weight: bold;
`

const FormControl = (Component) => ({input, meta, ...props}) => {
    return (
        <>
            <Component {...input} {...props}/>
            {(meta.touched && meta.error) ? <Error>{meta.error}</Error>: null}
         </>
    )
}

export default FormControl;