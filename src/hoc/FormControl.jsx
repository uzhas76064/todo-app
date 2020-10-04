import React from "react";

const FormControl = (Component) => ({input, meta, ...props}) => {
    return <Component {...input} {...props}/>
}

export default FormControl;