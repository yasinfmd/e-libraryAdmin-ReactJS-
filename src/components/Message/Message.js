import  React,{Component} from  'react'
import {NavLink} from "react-router-dom";


class Message extends  Component{
    constructor(props) {
        super(props);
        this.renderMsg=this.renderMsg.bind(this)
    }
    renderMsg(item,index){

        return(
        <NavLink
            key={index}
            className="logo"
            to={item.to}
            exact
        >
            <div className="notif-img">
                <img src={item.userimg} alt="Img Profile"/>
            </div>
            <div className="notif-content">
                <span className="subject">{item.username} </span>
                <span className="block">
                    {item.msg}
                </span>
                <span className="time">{item.time}</span>
            </div>

        </NavLink>
        )
    }
    render() {
        return(
            <div className="message-notif-scroll scrollbar-outer">
                <div className="notif-center">

                    {
                        this.props.msgData.map((row,index)=>
                        this.renderMsg(row,index)
                    )
                    }


                </div>
            </div>

        )

    }

}
export default  Message
