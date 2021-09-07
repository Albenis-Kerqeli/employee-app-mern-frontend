import '../styles/Modal.css';
import React, {useContext,useState } from 'react'
import { StoreContext } from '../contexts/Store';
import Axios from 'axios';

function AddModal({ setOpenModal ,setClosedModal , children }) {
  // Declare states for form
  const {employees,setEmployees}  = useContext(StoreContext);
const [name,setName] = useState('');
const [designation,setDesignation] = useState('');
const [email,setEmail] = useState('');
const [salary,setSalary] = useState('');




const addEmployee =  async (e) => {
  e.preventDefault();

if(name==="" || designation==="" || email==="" || salary===""){
  alert("Please fill all the fields");
}
else {


const headers = {
  'Content-Type' : 'application/json',
  'Accept' : 'application/json',
  "x-access-token": localStorage.getItem("token"),
}

 Axios.post(`${process.env.REACT_APP_API_URL}/api/employee/store`, {
  name:name,
  designation:designation,
  email:email,
  salary:salary
 }, { headers })
.then(res => {
if(res.data!=={}) {
  setEmployees(employees => [...employees, res.data]);
  setName('');
  setDesignation('');
  setEmail('');
  setSalary('');
  setOpenModal(true);
  setClosedModal(false);
}
else {
  setEmployees(employees);

}

}).catch(err=> {
  alert(err);
})
 }

}
    return (
      <div className="modalBackground">
        <div className="modalContainer">


        <div className="modalTitle">Create Employee</div>

        <div className="modalBody">
        <form type="submit">
        
        <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name" required/>
<input type="text" onChange={(e)=> setDesignation(e.target.value)}  placeholder="Enter your Designation" requird />
<input type="text" onChange={(e)=> setEmail(e.target.value)}   placeholder="Enter your Email" required/>
<input type="number" onChange={(e)=> setSalary(e.target.value)}   placeholder="Enter your Salary" required />


        </form>

            
        </div>

<div className="modalRow">
<div className="modalButtons">
<button className="btn-base createBtn" onClick={addEmployee}>
Create
</button>
<button className="btn-base deleteBtn"  onClick={setClosedModal}>
    Close
    </button>
</div>

</div>
          

        </div>
      </div>
    );
  }
  
  export default AddModal;