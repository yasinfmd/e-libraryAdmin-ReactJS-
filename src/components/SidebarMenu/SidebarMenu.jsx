import React,{Component} from 'react'
import {NavLink} from "react-router-dom";


class SidebarMenu extends Component{
    constructor(props) {
        super(props);
        this.renderMenuData=this.renderMenuData.bind(this)
    }
    renderMenuData(item,i){
            if(item.submenu.length>0){
                return(
                    <div  key={i}>
                        <ul className="nav nav-primary" >
                        <li className={item.clases}>
                            <a data-toggle="collapse" href={item.selector}>
                                <i className={item.icon}></i>
                                <p>{item.title}</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse show" id={item.selectorid}>
                                {
                                    item.submenu.map((x,index)=>{
                                        return (
                                            <ul className="nav nav-collapse" key={index}>
                                            <li >
                                                    <NavLink to={x.to} exact>
                                                        <span className="sub-item">{x.name}</span>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )

                                        }

                                    )
                                }
                            </div>
                        </li>
                        </ul>

                    </div>
                )
            }else{
                return (
                    <div key={i}>
                        <ul className="nav nav-primary" >
                        <li className={item.clases}    >
                            <NavLink to={item.to} exact data-toggle="collapse" href={item.to}>
                                <i className={item.icon}></i>
                                <p>{item.title}</p>
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                )
            }


    }
    render() {
        return(
            <div>
                {
                    this.props.menuData.map((item,i)=>
                            this.renderMenuData(item,i)
                    )
                }

            </div>
        )
    }

}
export  default  SidebarMenu
