import AddBier from '../components/AddBier'
import AddBrouwer from '../components/AddBrouwer'
import '../css/edit.css';

const Edit = ({beerTypes, niewBeer, nieuwBrouwer}:any,) => {





const newBeer = (beer:any) =>{

  niewBeer({beer})

}

const newBrouwer = (brouwer:any) =>{

  nieuwBrouwer({brouwer})

}

    return(
  <div>

   <h1>Edit</h1>
   <div className='editComponents'>
        <div>
        <AddBier newBeer={newBeer} />
        </div>

        <div>
        <AddBrouwer newBrouwer={newBrouwer} beerTypes={beerTypes} />
        </div>
    </div>
  </div>




  )
}


export default Edit;
