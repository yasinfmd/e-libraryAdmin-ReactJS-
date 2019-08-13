import  React,{Component,Fragment} from 'react'
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import MainPanel from "../../shared/MainPanel";
import Footer from "../../shared/Footer";
import PageHeader from "../../shared/PageHeader";
import {isLogin,getSoldBooksDetail}  from  '../../actions'
import {connect} from "react-redux";
import  CustomCard from '../../components/CustomCard/CustomCard'
import  Plugin from '../../Plugins/Component'
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

class SoldDetail extends  Component{

    constructor(props) {

        super(props);
        this.state={
            soldDetail:[],
            dataLoad:false,
            authors:[]
        }
    }
    getBookDetail(token){
        debugger
        this.setState({
            dataLoad:false
        })
        let data=Plugin.urlParse("ub.id="+this.props.match.params.Id)
        this.props.getSoldBooksDetail(token,data)
    }
        componentDidMount() {
        debugger
            if(localStorage.getItem("idtoken")!=null && localStorage.getItem("idtoken")!=""){
                const response=  this.props.isLogin(localStorage.getItem("idtoken"))
                if(response.payload.token !=null && response.payload.token && response.payload.islogin!==false){
                    this.getBookDetail(response.payload.token);
                }else{
                    this.props.history.push("/")
                }
            }else{
                this.props.history.push("/")
            }
        }
        componentWillReceiveProps(nextProps, nextContext) {
        debugger
            if(nextProps.book.err===false){
                let authorsInfo=[]
                let price=0
                nextProps.book.soldBookDetail.forEach((x)=>{
                    authorsInfo.push({
                        authorsage: x.authorsage,
                        authorscountry:x.authorscountry,
                        authorsid:x.authorsid,
                        authorslastname:x.authorslastname,
                        authorsname:x.authorsname,
                        authorimg:   "https://img.icons8.com/bubbles/2x/user.png",
                        bookname:x.bookname
                    })
                        x.bookimg="https://www.onlinefizik.com/wp-content/uploads/2007/02/kitap.png"

                })
                debugger
                this.setState((state,props)=>{
                    debugger
                    return{
                        authors:authorsInfo,
                        dataLoad:true,
                        soldDetail:props.book.soldBookDetail[0]
                    }
                })
            }else{
                debugger
                this.setState({
                    soldDetail:[],
                    dataLoad:true,
                })
            }
        }

    render() {
        let soldbook;
        if(this.state.dataLoad===true && this.state.soldDetail &&   this.props.book.err===false){
            soldbook=
                <div className="row">
                            <CustomCard
                                authorsInfo={this.state.authors}
                                        typename={this.state.soldDetail.typename}
                                        pagecount={this.state.soldDetail.pagecount}
                                        releasedate={this.state.soldDetail.releasedate}
                                        bookname={this.state.soldDetail.bookname}
                                        titleImg={this.state.soldDetail.bookimg} />

                    <div className="col-md-6">
                        <div className="card card-post card-round">
                            <p className={"text-center mt-3"}>               Satış Bilgileri
                            </p>
                            <div className="separator-solid"></div>
                            <div className="card-body">
                                <p className="card-category text-info mb-1">Satın Alan Kişi Bilgileri</p>
                                <div className="d-flex">
                                    <div className="avatar">

                                        <img src="../assets/img/profile2.jpg" alt="..."
                                             className="avatar-img rounded-circle"/>
                                    </div>
                                    <div className="info-post ml-2">
                                        <p className="username"> Adı Soyadı :  {this.state.soldDetail.username}  {this.state.soldDetail.userlastname}</p>
                                        <p className="date text-muted">IP Adresi : {this.state.soldDetail.ipadres}</p>
                                        <p className="date text-muted">Satın Alım Tarihi : {this.state.soldDetail.solddate}</p>
                                    </div>
                                </div>
                                <div className="separator-solid"></div>
                                <p className="card-category text-info mb-1">Satış Bilgileri</p>
                                <div className="info-post ml-2">
                                    <p className="username"> Ücret :  {this.state.soldDetail.price} </p>
                                    <p className="username">Ödeme Şekli : {this.state.soldDetail.ptype}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }else if(this.state.dataLoad===false) {
            soldbook=<Spinner/>
        }else if(this.state.dataLoad===true && this.props.book.err==204){
            soldbook=<Error/>
        }
        else if(this.state.dataLoad===true && this.props.book.err==401){
            soldbook=<Error/>
        }
        else if(this.state.dataLoad===true && this.props.book.err==500){
            soldbook=<Error/>
        }
        return (
                <Fragment>
                    <Header/>
                    <Sidebar/>
                    <div className="main-panel">
                        <div className="content">
                            <MainPanel/>
                            <div className="page-inner">
                                <PageHeader pageTitle={"Kitap Detayı"}/>
                                {soldbook}
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </Fragment>
        );
    }

}
const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state.Login,
        book:state.Books
    }
}
export  default  connect(mapStateToProps,{isLogin,getSoldBooksDetail})(SoldDetail)
