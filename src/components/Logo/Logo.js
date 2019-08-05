import  React from  'react'
import {NavLink} from "react-router-dom";
import NavToggle from '../NavToggle/NavToggle'
const Logo = (props) =>(
    <div className="logo-header" data-background-color="blue">
        <NavLink
            className="logo"
        to="/"
        exact
        >
            <img src={props.logo} alt="navbar brand" className="navbar-brand"/>
        </NavLink>
        <NavToggle/>
    </div>

)
export  default  Logo
