import {useContext,useEffect,useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../contexts/Store';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const {setIsLoggedIn, isLoggedIn } = useContext(StoreContext);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

function handleEmail(e) {
  setEmail(e.target.value);
}

function handlePassword(e) {
  setPassword(e.target.value);
}

  async function handleLogin(e){
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please enter all fields');
    }
    
    else {
      const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
      }
       await Axios.post(`${import.meta.env.VITE_API_URL}/api/login`, { username: email, password: password }, {headers}).then((res) => {

        if (!res.ok) {
          console.log('Something went wrong, please try again');

        }
        else {
          localStorage.setItem("token", res.data.token);
          setIsLoggedIn(true)
          navigate('/');
        }


      });


    }


  }


  return (
    <div className="min-h-[85vh] flex items-center justify-center  flex-col ">
      <div className="bg-white rounded-sm  w-[400px] min-h-[350px] shadow-sm  items-center justify-center flex flex-col ">
        <div className="my-3">
          <img
            className="mx-auto h-12 w-auto"
            loading="lazy" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow" width="300" height="300"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>

        </div>
        <form onSubmit={handleLogin} className="w-full px-10 py-2 gap-[5px]  flex items-center justify-center flex-col " action="#" method="POST">
        <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                onChange={handleEmail}
                required
                className="appearance-none rounded-none w-full px-3 py-3 my-3 border border-neutral-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                onChange={handlePassword}
                required
                className="appearance-none rounded-sm w-full px-3 py-3 my-3 border border-neutral-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <Button type="submit"className="py-2 my-5 px-5 w-full   text-white">Submit</Button>
         </form>
      </div>
    </div>
  )
}
export default Login;