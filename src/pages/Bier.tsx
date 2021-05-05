import React from 'react';
import '../css/bier.css';
import SingleBier from '../components/SingleBier';



const Bier = ({beerTypes, onDelete, onUpdate}:any) => {



    let beers = [...beerTypes];







    return(
      <>



        <h1> Bier soorten </h1>

        <div className='container'>

  {beers.map(item =>


    <SingleBier key={item.name} singleBier={item} onDelete={onDelete} onUpdate={onUpdate} />

  )}




  </div>



      </>
  )
}


export default Bier;
