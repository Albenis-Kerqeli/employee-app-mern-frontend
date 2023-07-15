import  {useState, useContext, useEffect}from 'react';

import Button from './Button';
import AddModal from './AddModal';
import { StoreContext } from '../contexts/Store';
const Row = ()  => {
    const {employees,setEmployees , filteredEmployee} = useContext(StoreContext);
    const [modalOpen, setModalOpen] = useState(false);
const [search,setSearch] = useState('');

function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
}
function handleOpen(e) {
    setModalOpen(false);
}

useEffect(() => {
if(search==="" ) {
    setEmployees(filteredEmployee);
} else {
    const results =[...employees].filter(filtere =>
        filtere.name.toLowerCase().includes(search)
      );
      setEmployees(results);
    
}
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  
    return(
   <div className=" container   px-4 mx-md md:container  flex flex-col items-center center flex-wrap  ">
       <div className="container mx-md   sm:container flex flex-row  items-center justify-between flex-wrap">
       <div className="flex flex-row items-center justify-center   flex-wrap">
           <Button  onClick={() => setModalOpen(true)}>Add Employee</Button>
           {modalOpen?<AddModal setOpenModal={setModalOpen} setClosedModal={handleOpen}/>:null}
           </div>

           <form className="flex flex-row items-center justify-center gap-5 flex-wrap">
           <input type="text" className="p-3 border border-neutral-200" value={search} placeholder="Enter Employee name" onChange={handleSearch} />
               <Button>
Search                   
               </Button>
           </form>
       </div>

      
   </div>
    )
    };
export default Row;