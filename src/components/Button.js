const Button  = ({children , onClick}) => {


    return(
        <button onClick={onClick} className="px-3 py-3 bg-red-500 border-transparent text-white">{children}</button>
    )
}

export default Button;