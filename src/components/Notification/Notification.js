import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import propsType from "prop-types";
import TableHeader from "../TableHeader/TableHeader";

class Notification extends Component {
    constructor(props) {
        super(props)
        this.renderNotification = this.renderNotification.bind(this)
    }

    renderNotification(item, index) {

        return (
            <NavLink
                key={index}
                className="logo"
                to={item.to}
                exact
            >

                <div className={item.clasname}><i
                    className={item.icon}></i></div>
                <div className="notif-content">
													<span className="block">
                                                        {item.notificationType}
													</span>
                    <span className="time">{item.time}</span>
                </div>

            </NavLink>
        )
    }

    render() {
        return (

            <div className="notif-scroll scrollbar-outer">
                <div className="notif-center">

                    {
                        this.props.Notifications.map((x, i) =>
                        this.renderNotification(x,i)
                        )
                    }

                </div>
            </div>

        )
    }

}

Notification.propTypes = {
    Notifications: propsType.array
};
export default Notification
