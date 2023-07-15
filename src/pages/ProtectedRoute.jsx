import { useContext } from "react";
import { StoreContext } from "../contexts/Store";

import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({children}) => {
  const {isLoggedIn} = useContext(StoreContext);
  console.log(isLoggedIn);


  if(isLoggedIn) {
    return children
  }
  else {
    return <Navigate to="/login"/>
  }

}
export default  ProtectedRoute;