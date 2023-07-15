
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {StoreContext} from '../contexts/Store';
import {useNavigate} from 'react-router-dom'; 
const Navbar = () => {
  const navigate = useNavigate();

  const {isLoggedIn, setIsLoggedIn} = useContext(StoreContext);

const handleLogout = () => {
  localStorage.removeItem('token');
  setIsLoggedIn(false);
  navigate('/');
}

    return(
        <div className="w-full min-h-50  p-4 flex-wrap flex items-center justify-around bg-black	 gap-5  ">
<div className="md:container-sm flex items-center justify-center flex-wrap ">
  <Link to="/" className="text-white text-center font-poppins">Employee App</Link>
</div>
<div className="md:container-sm flex items-center justify-center flex-wrap flex-row
">
  <nav className="w-auto flex items-center flex-wrap flex-row m-1 justify-center text-base font-open ">



  <li className="list-none px-2">
  {isLoggedIn? <a className="text-white " href={'/'} onClick={handleLogout}>Logout</a> : 
  
  
    <Link className="text-center text-white" to="/register">Register</Link> }
  </li>



  </nav>
</div>
</div>   
    )
}

export default Navbar;