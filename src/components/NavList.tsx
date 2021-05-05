import {
  NavLink,

} from "react-router-dom";

import logo from '../img/beer-bottle.png';

const NavList = () => {


    return(
  <>
  <nav>
    <ul>
      <li>
        <NavLink exact={true} activeClassName='is-active' to="/"><img className="logo" src={logo} alt="Hulan beer bottle"/></NavLink>
      </li>
      <li>
        <NavLink exact={true} activeClassName='is-active' to="/bier">Bier</NavLink>
      </li>
      <li>
        <NavLink exact={true} activeClassName='is-active' to="/brouwers">Brouwers</NavLink>
      </li>
      <li>
        <NavLink exact={true} activeClassName='is-active' to="/edit">Edit</NavLink>
      </li>
    </ul>
  </nav>

  </>




  )
}


export default NavList;
