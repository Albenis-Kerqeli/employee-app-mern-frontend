import React, {useState} from 'react';
import Button from './Button';
const AddModal = React.lazy(() => import('./AddModal'));
const Row = React.memo(()  => {
    const [modalOpen, setModalOpen] = useState(false);


    return(
   <div className=" w-full flex flex-row flex-wrap items-center justify-between">
       <div className="container mx-sm  sm:container flex flex-row flex-wrap items-center justify-center">
           <Button className="bg-red-700" onClick={() => setModalOpen(true)}>Add Employee</Button>
           {modalOpen?<AddModal setOpenModal={setModalOpen} setClosedModal={((e)=> setModalOpen(false))}/>:null}
       </div>

      
   </div>
    )
    })
export default Row;