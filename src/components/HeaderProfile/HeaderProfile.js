import React, {Component} from "react";
import Plugin from '../../Plugins/Component'
import {Quit} from '../../actions'
import {connect} from "react-redux";

class HeaderProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        }
        this.exit = this.exit.bind(this)
    }

    componentDidMount() {
        if (localStorage.getItem("idtoken") != null && localStorage.getItem("idtoken") != "") {
            let token = Plugin.parseJwt(localStorage.getItem("idtoken"))
            this.setState({
                user: token
            })
        }
    }

    exit() {
        this.props.history.replace("/")
        this.props.Quit();
    }

    render() {
        return (
            <li className="nav-item dropdown hidden-caret">
                <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"
                   aria-expanded="false">
                    <div className="avatar-sm">
                        <img src={this.state.user.userimg} alt="..."
                             className="avatar-img rounded-circle"/>
                    </div>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                    <div className="dropdown-user-scroll scrollbar-outer">
                        <li>
                            <div className="user-box">
                                <div className="avatar-lg"><img src={this.state.user.userimg}
                                                                alt="image profile"
                                                                className="avatar-img rounded"/></div>
                                <div className="u-text">
                                    <h4>{this.state.user.username} {this.state.user.userlastname}</h4>
                                    <p className="text-muted">{this.state.user.mail}</p><a
                                    href="profile.html" className="btn btn-xs btn-secondary btn-sm">View
                                    Profile</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Profilim</a>
                            <a className="dropdown-item" href="#">Bildirimler</a>
                            <a className="dropdown-item" href="#">Gelen Kutusu</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Hesap Ayarları</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" onClick={() => this.exit()}>Çıkış Yap</a>
                        </li>
                    </div>
                </ul>
            </li>

        )
    }

}

export default  connect(null,{Quit})(HeaderProfile)
