import React from 'react';
import '../css/bier.css';
import SingleBrouwer from '../components/SingleBrouwer';


const Brouwers = ({types, onDelete, beerTypes, onUpdate}:any) => {

    let allBrouwers = [...types];





    return(
      <>
    <div><h1> Brouwerijen</h1></div>
  <div className='container'>



    {allBrouwers.map(item =>


      <SingleBrouwer key={item.name} singleBrouwer={item} onDelete={onDelete} beerTypes={beerTypes} onUpdate={onUpdate}  />

    )}




  </div>



      </>
  )
}


export default Brouwers;
