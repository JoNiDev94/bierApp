import UpdateSingleBier from './UpdateSingleBier'
import RegularSingleBier from './RegularSingleBier'
import {useState} from 'react'


const SingleBier = ({singleBier, onDelete, onUpdate}:any) => {

const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);

const showForm = () => {
  setShowUpdateForm(!showUpdateForm);

}


    return(


<>

       {!showUpdateForm?<RegularSingleBier  singleBier={singleBier} onDelete={onDelete} showUpdate = {showForm} />
       :<UpdateSingleBier  singleBier={singleBier} onDelete={onDelete} onUpdate={onUpdate} showUpdate = {showForm}/>
     }
</>

  )
}


export default SingleBier;
