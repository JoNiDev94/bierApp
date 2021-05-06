import logo from '../img/beer-bottle.png';
import '../css/bewerk.css';



const RegularSingleBier = ({singleBier, onDelete, onUpdate, showUpdate}:any) => {








    return(



      <div className={singleBier.name} key={singleBier.name}>
      <div className='delete'><h3 onClick={()=>onDelete(singleBier.id)}>x</h3></div>
      <div className=''><img className="logo-bier" src={logo} alt="Hulan beer bottle"/></div>
      <div><h2>{singleBier.name}</h2></div>
      <div>Alcohol percentage: {singleBier.percentage}%</div>
      <div className='description'>Beschrijving: <br />{singleBier.description}</div>
      <div>Type: {singleBier.type}</div>
      <div><button className='BewerkBtn' onClick={showUpdate}>Bewerken</button></div>
      </div>

  )
}


export default RegularSingleBier;
