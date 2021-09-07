import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios';
export const StoreContext = createContext();
const StoreProvider = (props) => {
    const token =localStorage.getItem('token');
    const [employees, setEmployees] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
const getEmployees = async () => {

    if(token){
        setIsLoggedIn(true);

        await axios.get(`${process.env.REACT_APP_API_URL}/api/employee`, {
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "x-access-token": localStorage.getItem("token"),
          },
        }).then(res => {
            setEmployees(res.data);




        }).catch(err => {
            console.log(err);
        })
    }
    else {
        setIsLoggedIn(false);
    }


}
getEmployees();
    },[token]);
    
return(
    <StoreContext.Provider value={{
        employees,
        setEmployees,
        isLoggedIn,
        setIsLoggedIn
    }}>
        {props.children}
    </StoreContext.Provider>
)
}

export default StoreProvider;