import '../css/home.css';
import {useState} from 'react';



//get login screen



const LoginScreen = ({loginScreenStatus, setLoginScreen, token, setToken}:any) => {

const [thisUserName, setThisUserName] = useState<any>('');
const [thisUserPW, setThisUserPW] = useState<any>('');


//check if user credential match with given credentials with the hel of hasownproperty
const submit = (e:any) => {
  e.preventDefault();

const url = 'https://intake-api.hulan.nl/authentication';
const cred = {
/*  username: 'joost94',
  password: 'W4o8z'*/
  username: thisUserName,
  password: thisUserPW
}

fetch(url, {
  method: 'POST',
  headers: {
    'Accept' : '*/*',
    'Content-type' : 'application/json'

  },
  body: JSON.stringify(cred)
}

)
.then(response => response.json())
.then((data) => {
setToken(data.token);
  loginCheck(data.token);


})
}








const loginCheck = (token1:any) => {



  if (token1) {
    setLoginScreen(!loginScreenStatus)


  } else {
    alert('invalid credentials!');
  }









}






    return(
 <>

      <div  className='login' style={{display: `${loginScreenStatus?'block':'none'}`}}>

        <h1>Welkom bij Hulan Bier</h1>
        <h3>Log in om gebruik te maken van de app</h3>

       <form onSubmit={submit}>
        <label>Username</label>
        <input
        name='username'
        type='text'
        placeholder='Type your username'
        onChange = {(e) => {setThisUserName(e.target.value)}}
         />
         <label>Password</label>
         <input
         name='password'
         type='password'
         placeholder='Type your password'
         onChange = {(e) => {setThisUserPW(e.target.value)}}
          />

          <button type='submit'>Login</button>

       </form>

      </div>



</>
  )
}


export default LoginScreen;
