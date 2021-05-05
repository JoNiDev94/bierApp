import {useState} from 'react';
import '../css/addBier.css';


const AddBier = ({newBeer}:any) => {
const[showAddBier,setShowAddBier] = useState<boolean>(false);
const [name, setName] = useState<string>('');
const [percentage, setAlc] = useState<number|string>('');
const [description, setDescription] = useState<string>('');
const [soort, setType] = useState<string>('');
const typesBeer:string[] = ['Pilsner', 'IPA', 'Wheat', 'Brown', 'Porter', 'Stout', 'Sour'];


const submit = (e:any) => {

  //prevent default submit
  e.preventDefault();



  //check for empty fields

  if (!name||!percentage||!description||!soort) {
      alert('Empty fields!');
      return;
  }


  // add property to component attribute

  //convert soort into index for API
  let type = typesBeer.indexOf(soort);


  newBeer({name, percentage, description, type})

  //close add form
  setShowAddBier(false);

  //empty fields
  setName('');
  setAlc('');
  setDescription('');
  setType('');



}

    return(
  <div className = 'addbier'>

   <h2>Voeg bier toe:</h2>

   <button className={`${!showAddBier? 'add-btn addBierBtn': 'add-btn closeBierBtn'}`} onClick={()=>setShowAddBier(!showAddBier)}>{!showAddBier?'Add':'Close'}</button>

{showAddBier?<form onSubmit={submit}>
    <label >Bier naam</label>
    <input
    name='name'
    type="text"
    value={name}
    onChange = {(e) => {setName(e.target.value)}}
    />


    <label >Alcohol percentage (%)</label>
    <input
    name='percentage'
    type="number"
    value={percentage}
    onChange = {(e) => {setAlc(e.target.value)}}
    />

    <label >Beschrijving</label>
    <textarea
    name='description'
    value={description}
    onChange = {(e) => {setDescription(e.target.value)}}
    />

    <label >Type</label>
    <div className ='check-grid'>


        <div className='list1'>
            {typesBeer.map(soort =>
              <input
              key={soort}
              name= 'beerType'
              type="radio"
              value= {soort}
              onChange = {(e) => {setType(e.currentTarget.checked?e.target.value:'')}}
              />

             )}


          </div>
          <div className='list2'>
          {typesBeer.map(soort =>
            <div key={soort}>{soort}</div>
           )}
          </div>
    </div>




    <button name='bier-btn' type="submit">Toevoegen</button>
    </form>:''}
  </div>




  )
}


export default AddBier;
