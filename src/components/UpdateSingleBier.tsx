
import '../css/bewerk.css';
import {useState} from 'react';




const UpdateSingleBier = ({singleBier, onDelete, onUpdate, showUpdate}:any) => {

const id = singleBier.id;
const [name, setName] = useState<string>(singleBier.name);
const [percentage, setAlc] = useState<number|string>(singleBier.percentage);
const [description, setDescription] = useState<string>(singleBier.description);
const [typeX, setType] = useState<string>(singleBier.type);

const typesBeer:string[] = ['Pilsner', 'IPA', 'Wheat', 'Brown', 'Porter', 'Stout', 'Sour'];




const submit = (e:any) => {
  e.preventDefault();
  showUpdate();

  let type = typesBeer.indexOf(typeX);


  onUpdate({id, name, percentage, description, type});


}





    return(




      <div>
      <form className = 'updateForm' onSubmit={submit}>
          <label >Bier naam</label>
          <input
          name='name'
          type="text"
          placeholder={singleBier.name}
          onChange = {(e) => {setName(e.target.value)}}
          />
          <label >Alcohol percentage (%)</label>
          <input
          name='percentage'
          type="number"
          placeholder={singleBier.percentage}
          onChange = {(e) => {setAlc(e.target.value)}}
          />
          <label >Beschrijving</label>
          <textarea
          name='description'
          placeholder={singleBier.description}
          onChange = {(e) => {setDescription(e.target.value)}}
          />

          <label >Type</label>
          <div className ='check-grid'>


              <div className='list1' >
                  {typesBeer.map(item =>

                    <input
                    key = {item}
                    id={item}
                    name= 'beerType'
                    type="radio"
                    value= {item}
                    onChange = {(e) => {setType(e.currentTarget.checked?e.target.value:'')}}


                    />


                   )}




                </div>
                <div className='list2'>
                {typesBeer.map(type =>
                  <div key={type}>{type}</div>
                 )}
                </div>
          </div>




          <button type='submit' className='BewerkBtn' >Update</button>
      </form>

      </div>


  )



}


export default UpdateSingleBier;
