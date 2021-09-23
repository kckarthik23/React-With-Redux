import React from "react";
import { BrowserRouter ,Route ,Switch,NavLink, Link} from "react-router-dom";
import "../Styles/style.scss";

const Header =()=>{
    return(
    <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard </NavLink>
   <NavLink to="/help" activeClassName="is-active" > Help </NavLink>
   <NavLink to="/create" activeClassName="is-active" > Create </NavLink>
   <NavLink to="/edit" activeClassName="is-active" > Edit </NavLink>
    </div>)
}
export default Header;