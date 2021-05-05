import '../css/bewerk.css';

const RegularSingleBrouwer = ({singleBrouwer, onDelete, showUpdate, beerTypes}:any) => {





let tempBierSoorten:any[] = [];
//get all beers and ids from single component

const selectSoorten = () => {

  tempBierSoorten = [];
  //get Beer ids
  const idArr = [...singleBrouwer.beerIds];
  //getBeer objects
  const beerTypesArr = [...beerTypes];
//if available beer id is equal to components beerIds, push the name of the beer in an array

  beerTypesArr.map(item => {
      idArr.map(x => {
//updating state retrieves "," at the end of the id, therefore split at the comma
  x= x.split(",")[0]


        if (x == item.id) {



            tempBierSoorten.push(item.name+', ')


        }


      })

  })
//returned array is inserted in singleBier component for UI

return tempBierSoorten;

}


selectSoorten();




    return(

      <div className={singleBrouwer.name} key={singleBrouwer.name}>
      <div className= 'delete'><h3 onClick={()=>onDelete(singleBrouwer.id)}>x</h3></div>
      <div className=''><h2>{singleBrouwer.name}</h2></div>
      <div>Locatie: {singleBrouwer.city}</div>
      <div>Soorten bier: </div>
       <div className='bierSoorten'>{tempBierSoorten}</div>
       <div><button className='BewerkBtn' onClick={showUpdate} >Bewerken</button></div>
       </div>



  )
}


export default RegularSingleBrouwer;
