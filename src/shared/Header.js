import  React,{Component} from  'react'

import Logo from '../components/Logo/Logo'
import Notifications from "../components/Notifications/Notifications";
import Messages from '../components/Messages/Messages'
import QuickActions from "../components/QuickActions/QuickActions";
import HeaderProfile from "../components/HeaderProfile/HeaderProfile";
class Header  extends  Component{
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return(
            <div className="main-header">


            <Logo logo={"../assets/img/logo.svg"}/>
                <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">

                    <div className="container-fluid">
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li className="nav-item toggle-nav-search hidden-caret">
                                <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button"
                                   aria-expanded="false" aria-controls="search-nav">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>
                            <Notifications Count={7}/>
                            <Messages Count={8}/>
                            <QuickActions/>
                            <HeaderProfile/>
                        </ul>
                    </div>
                </nav>




            </div>

        )
    }


}

export  default  Header
