import  React,{Component} from  'react'
import Container from "../Container/Container";
import {connect} from "react-redux";
import  {isLogin,Quit,getUsers,delUser} from  '../../actions'
import PageHeader from "../../shared/PageHeader";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableBody from "../../components/TableBody/TableBody";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import  Plugin from  '../../Plugins/Component'
import ButtonGroup from "../../components/ButonGroup/ButonGroup";
class UsersList extends Component{
    constructor(props) {
        super(props);
        this.state={
            token:"",
            dataLoad:false
        }
        this.goDetail=this.goDetail.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
    }
    goDetail(x){
        this.props.history.replace("/KullanıcıDetay/"+x.userid)
        debugger
    }
    deleteUser(x){
        let data=Plugin.urlParse("userid="+x.userid)
        this.props.delUser(this.state.token,data)
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.users.err == false) {
            nextProps.users.userList.forEach((x)=>{
                x.actions= <ButtonGroup deleteVisible=""
                                        deleteBtnIcon={"fas fa-trash-alt"}
                                        deleteClick={()=>this.deleteUser(x)}
                                        deleteBtnToolTip={"Bu Kullanıcıyı Sistemden Sil"}
                                        saveVisible={"none"} editVisible={"none"}
                                        editBtnIcon={"fas fa-edit"}
                                        infoBtnIcon={"fa fa-eye"}
                                        infoBtnToolTip={"Kullanıcı Detayını Göster"}
                                        infoBtnClck={()=>this.goDetail(x)}
                                        Visible={"none"} />
            })
            this.setState((state) => {
                return {
                    tableTitle: [{
                        title: "#",
                        col: "userid"
                    },
                        {
                            title: "Kullanıcı Adı",
                            col: "username"
                        },
                        {
                            title: "Kullanıcı Soyadı",
                            col: "userlastname"
                        },
                        {
                            title: "IP Adresi",
                            col: "ipadres"
                        },         {
                            title: "Cinsiyeti",
                            col: "gendername"
                        },
                        {
                            title: "Mail Adresi",
                            col: "mail"
                        },
                        {
                            title: "Telefon Numarası",
                            col: "phonenumber"
                        },
                        {
                            title: "Şehir",
                            col: "baslik"
                        },
                        {
                            title: "İşlemler",
                            col: "actions"
                        }
                    ],
                    dataLoad:true,
                    tableData: nextProps.users.userList
                }
            })
        } else {

        }
    }
    getUserList(token){
        debugger
        let data=Plugin.urlParse("u.authid=2")
        this.props.getUsers(token,data)

    }
    componentDidMount() {
        if (localStorage.getItem("idtoken") != null && localStorage.getItem("idtoken") != "") {
            const response = this.props.isLogin(localStorage.getItem("idtoken"))
            if (response.payload.token != null && response.payload.token && response.payload.islogin !== false) {
                this.setState({
                    token: response.payload.token
                })
                this.getUserList(response.payload.token)
            } else {
                this.props.Quit()
                this.props.history.push("/")
            }
        } else {
            this.props.Quit()
            this.props.history.push("/")
        }
    }

    renderUserList(){
        /*userList*/
            let users;
            if (this.state.dataLoad && this.props.users.err === false) {
                users =
                    <div className="page-inner">
                        <PageHeader pageTitle={"Mevcut Kullanıcılar"}/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Mevcut Kullanıcılar</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-sub">
                                            Sistemde Kayıtlı Olan Kullanıcı Listesi Burada Yer Alır
                                        </div>
                                        <div className="table-responsive">
                                            <table
                                                className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                                <caption>Toplam Kullanıcı Sayısı : {this.state.tableData.length}</caption>
                                                <TableHeader titleData={this.state.tableTitle}/>
                                                <TableBody tableColumn={this.state.tableTitle}
                                                           tableRow={this.state.tableData}/>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            } else if (this.state.dataLoad === false) {
                users = <Spinner/>
            } else if (this.state.dataLoad === true && this.props.users.err  == 204) {
                users = <div className="page-inner">
                    <PageHeader pageTitle={"Mevcut Kitaplar"}/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Mevcut Kitaplar</div>
                                </div>
                                <div className="card-body">
                                    <div className="card-sub">
                                        Sistemde Kayıtlı Olan Kullanıcıların Listesi Burada Yer Alır
                                    </div>
                                    <div className="table-responsive">
                                        <table
                                            className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                            <caption>Toplam Kullanıcı Sayısı : {this.state.tableData.length}</caption>
                                            <TableHeader titleData={this.state.tableTitle}/>
                                            <TableBody tableColumn={this.state.tableTitle} tableRow={this.state.tableData}/>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            else if(this.state.dataLoad===true && this.props.users.err ==401){
                this.props.Quit()
                this.props.history.replace("/")
                users=<Error/>
            }
            else if(this.state.dataLoad===true && this.props.users.err ==500){
                users=<Error/>
            }
            return users
    }

    render() {
        return (
            <Container>
                {this.renderUserList()}
            </Container>
        );
    }

}
const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state.Login,
        users: state.User
    }
}
export  default connect(mapStateToProps,{isLogin,Quit,getUsers,delUser})(UsersList)
