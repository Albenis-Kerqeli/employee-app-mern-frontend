import React, {memo} from 'react';

const Button = memo(function Button({onClick, children}) {
    return(
        <button onClick={onClick} className="px-3 py-3 bg-red-500 border-transparent text-white">{children}</button>
    )
  });

  export default Button;