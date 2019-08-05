import React, {Component} from 'react'
import Input from '../../components/Input/Input'
import {connect} from 'react-redux'
import md5 from 'md5'
import {onLogin} from '../../actions'
import Validation from "../../Plugins/Validation";
import Plugin from '../../Plugins/Component'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                userpass: ""
            },
            userInputClass: {
                name: "form-control",
                userpass: "form-control"
            },
              usererrmsg:"",
              userpasserrmsg:""  ,

            allInputValid: false,
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onLogin = this.onLogin.bind(this)
        this.pushRoute = this.pushRoute.bind(this)
    }

    onLogin() {
        const username = Plugin.validateemail(this.state.user.name)
        const password = Validation.checkvalidate(this.state.user.userpass, "<", "8")
        let clases=username!=false?"is-valid":"is-invalid"
        this.setState({
            userInputClass: {
                name: "form-control" + " "+ clases,
                userpass: "form-control" + " " + password
            },
        })
      if(username!==true){
                this.setState({
                    usererrmsg:"Lütfen Geçerli Bir Mail Adresi Belirtiniz",
                })
        }else{
            this.setState({
                usererrmsg:" ",
            })
        }
        if(password!=="is-valid"){
            this.setState({
                userpasserrmsg:"Parolanız En Az 8 Karakterden Oluşmalı",
            })
        }else{
            this.setState({
                userpasserrmsg:" ",
            })
        }
        if(username!==false && password!=="is-invalid"){
            debugger
            this.setState({
                allInputValid:true
            })
            this.pushRoute()
        }
    }
    pushRoute(){
        if (this.state.allInputValid !== false) {
            this.props.onLogin(this.state.user.name, md5(this.state.user.userpass))
        }
    }

    onInputChange(e, type) {
        let newname;
        let newpass;
        if (type === "username") {
            newname = e.target.value
            newpass = this.state.user.userpass
        } else {
            newname = this.state.user.name
            newpass = e.target.value
        }
        this.setState({
            user: {
                name: newname,
                userpass: newpass
            }
        })
    }
    componentWillReceiveProps( nextProps ){
        if(this.props.loginData.Login.err==401){
            Plugin.showalert("Kullanıcı Adı Veya Parola Hatalı","error","Tamam")
        }else if(this.props.loginData.Login.err==500){
            Plugin.showalert("Sunucuda Hata Gerçekleşti","error","Tamam")
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row" style={{paddingTop: "10%"}}>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title text-center">E-Kütüphane Sistemi Yönetici Girişi</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <Input
                                        type={"text"}
                                        class={this.state.userInputClass.name} placeholder={"Kullanıcı Adı"}
                                        value={this.state.user.name} onChange={(e) => {
                                        this.onInputChange(e, 'username')
                                    }}
                                    />
                                    <label>{this.state.usererrmsg}</label>

                                </div>
                                <div className="form-group">
                                    <Input
                                        type={"password"}
                                        class={this.state.userInputClass.userpass} placeholder={"Kullanıcı Parola"}
                                        value={this.state.user.userpass} onChange={(e) => {
                                        this.onInputChange(e, 'userpass')
                                    }}
                                    />
                                    <label>{this.state.userpasserrmsg}</label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-outline-info" onClick={() => this.onLogin()}
                                            style={{float: "right"}}>Giriş
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        )
    }


}

const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state,
    }
}
export default connect(mapStateToProps, {onLogin})(Login);
