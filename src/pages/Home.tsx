import '../css/home.css';
import LoginScreen from '../components/LoginScreen'
import logo from '../img/beer-bottle.png';


//get login screen



const Home = ({loginScreenStatus, setLoginScreen, token, setToken}:any) => {



    return(
 <>
      <h1>Home</h1>
      <p className = 'welcomeMessage'>Welkom bij Hulan Bier, geniet van de App en het bier!</p>
      <img className="logo-home" src={logo} alt="Hulan beer bottle"/>
      <LoginScreen loginScreenStatus={loginScreenStatus} setLoginScreen={setLoginScreen} setToken ={setToken}  />



</>
  )
}


export default Home;
