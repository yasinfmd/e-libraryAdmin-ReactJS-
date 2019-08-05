import React, {Component, Fragment} from 'react'
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import MainPanel from "../../shared/MainPanel";
import Footer from "../../shared/Footer";
import {connect} from "react-redux";
import history from '../../history/history'
import PageHeader from '../../shared/PageHeader'
import {isLogin} from "../../actions";
import TableHeader from '../../components/TableHeader/TableHeader'
import TableBody from '../../components/TableBody/TableBody'
import Input from "../../components/Input/Input";
import ButtonGroup from '../../components/ButonGroup/ButonGroup'
class SoldBooks extends Component {
    constructor(props) {
        super(props);
        this.state={
            tableData:[{
                    Adı:"aaaa",
                Sayfa:"555",
                Yazar:"Ben",
                İşlemler:<ButtonGroup/>
            },
                {
                    Adı:"aaaa",
                    Sayfa:"555",
                    Yazar:"Ben",
                    İşlemler:<ButtonGroup/>

                },
                {
                    Adı:"aaaa",
                    Sayfa:"555",
                    Yazar:"Ben",
                    İşlemler:<ButtonGroup/>
                },
                {
                    Adı:"aaaa",
                    Sayfa:"555",
                    Yazar:"Ben",
                    İşlemler:<ButtonGroup/>
                }
            ],
            tableTitle:[
                {
                    title:"Adı"
                },
                {
                    title:"Sayfa"
                },
                {
                    title:"Yazar"
                },
                {
                    title:"İşlemler"
                }
            ]
        }
    }

    componentDidMount() {
        if(localStorage.getItem("idtoken")!=null && localStorage.getItem("idtoken")!=""){
            const response=  this.props.isLogin(localStorage.getItem("idtoken"))
            if(response.payload.token !=null && response.payload.token && response.payload.islogin!==false){
                this.setState({
                    Token: response.payload.token,
                    islogin: response.payload.islogin
                })
            }else{
                history.push("/")
            }
        }else{
            history.push("/")
        }
    }
    render() {
        return (
            <Fragment>

                <Header/>
                <Sidebar/>
                <div className="main-panel">
                    <div className="content">
                        <MainPanel/>
                        <div className="page-inner">
                            <PageHeader pageTitle={"Satılan Kitaplar"}/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Satılan Kitaplar</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-sub">
                                                Satılan Kitap Listeleri Burada Yer Alır
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                            <TableHeader titleData={this.state.tableTitle}/>
                                        <TableBody tableColumn={this.state.tableTitle} tableRow={this.state.tableData} />

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loginData: state,
    }
}
export default connect(mapStateToProps, {isLogin})(SoldBooks)
