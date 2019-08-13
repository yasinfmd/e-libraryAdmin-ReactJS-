import  React,{Component} from 'react'
import Message from '../../components/Message/Message'

class Messages extends Component{
    constructor(props) {
        super(props);
        //userimg
        //msg
        //username
        this.state={
            msgData:[{
                userimg:"../../assets/img/jm_denis.jpg",
                msg:"Naber Dude  ",
                username:"Yasin Dalkılıç"
            },
                {
                    userimg:"../../assets/img/jm_denis.jpg",
                    msg:"Naber Dude   ",
                    username:"Yasin Dalkılıç"
                },
                {
                    userimg:"../../assets/img/jm_denis.jpg",
                    msg:"Naber Dude   ",
                    username:"Yasin Dalkılıç"
                },
                {
                    userimg:"../../assets/img/jm_denis.jpg",
                    msg:"Naber Dude   ",
                    username:"Yasin Dalkılıç"
                },
                {
                    userimg:"../../assets/img/jm_denis.jpg",
                    msg:"Naber Dude   ",
                    username:"Yasin Dalkılıç"
                }

            ]
        }
    }
    render() {
        return(
            <li className="nav-item dropdown hidden-caret">
                <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-envelope"></i>
                </a>
                <ul className="dropdown-menu messages-notif-box animated fadeIn"
                    aria-labelledby="messageDropdown">
                    <li>
                        <div
                            className="dropdown-title d-flex justify-content-between align-items-center">
                            Mesajlar   {this.props.Count}
                            <a href="#" className="small">Tümünü Okundu Olarak İşaretle</a>
                        </div>
                    </li>
                    <li>
                        <Message msgData={this.state.msgData}/>
                    </li>
                    <li>
                        <a className="see-all" href="javascript:void(0);">Tüm Mesajları Gör<i
                            className="fa fa-angle-right"></i> </a>
                    </li>
                </ul>
            </li>

        )
    }

}
export default  Messages
