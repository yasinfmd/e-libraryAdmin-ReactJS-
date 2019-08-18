import  React from  'react'
import {NavLink} from "react-router-dom";
import propsType from 'prop-types'
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
NavToggle.propTypes={
    logo:propsType.string
}
export  default  Logo
