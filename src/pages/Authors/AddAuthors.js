import React, {Component, Fragment} from 'react'
import Container from "../Container/Container";
import PageHeader from "../../shared/PageHeader";
import Input from "../../components/Input/Input";
import {isLogin, Quit, addNewAuth} from '../../actions'
import {connect} from "react-redux";
import Plugin from "../../Plugins/Component";
import Error from "../../components/Error/Error";

class AddAuthors extends Component {
    constructor(props) {
        super(props);
        this.addNewAuthors = this.addNewAuthors.bind(this)
        this.checkField = this.checkField.bind(this)
        this.onInputChange=this.onInputChange.bind(this)
        this.state = {
            token:"",
            authors: {
                name: "",
                lastname: "",
                age: "",
                country: ""
            }
        }

    }

    addNewAuthors() {
        debugger
        this.props.addNewAuth(this.state.token,[this.state.authors])
        this.setState({
            authors: {
                name: "",
                lastname: "",
                age: "",
                country: ""
            }
        })
    }
        checkField(){
        if(this.state.authors.name.trim().length<3 || this.state.authors.name.trim()=="" ){
            Plugin.showalert("Yazar Adı Alanı Geçersiz","error","Tamam")
        }else  if(this.state.authors.lastname.trim().length<2 || this.state.authors.lastname.trim()=="" ){
            Plugin.showalert("Yazar Soyad Alanı Geçersiz","error","Tamam")
        }
        else  if(isNaN(this.state.authors.age) || this.state.authors.age.trim()=="" ){
            Plugin.showalert("Yazar Yaş Alanı Geçersiz","error","Tamam")
        }
        else  if(this.state.authors.country.trim().length<2 || this.state.authors.country.trim()=="" ){
            Plugin.showalert("Yazar Ülkesi Alanı Geçersiz","error","Tamam")
        }else{
            this.addNewAuthors()
        }
        }
    onInputChange(e, type) {
        let name;
        let lastname;
        let age;
        let country;
        if (type === "name") {
            name = e.target.value
            lastname = this.state.authors.lastname
            age = this.state.authors.age
            country = this.state.authors.country
        } else if (type==="lastname") {
            name = this.state.authors.name
            lastname =   e.target.value
            age = this.state.authors.age
            country = this.state.authors.country
        }
        else if (type==="age") {
            name = this.state.authors.name
            lastname =this.state.authors.lastname
            age = e.target.value
            country = this.state.authors.country
        }
        else if (type==="country") {
            name = this.state.authors.name
            lastname =  this.state.authors.lastname
            age = this.state.authors.age
            country =  e.target.value
        }
        this.setState({
            authors: {
                name,
                lastname,
                age,
                country
            }
        })
        console.log(this.state)
            debugger
    }
    componentDidMount() {
        if (localStorage.getItem("idtoken") != null && localStorage.getItem("idtoken") != "") {
            const response = this.props.isLogin(localStorage.getItem("idtoken"))
            if (response.payload.token != null && response.payload.token && response.payload.islogin !== false) {
                let token = Plugin.parseJwt(response.payload.token)
                if (token.authid == 1) {
                    this.setState({
                        token:response.payload.token
                    })
                } else {
                    this.props.Quit()
                    this.props.history.push("/")
                }
            } else {
                this.props.Quit()
                this.props.history.push("/")
            }
        } else {
            this.props.Quit()
            this.props.history.push("/")
        }
    }
componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.authorsData.err===false && nextProps.authorsData.newAuthor.length>0){
            Plugin.showalert("Kayıt İşlemi Başarılı","success","Tamam")
        }else if(nextProps.authorsData.err===false && nextProps.authorsData.newAuthor.length<0){
            Plugin.showalert("Kayıt İşlemi Sırasında Bir Hata Gerçekleşti","error","Tamam")
        } else if (nextProps.authorsData.err == 401) {
            this.props.Quit()
            this.props.history.replace("/")
        } else if (nextProps.authorsData.err== 500) {
            Plugin.showalert("Kayıt İşlemi Sırasında Bir Hata Gerçekleşti","error","Tamam")

        }
}

    render() {
        return (
            <Container>
                <div className="page-inner">
                    <PageHeader pageTitle={"Yazar Ekle"}/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Yazar Ekle</div>
                                </div>
                                <div className="card-body">
                                    <div className="card-sub">
                                        Yeni Yazar Ekleme Sayfası
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Yazar Adı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Yazar Adı"}
                                            onChange={(e)=>this.onInputChange(e,"name")}
                                            value={this.state.authors.name}

                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Yazar Soyadı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Yazar Soyad"}
                                            onChange={(e)=>this.onInputChange(e,"lastname")}
                                            value={this.state.authors.lastname}

                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Yazar Yaşı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Yazar  Yaşı"}
                                            onChange={(e)=>this.onInputChange(e,"age")}
                                            value={this.state.authors.age}

                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Yazar Ülkesi</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            onChange={(e)=>this.onInputChange(e,"country")}
                                            placeholder={"Yazar  Ülkesi"}
                                            value={this.state.authors.country}

                                        />
                                    </div>

                                    <button onClick={this.checkField} className={"btn btn-sm btn-success"}
                                            style={{float: "right"}}>
                                        Yeni Yazar Ekle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state.Login,
        authorsData: state.Authors
    }
}
export default connect(mapStateToProps, {isLogin, Quit, addNewAuth})(AddAuthors)
