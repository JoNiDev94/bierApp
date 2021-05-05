import {useState} from 'react'
import RegularSingleBrouwer from './RegularSingleBrouwer'
import UpdateSingleBrouwer from './UpdateSingleBrouwer'

const SingleBrouwer = ({singleBrouwer, onDelete, beerTypes, onUpdate}:any) => {



const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);

const showForm = () => {
  setShowUpdateForm(!showUpdateForm);

}


    return(

 <>
    {!showUpdateForm?<RegularSingleBrouwer  singleBrouwer={singleBrouwer} onDelete={onDelete} showUpdate = {showForm} beerTypes={beerTypes}/>
    :<UpdateSingleBrouwer  singleBrouwer={singleBrouwer} showUpdate = {showForm} beerTypes={beerTypes} onUpdate={onUpdate}/>
  }
</>



  )
}


export default SingleBrouwer;
