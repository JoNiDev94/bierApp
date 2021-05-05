import React from 'react';
import Home from './pages/Home';
import Bier from './pages/Bier';
import Brouwers from './pages/Brouwers';
import Edit from './pages/Edit';
import NavList from './components/NavList';
import {useState, useEffect} from 'react';
import ReactDOM from "react-dom";




import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import './restyle.css';
import './App.css';




interface iBeer {
  id:number;
  name: string;
  percentage: number;
  description: string;
  type: number|string;
}

interface iBrouwer {
  id: number;
  name: string;
  city:string;
  beerIds: number[];
}

function App() {




//useState
  const [brouwers, setBrouwersTypes] = useState<iBrouwer[]>([])
  const [beerTypes, setBeerTypes] = useState<iBeer[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [loginScreenStatus, setLoginScreen] = useState<boolean>(true);
  const [tokenAuth, setToken] = useState<string>('');

//useEffect

 useEffect(
   ()=> {

     getBeers();
     getBrouwers();
     getUser();

   }, [])


   //setBeerTypes

   const typesOfBeer:string[] = ['Pilsner', 'IPA', 'Wheat', 'Brown', 'Porter', 'Stout', 'Sour'];


   // API
   // credentials api
  /* const cred = {
     username: 'joost94',
     password: 'W4o8z'
   }*/

   //api url
   const url:string = 'https://intake-api.hulan.nl/';
   //token
   const token = "OKb8BeybuRC3b00ki8rsWUs57XbLKkTq8tIkIY02AfdEFt81hsfw2FynOi56CHAkxZyCFIfN7hPxBHXDWqgcxKvWmLq7IGKesVFJtICtIv2aWw0sSKZ8HgE6iawr";
   //declare empty array for state
   let allBeer = [];

      //GET BEER
   //fetch beers from api
   const getBeers = async () => {
     const res = await fetch(url.concat('beers'), {
       method: 'GET',
       headers: {
         'Content-type': 'application/json',
         'Authorization':  token
       }
     })
     .then(res => res.json())
   .then((data) => {
//make sure array is empty
     allBeer = [];
//extract all relevant information from each beer
     for (let i = 0; i < data.length; i++) {
       const tempBeer = {
         id: data[i].id,
         name: data[i].name,
         percentage: data[i].percentage,
         description: data[i].description,
         type: typesOfBeer[data[i].type]
       }
//push filtered objects in empty array
       allBeer.push(tempBeer)
     }
//set array of object in state
    setBeerTypes(allBeer);

   })

   }




// GET BROUWER
let allBrewers = [];
//fetch brouwers from api
const getBrouwers = async () => {
  const res = await fetch(url.concat('brewers'), {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization':  token
    }
  })
  .then(res => res.json())
.then((data) => {
//make sure array is empty
  allBrewers = [];
//extract all relevant information from each brouwer
  for (let i = 0; i < data.length; i++) {
    const tempBrewer = {
      id: data[i].id,
      name: data[i].name,
      city: data[i].city,
      beerIds: data[i].beerIds,
    }
//push filtered objects in empty array
    allBrewers.push(tempBrewer)
  }
//set array of object in state
  setBrouwersTypes(allBrewers)


})

}
//API POST beer


const newBeer = async ({beer}:any) => {


  const response = await fetch(url.concat('beers'), {
  method:'POST',
  credentials:'same-origin',
  headers: {
    'Content-type': 'application/json',
    'Authorization':  token
  },
  body: JSON.stringify(beer)
})

  //convert beertype index into name for updating state

 beer.type = typesOfBeer[beer.type];

 setBeerTypes([...beerTypes, beer]);

}



//POST brouwer
const nieuwBrouwer = async ({brouwer}:any) => {
  //empty array for ids
  let bierIds:any[] = [];
  //empty array for filtered names
  let beerNamesArr:any[] = [];
  let beerNames = [...brouwer.beerIds];

  //push names without ", " in array
  beerNames.map(x => beerNamesArr.push(
  x.split(",")[0]));

  //convert names into ids
  beerTypes.map(item => {
      beerNamesArr.map(x => {
        if (item.name == x) {
            bierIds.push(item.id)
        }
      })
  })

//replace beer name array with the ids
brouwer.beerIds = bierIds;

const response = await fetch(url.concat('brewers'), {
  method:'POST',
  headers: {
    'Content-type': 'application/json',
    'Authorization':  token
  },
  body: JSON.stringify(brouwer)
})

setBrouwersTypes([...brouwers, brouwer]);
}

//DELETE BEER
const deleteBier = async (id:number)=> {


    await fetch(url.concat('beers/')+id, {
      method:'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization':  token
      }
    })
    setBeerTypes(beerTypes.filter((beerTypes) => beerTypes.id !== id));
}

