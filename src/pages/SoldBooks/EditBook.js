import React, {Component} from 'react'
import PageHeader from "../../shared/PageHeader";
import Input from '../../components/Input/Input'
import {isLogin, getAllBooks, Quit,setBook} from '../../actions'
import Plugin from '../../Plugins/Component'
import DatePicker, {registerLocale} from 'react-datepicker';
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import WSProvider from '../../Provider/WSProvider'
import {connect} from "react-redux";
import Select from '../../components/Select/Select'
import _ from "underscore";
import ButtonGroup from "../../components/ButonGroup/ButonGroup";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableBody from "../../components/TableBody/TableBody";
import Container from "../Container/Container";
import swal from 'sweetalert'

class EditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoad: false,
            authorsList: [],
            token:"",
            authorsLoad: false,
            booksupdate: {

                bookname: "",
                bookstype: "",
                bookstypeid: "",
                pagecount: "",
                price: "",
                releasedate: "",
                typename: "",
            },
            addauthor: false,
            selectedAuthors: 0,
            selectdata: [],
            defaulttype: "",
            defaultAuthors: []
        }
        this.authorChange = this.authorChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getAuthors = this.getAuthors.bind(this)
        this.getBooksType = this.getBooksType.bind(this)
        this.goDetail = this.goDetail.bind(this)
        this.deleteAuthors = this.deleteAuthors.bind(this)
        this.addAuth = this.addAuth.bind(this)
        this.checkField = this.checkField.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange(date) {
        debugger
        this.setState({
            booksupdate: {
                bookname: this.state.booksupdate.bookname,
                bookstype: this.state.booksupdate.bookstype,
                bookstypeid: this.state.booksupdate.bookstypeid,
                pagecount: this.state.booksupdate.pagecount,
                price: this.state.booksupdate.price,
                releasedate: date,
                typename: this.state.booksupdate.typename,
            }
        });
    }

    addAuth() {
        this.setState({
            addauthor: true
        })
    }
    setBooks(){
        debugger
        let param=Plugin.urlParse("bookid="+this.props.match.params.bookid)
        let date=moment(this.state.booksupdate.releasedate).format("YYYY-MM-DD")
        const updated={
            bookname: this.state.booksupdate.bookname,
            bookstype: this.state.booksupdate.bookstype,
            bookstypeid: this.state.booksupdate.bookstypeid,
            pagecount: this.state.booksupdate.pagecount,
            price: this.state.booksupdate.price,
            releasedate: date,
            typename: this.state.booksupdate.typename,
        }
        let author=[]
        this.state.tableData.forEach((x)=>{
            author.push({
                authorsid:x.authorsid
            })
        })
        this.props.setBook(this.state.token,param,[updated],author,this.props.match.params.bookid)
    }

    checkField() {
        if (this.state.booksupdate.bookname.trim() == "" || this.state.booksupdate.bookname.trim().length < 1) {
            Plugin.showalert("Kitap Adı Geçersiz", "warning", "Tamam")
        } else if (this.state.booksupdate.pagecount.trim() == "" ) {
            Plugin.showalert("Kitap Sayfa Sayısı Geçersiz", "warning", "Tamam")
        }
        else if (this.state.booksupdate.price.trim() == "" ) {
            Plugin.showalert("Kitap Ücreti Geçersiz", "warning", "Tamam")
        }
        else if (this.state.tableData.length===0 ) {
            Plugin.showalert("Kitap Yazarı Belirtiniz", "warning", "Tamam")
        }else {
            this.setBooks()

            /*updatedData
            * */
        }
        debugger
    }

    getBooksType(token) {
        WSProvider.ajaxPost("", {
            SN: "BooksTypes",
            MN: "getBooksType",
            token,
            param: null
        }).then((res) => {
            if (res.status == 200 || res.status == 204) {
                const query = Plugin.urlParse("b.bookid=" + this.props.match.params.bookid)
                this.props.getAllBooks(token, query)
                res.data.forEach((x) => {
                    x.key = x.bookstypeid
                    x.title = x.typename
                })
                res.data.unshift({
                    key: "0",
                    title: "Seçiniz ..."
                })
                this.setState({
                    dataLoad: true,
                    selectdata: res.data
                })
                this.getAuthors(token)
            } else {
                this.setState({
                    dataLoad: false,
                })
            }

        })
    }

    getAuthors(token) {
        WSProvider.ajaxPost("", {SN: "Authors", MN: "getAuthors", token, param: null}).then((res) => {
            if (res.status == 200 || res.status == 204) {
                res.data.forEach((x) => {
                    x.key = x.authorsid
                    x.title = x.authorsname + " " + x.authorslastname
                })
                res.data.unshift({
                    key: "0",
                    title: "Yazar Seçiniz"
                })
                this.setState({
                    defaultAuthors: [],
                    authorsList: res.data,
                    authorsLoad: true
                })
            }
        })
    }

    goDetail(item) {
        this.props.history.replace("/YazarBilgisi/" + item)
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.allBooks.err===false && nextProps.allBooks.updatedBook && nextProps.allBooks.updatedBook.length>0){
            Plugin.showalert("Güncelleme İşlemi Başarılı","success","Tamam")
        }else if(nextProps.allBooks.err===false   && nextProps.allBooks.updatedBook  && nextProps.allBooks.updatedBook.length<0){
            Plugin.showalert("Güncelleme İşlemi Sırasında Bir Hata Gerçekleşti","error","Tamam")
        } else if (nextProps.allBooks.err == 401) {
            this.props.Quit()
            this.props.history.replace("/")
        } else if (nextProps.allBooks.err== 500) {
            Plugin.showalert("Güncelleme İşlemi Sırasında Bir Hata Gerçekleşti","error","Tamam")
        }
        if (nextProps.allBooks.err === false) {
            let booksData = []
            let authorsData = []
            var groupedData = _.groupBy(nextProps.allBooks.allBookList, "bookid")
            let keys = Object.keys(groupedData)
            for (let i = 0; i < keys.length; i++) {
                for (let j = 0; j < groupedData[keys[i]].length; j++) {
                    authorsData.push(
                        {
                            authorsid: groupedData[keys[i]][j].authorsid,
                            authorscountry: groupedData[keys[i]][j].authorscountry,
                            authorsage: groupedData[keys[i]][j].authorsage,
                            authorsname: groupedData[keys[i]][j].authorsname,
                            authorslastname: groupedData[keys[i]][j].authorslastname,
                            actions: <ButtonGroup deleteVisible=""
                                                  deleteBtnIcon={"fas fa-trash-alt"}
                                                  deleteBtnToolTip={"Yazarı Sil"}
                                                  deleteClick={() => this.deleteAuthors(groupedData[keys[i]][j])}
                                                  saveVisible={"none"} editVisible={"none"}
                                                  infoBtnIcon={"fa fa-eye"}
                                                  infoBtnClck={() => this.goDetail(groupedData[keys[i]][j].authorsid)}
                                                  infoBtnToolTip={"Yazarın Bilgilerini Göster"}
                                                  Visible={"none"}/>
                        }
                    )
                    if (j === groupedData[keys[i]].length - 1) {
                        groupedData[keys[i]][0].actions = <ButtonGroup deleteVisible=""
                                                                       deleteBtnIcon={"fas fa-trash-alt"}
                                                                       deleteBtnToolTip={"Bu Kitabı Sil"}
                                                                       saveVisible={"none"}
                                                                       editBtnToolTip={"Düzenle"}
                                                                       editBtnIcon={"fas fa-edit"}
                                                                       editVisible=""
                                                                       infoBtnIcon={"fa fa-eye"}
                                                                       detailVisible="none"
                                                                       infoBtnToolTip={"Detayını Göster"}
                                                                       Visible={"none"}/>
                        groupedData[keys[i]][0].releasedate = new Date(moment(groupedData[keys[i]][0].releasedate))
                        groupedData[keys[i]][0].authorsInfo = authorsData
                        authorsData = []
                    }
                }
                booksData.push(
                    groupedData[keys[i]][0]
                )
            }
        console.log(booksData[0].authorsInfo)
            this.setState({
                dataLoad: true,
                tableData: booksData[0].authorsInfo,
                tableTitle: [
                    {
                        title: "#",
                        col: "authorsid"
                    },
                    {
                        title: "İsim",
                        col: "authorsname"
                    },
                    {
                        title: "Soyisim",
                        col: "authorslastname",
                    },
                    {
                        title: "Yaş",
                        col: "authorsage"
                    },
                    {
                        title: "Ülkesi",
                        col: "authorscountry"
                    },
                    {
                        title: "İşlemler",
                        col: "actions"
                    }
                ],
                defaulttype: booksData[0].bookstype,
                booksupdate: {
                    bookname: booksData[0].bookname,
                    bookstype: booksData[0].bookstype,
                    bookstypeid: booksData[0].bookstypeid,
                    pagecount: booksData[0].pagecount,
                    price: booksData[0].price,
                    releasedate: booksData[0].releasedate,
                    typename: booksData[0].typename,
                }
            })
        } else {
            this.setState({
                tableData: [],
                dataLoad: true,
            })
        }
    }

    authorChange(e) {


        if (e.target.value == 0) {
            Plugin.showalert("Lütfen Yazar Belirtiniz", "error", "Tamam")
        } else {

            var item = this.state.tableData.filter((x) => {
                return x.authorsid == e.target.value
            })
            if (item.length != 0) {
                Plugin.showalert("Bu Yazar Zaten Mevcut", "error", "Tamam")
            } else {
                let nowauthors = this.state.tableData
                let authors = this.state.authorsList.filter((x) => {
                    return x.authorsid == e.target.value
                })
                authors[0].actions = <ButtonGroup deleteVisible=""
                                                  deleteBtnIcon={"fas fa-trash-alt"}
                                                  deleteBtnToolTip={"Yazarı Sil"}
                                                  deleteClick={() => this.deleteAuthors(authors[0])}
                                                  saveVisible={"none"} editVisible={"none"}
                                                  infoBtnIcon={"fa fa-eye"}
                                                  infoBtnClck={() => this.goDetail(authors[0].authorsid)}
                                                  infoBtnToolTip={"Yazarın Bilgilerini Göster"}
                                                  Visible={"none"}/>
                nowauthors.push(authors[0])
                this.setState({
                    tableData: nowauthors
                })
            }
            this.setState({selectedAuthors: e.target.value});
        }
    }

    handleChange(e) {
        if (e.target.value == 0) {
            Plugin.showalert("Lütfen Türünü Belirtiniz", "error", "Tamam")
        } else {
            this.setState({defaulttype: e.target.value,
                booksupdate: {

                    bookname: this.state.booksupdate.bookname,
                    bookstype:  e.target.value,
                    bookstypeid:  e.target.value,
                    pagecount: this.state.booksupdate.pagecount,
                    price: this.state.booksupdate.price,
                    releasedate: this.state.booksupdate.releasedate,
                    typename:this.state.booksupdate.typename,
                },

            });
        }
    }


    deleteAuthors(author) {
        debugger
        swal({
            title: "Silmek İstediginize Emin Misiniz ?",
            icon: "warning",
            buttons: ["Hayır", "Evet"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    var deleted = this.state.tableData.filter((x) => {
                        return x.authorsid != author.authorsid
                    })
                    this.setState({
                        tableData: deleted
                    })
                }
            });

    }

    componentDidMount() {
        if (localStorage.getItem("idtoken") != null && localStorage.getItem("idtoken") != "") {
            const response = this.props.isLogin(localStorage.getItem("idtoken"))
            if (response.payload.token != null && response.payload.token && response.payload.islogin !== false) {
                if (this.props.match.params.bookid !== undefined && this.props.match.params.bookid !== null) {
                    this.getBooksType(response.payload.token)
                    this.setState({
                        token:response.payload.token
                    })
                } else {
                    this.setState({
                        dataLoad: false
                    })
                }
                //this.props.getAllBooks(response.payload.token);
            } else {
                this.props.Quit()
                this.props.history.push("/")
            }
        } else {
            this.props.Quit();
            this.props.history.push("/")
        }
    }

    render() {
        let book;
        if (this.state.dataLoad && this.props.allBooks.err === false) {
            book =
                <div className="page-inner">
                    <PageHeader pageTitle={"Kitap Düzenle"}/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Kitap Düzenle</div>
                                </div>
                                <div className="card-body">
                                    <div className="card-sub">
                                        {this.state.booksupdate.bookname} Adlı Kitap Düzenleme Sayfası
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Adı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Kitap Adı"}
                                            onChange={(e) => {
                                                this.setState({
                                                    booksupdate: {
                                                        bookname: e.target.value,
                                                        bookstype: this.state.booksupdate.bookstype,
                                                        bookstypeid: this.state.booksupdate.bookstypeid,
                                                        pagecount: this.state.booksupdate.pagecount,
                                                        price: this.state.booksupdate.price,
                                                        releasedate: this.state.booksupdate.releasedate,
                                                        typename: this.state.booksupdate.typename,
                                                    },
                                                })
                                            }}
                                            value={this.state.booksupdate.bookname}
                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Sayfa Sayısı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Sayfa Sayısı"}
                                            onChange={(e) => {
                                                this.setState({
                                                    booksupdate: {
                                                        pagecount: e.target.value,
                                                        bookname: this.state.booksupdate.bookname,
                                                        bookstype: this.state.booksupdate.bookstype,
                                                        bookstypeid: this.state.booksupdate.bookstypeid,
                                                        price: this.state.booksupdate.price,
                                                        releasedate: this.state.booksupdate.releasedate,
                                                        typename: this.state.booksupdate.typename,
                                                    },
                                                })
                                            }}
                                            value={this.state.booksupdate.pagecount}
                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Ücreti</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Kitap Ücreti"}
                                            onChange={(e) => {
                                                this.setState({
                                                    booksupdate: {
                                                        price: e.target.value,
                                                        pagecount: this.state.booksupdate.pagecount,
                                                        bookname: this.state.booksupdate.bookname,
                                                        bookstype: this.state.booksupdate.bookstype,
                                                        bookstypeid: this.state.booksupdate.bookstypeid,
                                                        releasedate: this.state.booksupdate.releasedate,
                                                        typename: this.state.booksupdate.typename,
                                                    },
                                                })
                                            }}
                                            value={this.state.booksupdate.price}
                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Yayınlanma Tarihi</label><br/>
                                        <DatePicker
                                            className="form-control input-border-bottom"
                                            placeholderText="Tarih Seçiniz"
                                            todayButton={"Bugün"}
                                            locale="tr-TR"
                                            dateFormat="yyyy-MM-dd"
                                            onChange={this.handleDateChange}
                                            selected={this.state.booksupdate.releasedate}
                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Yazar/Yazarları</label>

                                        <div className="table-responsive">
                                            <button
                                                onClick={this.addAuth}
                                                className={"btn btn-success btn-sm mb-3"}
                                                style={{float: "right"}}> Yeni Yazar Ekle
                                            </button>
                                            <table
                                                className="table table-bordered table-head-bg-info table-bordered-bd-info mt-4">
                                                <TableHeader titleData={this.state.tableTitle}/>
                                                <TableBody tableColumn={this.state.tableTitle}
                                                           tableRow={this.state.tableData}/>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={"form-group form-floating-label"}
                                         style={{display: this.state.addauthor ? "" : "none"}}>
                                        <label>Yazar Seç</label>
                                        <Select clases={"form-control input-border-bottom"}
                                                selectChange={(e) => this.authorChange(e)}
                                                optionVal={this.state.authorsList}
                                                selected={this.state.selectedAuthors}/>
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Türü </label>
                                        <Select clases={"form-control input-border-bottom"}
                                                selectChange={(e) => this.handleChange(e)}
                                                optionVal={this.state.selectdata} selected={this.state.defaulttype}/>
                                    </div>
                                    <button
                                        onClick={this.checkField}
                                        className={"btn btn-sm btn-warning"} style={{float: "right"}}>
                                        Kaydet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        } else if (this.state.dataLoad === false) {
            book = <Spinner/>
        } else if (this.state.dataLoad === true && this.props.allBooks.err == 204) {
            book = <Error/>

        } else if (this.state.dataLoad === true && this.props.allBooks.err == 401) {
            this.props.Quit()
            this.props.history.replace("/")
            book = <Error/>
        } else if (this.state.dataLoad === true && this.props.allBooks.err == 500) {
            book = <Error/>
        }

        return (
            <Container>
                {book}
            </Container>


        );
    }

}

const mapStateToProps = (state) => {
    debugger
    return {
        loginData: state.Login,
        allBooks: state.ABooks
    }
}
export default connect(mapStateToProps, {isLogin, getAllBooks, Quit,setBook})(EditBook)
