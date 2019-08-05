import  React from  'react'
import {NavLink} from "react-router-dom";

const Footer = props=>(
    <footer className="footer">
        <div className="container-fluid">
            <nav className="pull-left">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/Gizlilik">
                            Gizlilik
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/Yardim">
                                Yardım
                            </NavLink>
                        </li>
                    </li>
                    <li className="nav-item">
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/Lisans">
                                Lisanslar
                            </NavLink>
                        </li>
                    </li>
                </ul>
            </nav>
            <div className="copyright ml-auto">
                2019, <i className="fa fa-heart heart text-danger"></i>  <a
                href="http://ysndlklcblog.epizy.com">Yasin Dalkılıç</a>
            </div>
        </div>
    </footer>
)
export  default  Footer
