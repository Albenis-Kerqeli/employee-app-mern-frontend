import {useContext} from 'react';
import { StoreContext } from '../contexts/Store';
import Axios from 'axios';
import Button from './Button';

const tableHeaders = ['Name','Designation','Email','Salary','Actions']


const Table = ()  => {
    const {employees,setEmployees} = useContext(StoreContext);

    // const employees = [
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     },
    //     {
    //         name:'John Doe',
    //         designation:"Software Engineer",
    //         email:"johndoe@example.com",
    //         salary:40000,

    //     }
    
    
    // ]

    async function deleteFriend(id) {
        await Axios.delete(`${import.meta.env.VITE_API_URL}/api/employee/delete/${id}`).then(() => {
     setEmployees(employees.filter(employee => employee._id !== id))
    
  }).catch(err => console.log(err))

}

    return (
         <section className="w-full container  my-10 p-4 mx-md md:container  flex flex-col items-center justify-center flex-wrap ">
        <div className="w-full  min-h-[auto] shadow-sm  py-3 border border-neutral-200  	 flex flex-row items-center justify-around gap-20 bg-white   flex-wrap font-poppins  ">
           {tableHeaders.map((header,i) => (
            <div key={i} className="p-1 w-40 min-h-[auto]  flex items-center justify-center flex-wrap">
            <h1 className="text-center font-bold">{header}</h1>
        </div>
           ))}
            </div>
        
       <div className='w-full  flex items-center justify-center flex-wrap flex-col overflow-x-hidden '>
       {employees.length === 0 ? <h1 className="text-center py-5 font-poppins ">No table items yet</h1>: (employees.map(employee => (
            <div key={employee._id} className="w-full border-b-2 border-neutral-100  min-h-[auto]  	 flex flex-row items-center justify-around gap-20 bg-white flex-wrap  font-open  ">
            <div className="p-1 w-40 min-h-[100px]   flex items-center justify-center flex-wrap">
                <h4 className="text-center break-all">{employee.name}</h4>
            </div>
            <div className="p-1 w-[160px] max-w-[160px] min-h-[100px] flex items-center justify-center   flex-wrap ">
                <h4 className="text-center  break-all">{employee.designation}</h4>
            </div>
            
            








            <div className="p-1 w-[160px] min-h-[100px] flex items-center justify-center flex-wrap">
                <h4 className="text-center break-all">{employee.email}</h4>
            </div>

            <div className="p-1 w-[160px] min-h-[100px] flex items-center justify-center  flex-wrap">
            <h4 className="text-left break-all">{employee.salary}</h4>

            </div>

            <div className="p-1 w-[160px]  min-h-[100px] flex items-center justify-center flex-wrap">
            <Button onClick={(e) => deleteFriend(employee._id)} className="text-center">Delete</Button>

            </div>
            
        </div>
        )))} 
        
       </div>


    </section>
)
        };
    

export default Table;