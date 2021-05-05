import {useState} from 'react';
import '../css/addBier.css';
let beerTrue:any[] = [];

const AddBrouwer = ({beerTypes, newBrouwer}:any) => {
const[showAddBier,setShowAddBier] = useState<boolean>(false);
const [name, setName] = useState<string>('');
const [city, setLocatie] = useState<string>('');
const [description, setDescription] = useState<string>('');
const [beerIds, setBierSoorten] = useState<any>('');



const beerAll = [...beerTypes];

//push checked beers in array and afterward setBierSoorten to add it to the state
const pushBeer = (name:any) => {

//check if it already exists (when you check and uncheck one type multiple times )
//if its the first time push
//if tis the second time splice
if (beerTrue.indexOf(name) == -1) {

    beerTrue.push(name);

} else{

   beerTrue.splice(beerTrue.indexOf(name), 1);
}

//set the arrar, but map the arrar with a comma and a whitespace first


setBierSoorten(beerTrue.map(x=> x+", "));

};



const submit = (e:any) => {
  //prevent default submit
  e.preventDefault();





  //check for empty fields

  if (!name||!city||!beerIds) {
      alert('Empty fields!');
      return;
  }

  // add property to component attribute

  newBrouwer({ name, city, beerIds})

  //close add form
  setShowAddBier(false);

  //empty fields
  setName('');
  setLocatie('');
  setBierSoorten ('');
  beerTrue = [];



}

    return(
  <div className = 'addbier'>

   <h2>Voeg brouwer toe:</h2>

   <button className={`${!showAddBier? 'add-btn addBierBtn': 'add-btn closeBierBtn'}`} onClick={()=>setShowAddBier(!showAddBier)}>{!showAddBier?'Add':'Close'}</button>

{showAddBier?<form onSubmit={submit}>
    <label >Brouwerij</label>
    <input
    name='name'
    type="text"
    value={name}
    onChange = {(e) => {setName(e.target.value)}}
    />


    <label >Locatie</label>
    <input
    name='city'
    type="text"
    value={city}
    onChange = {(e) => {setLocatie(e.target.value)}}
    />


    <label >Bier soorten</label>

    <div className='check-grid'>

            <div className='list1'>
              {beerAll.map(item =>

                <input
                key ={item.id}
                name='beerIds'
                type='checkbox'
                value={item.name}
                onChange={(e)=>{pushBeer(e.target.value)}}

                />
              )}
            </div>
            <div className='list2'>
              {beerAll.map(item =>

                <p key={item.id}>


                {item.name}

                </p>
              )}
            </div>


      </div>

    <button name='bier-btn' type="submit">Toevoegen</button>
    </form>:''}
  </div>




  )
}


export default AddBrouwer;
