import  React,{Component} from 'react'
import Notification from '../../components/Notification/Notification'


class Notifications extends  Component{
    constructor(props) {
        super(props);
        // clasname

        //fa fa-user-plus icon
        //notificationType
        // to
        //time
        this.state={
            ntfData:[{
                clasname:"notif-icon notif-primary",
                icon:"fa fa-user-plus",
                notificationType:"Yeni Kayıt",
                to:"/NTF",
                time:"5 dakika önce"
            },
                {
                    clasname:"notif-icon notif-primary",
                    icon:"fa fa-user-plus",
                    notificationType:"Yeni Kayıt",
                    to:"/NTF",
                    time:"5 dakika önce"
                },
                {
                    clasname:"notif-icon notif-primary",
                    icon:"fa fa-user-plus",
                    notificationType:"Yeni Kayıt",
                    to:"/NTF",
                    time:"5 dakika önce"
                },{
                    clasname:"notif-icon notif-primary",
                    icon:"fa fa-user-plus",
                    notificationType:"Yeni Kayıt",
                    to:"/NTF",
                    time:"5 dakika önce"
                },{
                    clasname:"notif-icon notif-primary",
                    icon:"fa fa-user-plus",
                    notificationType:"Yeni Kayıt",
                    to:"/NTF",
                    time:"5 dakika önce"
                },{
                    clasname:"notif-icon notif-primary",
                    icon:"fa fa-user-plus",
                    notificationType:"Yeni Kayıt",
                    to:"/NTF",
                    time:"5 dakika önce"
                }
            ]
         }
    }
    render() {
        return(
        <li className="nav-item dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-bell"></i>
                <span className="notification">{this.props.Count}</span>
            </a>
            <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                <li>
                    <div className="dropdown-title">Bildirim Sayınız {this.props.Count}</div>
                </li>
                <li>
                <Notification Notifications={this.state.ntfData} />
                </li>
                <li>
                    <a className="see-all" href="javascript:void(0);">Tüm Bildirimleri Gör<i
                        className="fa fa-angle-right"></i> </a>
                </li>
            </ul>
        </li>
        )
    }

}


export  default  Notifications
