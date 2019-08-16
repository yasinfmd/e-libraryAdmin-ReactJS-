import React, {Component, Fragment} from 'react'
import PageHeader from "../../shared/PageHeader";
import Input from '../../components/Input/Input'
import {isLogin, getAllBooks} from '../../actions'
import Plugin from '../../Plugins/Component'
import DatePicker, {registerLocale} from 'react-datepicker';
import momet from 'moment'
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

class EditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoad: false,
            authorsList: [],
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
            selectdata: [],
            defaulttype: "",
            defaultAuthors: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.getAuthors = this.getAuthors.bind(this)
        this.getBooksType = this.getBooksType.bind(this)
        this.deleteAuthors = this.deleteAuthors.bind(this)
        this.goDetail = this.goDetail.bind(this)
        this.test = this.test.bind(this)
    }

    test(e) {
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
            console.log(this.state)
            if (res.status == 200 || res.status == 204) {
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

    deleteAuthors(item) {
        debugger
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps)
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
                        groupedData[keys[i]][0].releasedate = new Date(momet(groupedData[keys[i]][0].releasedate))
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
            console.log(this.state)
        } else {
            this.setState({
                tableData: [],
                dataLoad: true,
            })
        }
    }

    handleChange(e) {
        if (e.target.value == 0) {
            Plugin.showalert("Lütfen Türünü Belirtiniz", "error", "Tamam")
        } else {
            this.setState({defaulttype: e.target.value});
        }
    }

    componentDidMount() {
        if (localStorage.getItem("idtoken") != null && localStorage.getItem("idtoken") != "") {
            const response = this.props.isLogin(localStorage.getItem("idtoken"))
            if (response.payload.token != null && response.payload.token && response.payload.islogin !== false) {
                if (this.props.match.params.bookid !== undefined && this.props.match.params.bookid !== null) {
                    this.getBooksType(response.payload.token)
                } else {
                    this.setState({
                        dataLoad: false
                    })
                }
                //this.props.getAllBooks(response.payload.token);
            } else {
                this.props.history.push("/")
            }
        } else {
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
                                        {this.state.booksupdate.bookname} Adlı Kitabı Düzenleme Sayfası
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Adı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Kitap Adı"}
                                            value={this.state.booksupdate.bookname}
                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Sayfa Sayısı</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Sayfa Sayısı"}
                                            value={this.state.booksupdate.pagecount}
                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Ücreti</label>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"Kitap Ücreti"}
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
                                            selected={this.state.booksupdate.releasedate}

                                        />
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Yazar/Yazarları</label>

                                        <div className="table-responsive">
                                            <button className={"btn btn-success btn-sm mb-3"}
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

                                    <div className={"form-group form-floating-label"}>
                                        <label>Kitap Türü </label>
                                        <Select clases={"form-control input-border-bottom"}
                                                selectChange={(e) => this.handleChange(e)}
                                                optionVal={this.state.selectdata} selected={this.state.defaulttype}/>
                                    </div>
                                    <button className={"btn btn-sm btn-warning"} style={{float: "right"}}>
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
                                        Kitap Düzenleme
                                    </div>
                                    <div className={"form-group form-floating-label"}>
                                        <Input
                                            type={"text"}
                                            class={"form-control input-border-bottom"}
                                            placeholder={"aaaa"}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        } else if (this.state.dataLoad === true && this.props.allBooks.err == 401) {
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
export default connect(mapStateToProps, {isLogin, getAllBooks})(EditBook)
