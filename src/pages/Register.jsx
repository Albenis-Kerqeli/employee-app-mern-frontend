import  {useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import { StoreContext } from '../contexts/Store';

 
const Register = () => {
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [phone,setPhone] = useState(0);

   const [password,setPassword] = useState('');
   const [error,setError] = useState('');
   const navigate = useNavigate();
   const {isLoggedIn} = useContext(StoreContext);



   useEffect(() => {
    if(isLoggedIn) {
      navigate("/");
    }
   
    },[isLoggedIn,navigate])

   
function handleName(e) {
    setName(e.target.value);
}

function handleEmail(e) {
    setEmail(e.target.value);
}

function handlePhone(e) {
    setPhone(e.target.value);
}
function handlePassword(e) {
    setPassword(e.target.value);
}

async  function handleRegister(e){
  e.preventDefault();
 if(name === '' || password === '' || email === '' || phone === 0){
   setError('Please enter all fields');
 }else {
  const headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  }
   
  const res = await Axios.post(`${import.meta.env.VITE_API_URL}/api/register` ,{name,email, phone,password} , {headers});
  if(!res.ok) {
    console.error("Something went wrong, please try again!");
  } else {
    alert('You registered successfully');
    navigate('/');
  }

 }
}                







  return (
    <div className="min-h-[89vh] flex items-center justify-center  flex-col">
      <div className="bg-white rounded-sm  w-[400px] min-h-[350px] shadow-sm  items-center justify-center flex flex-col ">
      <div className="my-3">
          <img
            className="mx-auto h-12 w-auto"
            loading="lazy" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow" width="300" height="300"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>

        </div>
        <form onSubmit={handleRegister} className="w-full px-10 py-2 gap-[5px]  flex items-center justify-center flex-col " action="#" method="POST">
        <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                onChange={handleName}
                required
                className="appearance-none rounded-none w-full px-3 py-3 my-2 border border-neutral-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
        <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                onChange={handleEmail}
                required
                className="appearance-none rounded-none w-full px-3 py-3 my-2 border border-neutral-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              <input
                id="phone"
                name="email"
                type="tel"
                autoComplete="tel"
                onChange={handlePhone}
                required
                className="appearance-none rounded-none w-full px-3 py-3 my-2 border border-neutral-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone"
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                onChange={handlePassword}
                required
                className="appearance-none rounded-sm w-full px-3 py-3 my-2 border border-neutral-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <Button type="submit"  className="py-2 my-5 w-full px-5">Submit</Button>
         </form>
      </div>
    </div>
  )
}
export default Register;