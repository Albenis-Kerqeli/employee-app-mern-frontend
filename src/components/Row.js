import React, {useState} from 'react';
import Button from './Button';
const AddModal = React.lazy(() => import('./AddModal'));
const {StoreContext} = require('../contexts/Store');
const Row = React.memo(()  => {
    const {employees,setEmployees} = React.useContext(StoreContext);
const {filteredEmployee , setFilteredEmployee} = React.useContext(StoreContext);
    const [modalOpen, setModalOpen] = useState(false);
const [search,setSearch] = useState('');

const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
}

React.useEffect(() => {

if(search=="" ) {
    setEmployees(filteredEmployee);
} else {
    const results =[...employees].filter(filtere =>
        filtere.name.toLowerCase().includes(search)
      );
      setEmployees(results);
    
}
  }, [search]);
    return(
   <div className=" w-full flex flex-row flex-wrap items-center justify-between py-5">
       <div className="container mx-sm  sm:container flex flex-row flex-wrap items-center justify-around">
           <Button className="bg-red-700" onClick={() => setModalOpen(true)}>Add Employee</Button>
           {modalOpen?<AddModal setOpenModal={setModalOpen} setClosedModal={((e)=> setModalOpen(false))}/>:null}

           <form className="flex flex-row items-center justify-center gap-10">
           <input type="text" className="py-3" value={search} placeholder="Enter Employee name" onChange={handleSearch} />
               <Button>
Search                   
               </Button>
           </form>
       </div>

      
   </div>
    )
    })
export default Row;