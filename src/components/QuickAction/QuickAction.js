import  React,{Component} from 'react'
import  {NavLink} from "react-router-dom";

class QuickAction extends  Component{
    constructor(props) {
        super(props);
            this.renderQuickActions=this.renderQuickActions.bind(this)
    }
    renderQuickActions(item,index){


        return(
                <NavLink
                    key={index}
                    className="col-6 col-md-4 p-0"
                    to={item.to}
                    exact
                >
                <div className="quick-actions-item">
                    <i className={item.icon}></i>
                    <span className="text">{item.title}</span>
                </div>
                </NavLink>
        )
    }
    render() {
        return(
            <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                <div className="quick-actions-header">
                    <span className="title mb-1">Hızlı Başla</span>
                    <span className="subtitle op-8">Kısayollar</span>
                </div>
                <div className="quick-actions-scroll scrollbar-outer">
                    <div className="quick-actions-items">
                        <div className="row m-0">

                            {this.props.quickActionsData.map((row,index)=>
                                this.renderQuickActions(row,index)
                            )}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export  default  QuickAction
