import React from 'react';

const Button = ({onClick, children,fullWidth,type,className}) => {
    return(
        <button type={type || "button"} onClick={onClick} className={ ` ${className} px-3 py-3 bg-indigo-500 border-transparent my-3 text-white`}>{children}</button>
    )
  };

  export default Button;