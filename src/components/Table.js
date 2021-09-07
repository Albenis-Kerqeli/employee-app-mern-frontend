import React from 'react';
import { StoreContext } from '../contexts/Store';
import Axios from 'axios';
import Button from './Button';
const Table = () => {

    const {employees,setEmployees}  = React.useContext(StoreContext);

    const deleteFriend = (id) => {
        Axios.delete(`${process.env.REACT_APP_API_URL}/api/employee/delete/${id}`).then(() => {
     setEmployees(employees.filter(employee => employee._id !== id))
    
  })
}


    return (
         <section className="container  my-10 p-4 mx-md md:container  flex flex-col items-center justify-center flex-wrap  ">
        <div className="w-full  min-h-[auto]  py-3	 flex flex-row items-center justify-around gap-20 bg-gray-50   flex-wrap font-poppins  ">
            <div className="p-1 w-40 min-h-[auto]   flex items-center justify-center flex-wrap">
                <h1 className="text-center">Name</h1>
            </div>
            <div className="p-1 w-40 min-h-[auto]  flex items-center justify-center flex-wrap">
                <h1 className="text-center">Designation</h1>
            </div>
            <div className="p-1 w-[160px] min-h-[auto]   flex items-center justify-center flex-wrap ">
                <h1 className="text-center">Email</h1>
            </div>


            <div className="p-1 w-[160px] min-h-[auto] flex tems-center justify-center flex-wrap">
            <h1 className="text-center">Salary</h1>

            </div>

            <div className="p-1 w-[160px]  min-h-[auto] flex items-center justify-center flex-wrap">
            <h1 className="text-center">Actions</h1>

            </div>
        </div>
        {employees==''?<h1 className="text-center py-5 font-poppins ">Start to Add a Employee </h1>: (employees.map(employee => (
            <div key={employee._id} className="w-full  min-h-[auto]  	 flex flex-row items-center justify-around gap-20 bg-white flex-wrap  font-open  ">
            <div className="p-1 w-40 min-h-[100px]   flex items-center justify-center flex-wrap">
                <h4 className="text-center break-all">{employee.name}</h4>
            </div>
            <div className="p-1 w-[160px] max-w-[160px] min-h-[100px] flex items-center justify-center   flex-wrap ">
                <h4 className="text-center  break-all">{employee.designation}</h4>
            </div>








            <div className="p-1 w-[160px] min-h-[100px] flex items-center justify-center flex-wrap">
                <h1 className="text-center break-all">{employee.email}</h1>
            </div>

            <div className="p-1 w-[160px] min-h-[100px] flex items-center justify-center flex-wrap">
            <h4 className="text-center break-all">{employee.salary}</h4>

            </div>

            <div className="p-1 w-[160px]  min-h-[100px] flex items-center justify-center flex-wrap">
            <Button onClick={()=> deleteFriend(employee._id)} className="text-center">Delete</Button>

            </div>
        </div>
        )))} 
        


    </section>
)
        }
    

export default Table;