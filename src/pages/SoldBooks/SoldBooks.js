import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import history from '../../history/history'
import PageHeader from '../../shared/PageHeader'
import {isLogin,getSoldBooks} from "../../actions";
import TableHeader from '../../components/TableHeader/TableHeader'
import TableBody from '../../components/TableBody/TableBody'
import moment from 'moment'
import ButtonGroup from '../../components/ButonGroup/ButonGroup'
import  Spinner from '../../components/Spinner/Spinner'
import DatePicker, { registerLocale } from 'react-datepicker';
import Plugin from '../../Plugins/Component'
import  Error from '../../components/Error/Error'
import "react-datepicker/dist/react-datepicker.css";
import Container from "../Container/Container";

class SoldBooks extends Component {
    constructor(props) {
        super(props);
        this.deleteSoldBook=this.deleteSoldBook.bind(this)
        this.getSoldBook=this.getSoldBook.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.endDataChange=this.endDataChange.bind(this)
        this.getBooksFilter=this.getBooksFilter.bind(this)
        this.goDetail=this.goDetail.bind(this)
        this.state={
            startDate: new Date(),
            endDate:new Date(),
            dataLoad:false,
            tableData:[],
            tableTitle:[],
            totalprice:0
        }
    }
    getSoldBook(token){
        this.setState({
            dataLoad:false
        })
        this.props.getSoldBooks(token)
    }
    endDataChange(date){
        this.setState({
            endDate: date
        });
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    goDetail(item){
        this.props.history.push('/SatisDetay/'+item.id);
    }
    getBooksFilter(){
        this.setState({
            dataLoad:false
        })
        let data=Plugin.urlParse("ub.solddate >" + moment(this.state.startDate).format("YYYY-MM-DD") +
        "& ub.solddate <"+ moment(this.state.endDate).format("YYYY-MM-DD")
        )
        this.props.getSoldBooks(this.props.loginData.token, data);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.book.err===false){
            let price=0
            nextProps.book.soldbooksList.forEach((x)=>{
                x.actions= <ButtonGroup deleteVisible=""
                                        deleteBtnIcon={"fas fa-trash-alt"}
                                        deleteBtnToolTip={"Bu İşlemi Sil"}
                                        saveVisible={"none"} editVisible={"none"}
                                         infoBtnIcon={"fa fa-eye"}
                                        infoBtnToolTip={"Detayını Göster"}
                                        infoBtnClck={()=>this.goDetail(x)}
                                        Visible={"none"} />
                price+=parseFloat(x.price)
            })
            this.setState({
                dataLoad:true,
                totalprice:price.toFixed(2)+ " " +"TL",
                tableData: nextProps.book.soldbooksList,
                tableTitle:[
                    {
                        title:"İsim",
                        col:"username"
                    },
                    {
                        title:"Soyisim",
                        col:"userlastname",
                    },
                    {
                        title:"IP",
                        col:"ipadres"
                    },
                    {
                        title:"Kitap Adı",
                        col:"bookname"
                    },
                    {
                        title:"Ücret",
                        col:"price"
                    },
                    {
                        title:"İşlemler",
                        col:"actions"
                    }
                ]
            })
        }else{
            this.setState({
                tableData:[],
                dataLoad:true,
                totalprice:0
            })
        }
    }

    deleteSoldBook(book){
            debugger
        }
    componentDidMount() {
        if(localStorage.getItem("idtoken")!=null && localStorage.getItem("idtoken")!=""){
            const response=  this.props.isLogin(localStorage.getItem("idtoken"))
            if(response.payload.token !=null && response.payload.token && response.payload.islogin!==false){
                this.setState({
                    Token: response.payload.token,
                    islogin: response.payload.islogin
                })
                this.getSoldBook(response.payload.token);
            }else{
                this.props.history.push("/")
            }
        }else{
            this.props.history.push("/")
        }
    }
    render() {
        debugger
        let soldbook;
        if(this.state.dataLoad && this.props.book.err===false){
            soldbook=                        <div className="page-inner">
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
                                <div className="card-sub">
                                    <small>Başlangıç Tarihi : </small>
                                    <DatePicker
                                    className="form-control"
                                    placeholderText="Tarih Seçiniz"
                                    todayButton={"Bugün"}
                                    locale="tr-TR"
                                    dateFormat="yyyy-MM-dd"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                                    <small style={{marginLeft:"10px"}}>Bitiş Tarihi : </small>
                                    <DatePicker
                                        className="form-control"
                                        placeholderText="Tarih Seçiniz"
                                        todayButton={"Bugün"}
                                        locale="tr-TR"
                                        dateFormat="yyyy-MM-dd"
                                        selected={this.state.endDate}
                                        onChange={this.endDataChange}
                                    />
                                    <button className={"btn  btn-info"} style={{float:"right"}} onClick={()=>this.getBooksFilter()}>Ara</button>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                        <caption>Toplam Satılan Kitap Sayısı : {this.state.tableData.length}</caption>
                                        <caption>Toplam Kazanç : {this.state.totalprice} </caption>
                                        <TableHeader titleData={this.state.tableTitle}/>
                                        <TableBody tableColumn={this.state.tableTitle} tableRow={this.state.tableData} />

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }else if(this.state.dataLoad===false) {
            soldbook=<Spinner/>
        }
        else if(this.state.dataLoad===true && this.props.book.err==204){
            soldbook=
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
                                    <div className="card-sub">
                                        <small>Başlangıç Tarihi : </small>
                                        <DatePicker
                                            className="form-control"
                                            placeholderText="Tarih Seçiniz"
                                            todayButton={"Bugün"}
                                            locale="tr-TR"
                                            dateFormat="yyyy-MM-dd"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                        />
                                        <small style={{marginLeft:"10px"}}>Bitiş Tarihi : </small>
                                        <DatePicker
                                            className="form-control"
                                            placeholderText="Tarih Seçiniz"
                                            todayButton={"Bugün"}
                                            locale="tr-TR"
                                            dateFormat="yyyy-MM-dd"
                                            selected={this.state.endDate}
                                            onChange={this.endDataChange}
                                        />
                                        <button className={"btn  btn-info"} style={{float:"right"}} onClick={()=>this.getBooksFilter()}>Ara</button>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                            <caption>Toplam Satılan Kitap Sayısı : {this.state.tableData.length}</caption>
                                            <caption>Toplam Kazanç : {this.state.totalprice} </caption>
                                            <TableHeader titleData={this.state.tableTitle}/>
                                            <TableBody tableColumn={this.state.tableTitle} tableRow={this.state.tableData} />

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
        else if(this.state.dataLoad===true && this.props.book.err==401){
            soldbook=<Error/>
        }
        else if(this.state.dataLoad===true && this.props.book.err==500){
            soldbook=<Error/>
        }
        return (
                <Container>
                        {soldbook}
                </Container>
                        )
    }

}

const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state.Login,
        book:state.Books
    }
}
export default connect(mapStateToProps, {isLogin,getSoldBooks})(SoldBooks)
