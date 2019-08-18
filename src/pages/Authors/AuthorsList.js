import React, {Component} from 'react'
import Container from "../Container/Container";
import {connect} from "react-redux";
import {getAuthors, isLogin,Quit} from '../../actions'
import Plugin from '../../Plugins/Component'
import PageHeader from "../../shared/PageHeader";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableBody from "../../components/TableBody/TableBody";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import ButtonGroup from "../../components/ButonGroup/ButonGroup";

class AuthorsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoad: false,
            tableData: [],
            tableTitle: [],
        }
        this.goDetail=this.goDetail.bind(this)
        this.routeNewAuthor=this.routeNewAuthor.bind(this)
    }

    getAuthors(token) {
        this.props.getAuthors(token)
    }

    routeNewAuthor(){
        this.props.history.push("/YazarEkle");
    }
    componentDidMount() {
        if (localStorage.getItem("idtoken") != null && localStorage.getItem("idtoken") != "") {
            const response = this.props.isLogin(localStorage.getItem("idtoken"))
            if (response.payload.token != null && response.payload.token && response.payload.islogin !== false) {
                let token = Plugin.parseJwt(response.payload.token)
                if (token.authid == 1) {
                    this.getAuthors(response.payload.token)
                } else {
                    this.props.history.push("/")
                }
            } else {
                this.props.history.push("/")
            }
        } else {
            this.props.history.push("/")
        }
    }
    initRender() {
        let authorsList;
        if (this.state.dataLoad && this.props.authorsDatas.err === false) {
            authorsList =
                <div className="page-inner">
                    <PageHeader pageTitle={"Mevcut Yazarlar"}/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Mevcut Yazarlar</div>
                                </div>
                                <div className="card-body">
                                    <div className="card-sub">
                                        Sistemde Kayıtlı Olan Yazar Listesi Burada Yer Alır
                                    </div>
                                     <button onClick={this.routeNewAuthor} className={"btn btn-sm btn-success"} style={{float:"right"}}>Yeni Yazar Ekle</button>
                                    <div className="table-responsive">
                                        <table
                                            className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                            <caption>Toplam Yazar Sayısı : {this.state.tableData.length}</caption>
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
            authorsList = <Spinner/>
        } else if (this.state.dataLoad === true && this.props.authorsDatas.err == 204) {
            authorsList = <div className="page-inner">
                <PageHeader pageTitle={"Mevcut Yazarlar"}/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">Mevcut Kitaplar</div>
                            </div>
                            <div className="card-body">
                                <div className="card-sub">
                                    Sistemde Kayıtlı Olan Kitap Listesi Burada Yer Alır
                                </div>
                                <div className="table-responsive">
                                    <table
                                        className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                        <caption>Toplam Yazar Sayısı : {this.state.tableData.length}</caption>
                                        <TableHeader titleData={this.state.tableTitle}/>
                                        <TableBody tableColumn={this.state.tableTitle} tableRow={this.state.tableData}/>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (this.state.dataLoad === true && this.props.authorsDatas.err == 401) {
            this.props.Quit()
            this.props.history.replace("/")
            authorsList = <Error/>
        } else if (this.state.dataLoad === true && this.props.authorsDatas.err== 500) {
            authorsList = <Error/>
        }
        return authorsList
    }
    newAuthors(){
        this.props.history.push("/YazarEkle")
    }
    goDetail(item)
    {
        this.props.history.push("/YazarBilgisi/"+item.authorsid)
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.authorsDatas.err == false) {
            nextProps.authorsDatas.authorsList.forEach((x)=>{
                x.actions= <ButtonGroup deleteVisible=""
                                        deleteBtnIcon={"fas fa-trash-alt"}
                                        deleteBtnToolTip={"Bu Yazarı Sil"}
                                        saveVisible={"none"} editVisible={""}
                                        editBtnToolTip={"Yazarı Düzenle"}
                                        editBtnIcon={"fas fa-edit"}
                                        infoBtnIcon={"fa fa-eye"}
                                        infoBtnToolTip={"Detayını Göster"}
                                        infoBtnClck={()=>this.goDetail(x)}
                                        Visible={"none"} />
            })
            this.setState((state) => {
                return {
                    tableTitle: [{
                        title: "#",
                        col: "authorsid"
                    },
                        {
                            title: "Yazar Adı",
                            col: "authorsname"
                        },
                        {
                            title: "Yazar Soyadı",
                            col: "authorslastname"
                        },
                        {
                            title: "Yazar Yaşı",
                            col: "authorsage"
                        },         {
                            title: "Yazar Ülkesi",
                            col: "authorscountry"
                        },
                        {
                            title: "İşlemler",
                            col: "actions"
                        }
                    ],
                    dataLoad:true,
                    tableData: nextProps.authorsDatas.authorsList
                }
            })
        } else {

        }
    }

    render() {
        return (
            <Container>
                {this.initRender()}
            </Container>
        );
    }

}

const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state.Login,
        authorsDatas: state.Authors
    }
}
export default connect(mapStateToProps, {getAuthors, isLogin,Quit})(AuthorsList)
