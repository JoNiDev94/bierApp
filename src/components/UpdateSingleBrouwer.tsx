import '../css/bewerk.css';
import {useState} from 'react';
let beerTrue:any[] = [];

const UpdateSingleBrouwer = ({singleBrouwer, showUpdate, beerTypes, onUpdate}:any) => {


//useStates
const [id,setId] = useState(singleBrouwer.id)
const [name, setName] = useState<string>(singleBrouwer.name);
const [city, setLocatie] = useState<string>(singleBrouwer.city);
const [beerIds, setBierSoorten] = useState<any>(singleBrouwer.beerIds);



//all beer types for list:

const beerAll = [...beerTypes];

//onsubmit

const submit = (e:any) => {
  e.preventDefault();
  showUpdate();


  onUpdate({id, name, city, beerIds});

}


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

//set the array, but map the arrar with a comma and a whitespace first

setBierSoorten(beerTrue);


  };




    return(

      <div>
       <form onSubmit={submit} className='updateForm'>
           <label >Name</label>
           <input
           name='name'
           type="text"
           placeholder={singleBrouwer.name}
           onChange = {(e) => {setName(e.target.value)}}
           />


           <label >Locatie</label>
           <input
           name='locatie'
           type="text"
           placeholder={singleBrouwer.city}
           onChange = {(e) => {setLocatie(e.target.value)}}
           />

           <label >Bier soorten</label>

           <div className='check-grid'>

                   <div className='list1'>
                     {beerAll.map(item =>

                       <input
                       key ={item.id}
                       name='soort'
                       type='checkbox'
                       value={item.id}
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

       <button className='BewerkBtn'>Update</button>
       </form>
       </div>



  )
}


export default UpdateSingleBrouwer;