//DELETE BROUWER
const deleteBrouwer = async (id:number)=> {
  await fetch(url.concat('brewers/')+id, {
    method:'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization':  token
    }
  })

    setBrouwersTypes(brouwers.filter((brouwers) => brouwers.id !== id));
}



//PUT BEER

const updateBeer = async (updatedBeer:any) => {
  const response = await fetch(url+'beers/'+updatedBeer.id, {
    method:'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization':  token
    },
    body: JSON.stringify(updatedBeer)
  })

 updatedBeer.type = typesOfBeer[updatedBeer.type];

updateBeerUsestate(updatedBeer);


}
//declare indeBeeer for use in updateBeerUsestate function
let indexBeer:number;
const updateBeerUsestate = (updatedBeer:iBeer) => {
  //use map to find the index of the updated beer in the current state
  beerTypes.map(item => item.id === updatedBeer.id? indexBeer=beerTypes.indexOf(item)
  : ''
  )
  //put entire state array in new array
  let newBeerArr = [...beerTypes];
  //replace the updated beer
  newBeerArr.splice(indexBeer, 1, updatedBeer)
  //set the new arr as the state
  setBeerTypes(newBeerArr);

}


//PUT BROUWER
const updateBrouwer = async (updatedBrouwer:any) => {
 const response = await fetch(url+'brewers/'+updatedBrouwer.id, {
    method:'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(updatedBrouwer)
 })

//update usestate


 updateBrouwerUseState(updatedBrouwer);
}

//declare indexBrouwer for use in updateBeerUsestate function
let indexBrouwer:number;
const updateBrouwerUseState = (updatedBrouwer:iBrouwer) => {


  //use map to find the index of the updated beer in the current state
  brouwers.map(item => item.id === updatedBrouwer.id? indexBrouwer=brouwers.indexOf(item)
  : ''
  )
  //put entire state array in new array
  let newBrouwerArr = [...brouwers];
  //replace the updated beer
  newBrouwerArr.splice(indexBrouwer, 1, updatedBrouwer)
  //set the new arr as the state

  setBrouwersTypes(newBrouwerArr);

}



const getUser = async () => {
  const response = await fetch(url.concat('users'), {
    method:'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization':  token
    }
  })

  .then(res => res.json())
.then((data) => {

  setUsers(data);




})


}





  return (
    <Router>
       <div>

         <NavList />


         <Switch>
         // page Bier
           <Route exact path="/bier"
           render={(props) => beerTypes.length > 0?<Bier {...props} beerTypes={beerTypes} onDelete={deleteBier} onUpdate={updateBeer}/>:<h1>{'Het bier is op!'}</h1>}
            />
          // page Brouwers
           <Route exact path="/brouwers"
             render={(props) => brouwers.length > 0?<Brouwers {...props} types={brouwers} onDelete={deleteBrouwer} beerTypes={beerTypes} onUpdate={updateBrouwer}/>:<h1>{'Er wordt geen bier meer gebrouwen!'}</h1>}
           />
          //Page edit
           <Route exact path="/edit"
              render={(props) => <Edit {...props} niewBeer={newBeer} nieuwBrouwer={nieuwBrouwer} beerTypes={beerTypes}/>}
            />
          //Home page
           <Route exact path="/"
            render={(props) => <Home {...props} users={users} loginScreenStatus={loginScreenStatus} setLoginScreen={setLoginScreen} setToken = {setToken}  />}

           />
         </Switch>
       </div>
     </Router>
  );
}



export default App;
