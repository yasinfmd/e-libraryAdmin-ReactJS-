import React, {Component, Fragment} from 'react'
import IstatisticsCards from "../../components/IstatisticsCards/IstatisticsCards";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import MainPanel from "../../shared/MainPanel";
import Footer from "../../shared/Footer";
import {connect} from "react-redux";
import {isLogin} from '../../actions'
import history from '../../history/history'
import Plugin from '../../Plugins/Component'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Token: "",
            islogin: false
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
                            <IstatisticsCards title={"Satışlar"}/>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-secondary">
                                        <div className="card-body skew-shadow">
                                            <h1>3,072</h1>
                                            <h5 className="op-8">Total conversations</h5>
                                            <div className="pull-right">
                                                <h3 className="fw-bold op-8">88%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-dark bg-secondary-gradient">
                                        <div className="card-body bubble-shadow">
                                            <h1>188</h1>
                                            <h5 className="op-8">Total Sales</h5>
                                            <div className="pull-right">
                                                <h3 className="fw-bold op-8">25%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-dark bg-secondary2">
                                        <div className="card-body curves-shadow">
                                            <h1>12</h1>
                                            <h5 className="op-8">New Users</h5>
                                            <div className="pull-right">
                                                <h3 className="fw-bold op-8">70%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-dark bg-secondary-gradient">
                                        <div className="card-body skew-shadow">
                                            <img src="../assets/img/visa.svg" height="12.5" alt="Visa Logo"/>
                                            <h2 className="py-4 mb-0">1234 **** **** 5678</h2>
                                            <div className="row">
                                                <div className="col-8 pr-0">
                                                    <h3 className="fw-bold mb-1">Sultan Ghani</h3>
                                                    <div className="text-small text-uppercase fw-bold op-8">Card
                                                        Holder
                                                    </div>
                                                </div>
                                                <div className="col-4 pl-0 text-right">
                                                    <h3 className="fw-bold mb-1">4/26</h3>
                                                    <div className="text-small text-uppercase fw-bold op-8">Expired
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-dark bg-secondary-gradient">
                                        <div className="card-body bubble-shadow">
                                            <img src="../assets/img/visa.svg" height="12.5" alt="Visa Logo"/>
                                            <h2 className="py-4 mb-0">1234 **** **** 5678</h2>
                                            <div className="row">
                                                <div className="col-8 pr-0">
                                                    <h3 className="fw-bold mb-1">Sultan Ghani</h3>
                                                    <div className="text-small text-uppercase fw-bold op-8">Card
                                                        Holder
                                                    </div>
                                                </div>
                                                <div className="col-4 pl-0 text-right">
                                                    <h3 className="fw-bold mb-1">4/26</h3>
                                                    <div className="text-small text-uppercase fw-bold op-8">Expired
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-dark bg-secondary-gradient">
                                        <div className="card-body curves-shadow">
                                            <img src="../assets/img/visa.svg" height="12.5" alt="Visa Logo"/>
                                            <h2 className="py-4 mb-0">1234 **** **** 5678</h2>
                                            <div className="row">
                                                <div className="col-8 pr-0">
                                                    <h3 className="fw-bold mb-1">Sultan Ghani</h3>
                                                    <div className="text-small text-uppercase fw-bold op-8">Card
                                                        Holder
                                                    </div>
                                                </div>
                                                <div className="col-4 pl-0 text-right">
                                                    <h3 className="fw-bold mb-1">4/26</h3>
                                                    <div className="text-small text-uppercase fw-bold op-8">Expired
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <div className="h1 fw-bold float-right text-primary">+5%</div>
                                            <h2 className="mb-2">17</h2>
                                            <p className="text-muted">Users online</p>
                                            <div className="pull-in sparkline-fix">
                                                <div id="lineChart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <div className="h1 fw-bold float-right text-danger">-3%</div>
                                            <h2 className="mb-2">27</h2>
                                            <p className="text-muted">New Users</p>
                                            <div className="pull-in sparkline-fix">
                                                <div id="lineChart2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <div className="h1 fw-bold float-right text-warning">+7%</div>
                                            <h2 className="mb-2">213</h2>
                                            <p className="text-muted">Transactions</p>
                                            <div className="pull-in sparkline-fix">
                                                <div id="lineChart3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-dark bg-primary-gradient">
                                        <div className="card-body pb-0">
                                            <div className="h1 fw-bold float-right">+5%</div>
                                            <h2 className="mb-2">17</h2>
                                            <p>Users online</p>
                                            <div className="pull-in sparkline-fix chart-as-background">
                                                <div id="lineChart4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-body pb-0">
                                            <div className="h1 fw-bold float-right">-3%</div>
                                            <h2 className="mb-2">27</h2>
                                            <p>New Users</p>
                                            <div className="pull-in sparkline-fix chart-as-background">
                                                <div id="lineChart5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-dark bg-success2">
                                        <div className="card-body pb-0">
                                            <div className="h1 fw-bold float-right">+7%</div>
                                            <h2 className="mb-2">213</h2>
                                            <p>Transactions</p>
                                            <div className="pull-in sparkline-fix chart-as-background">
                                                <div id="lineChart6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>Todays Income</b></h5>
                                                    <p className="text-muted">All Customs Value</p>
                                                </div>
                                                <h3 className="text-info fw-bold">$170</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-info w-75" role="progressbar"
                                                     aria-valuenow="75"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">75%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>Total Revenue</b></h5>
                                                    <p className="text-muted">All Customs Value</p>
                                                </div>
                                                <h3 className="text-success fw-bold">$120</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-success w-25" role="progressbar"
                                                     aria-valuenow="25"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>New Orders</b></h5>
                                                    <p className="text-muted">Fresh Order Amount</p>
                                                </div>
                                                <h3 className="text-danger fw-bold">15</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-danger w-50" role="progressbar"
                                                     aria-valuenow="50"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">50%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>New Users</b></h5>
                                                    <p className="text-muted">Joined New User</p>
                                                </div>
                                                <h3 className="text-secondary fw-bold">12</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-secondary w-25" role="progressbar"
                                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-card-no-pd mt--2">
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>Todays Income</b></h5>
                                                    <p className="text-muted">All Customs Value</p>
                                                </div>
                                                <h3 className="text-info fw-bold">$170</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-info w-75" role="progressbar"
                                                     aria-valuenow="75"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">75%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>Total Revenue</b></h5>
                                                    <p className="text-muted">All Customs Value</p>
                                                </div>
                                                <h3 className="text-success fw-bold">$120</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-success w-25" role="progressbar"
                                                     aria-valuenow="25"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>New Orders</b></h5>
                                                    <p className="text-muted">Fresh Order Amount</p>
                                                </div>
                                                <h3 className="text-danger fw-bold">15</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-danger w-50" role="progressbar"
                                                     aria-valuenow="50"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">50%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5><b>New Users</b></h5>
                                                    <p className="text-muted">Joined New User</p>
                                                </div>
                                                <h3 className="text-secondary fw-bold">12</h3>
                                            </div>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-secondary w-25" role="progressbar"
                                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <p className="text-muted mb-0">Change</p>
                                                <p className="text-muted mb-0">25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-success">
                                                6%
                                                <i className="fa fa-chevron-up"></i>
                                            </div>
                                            <div className="h1 m-0">43</div>
                                            <div className="text-muted mb-3">New Tickets</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-danger">
                                                -3%
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <div className="h1 m-0">17</div>
                                            <div className="text-muted mb-3">Closed Today</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-success">
                                                9%
                                                <i className="fa fa-chevron-up"></i>
                                            </div>
                                            <div className="h1 m-0">7</div>
                                            <div className="text-muted mb-3">New Replies</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-success">
                                                3%
                                                <i className="fa fa-chevron-up"></i>
                                            </div>
                                            <div className="h1 m-0">27.3K</div>
                                            <div className="text-muted mb-3">Followers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-danger">
                                                -2%
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <div className="h1 m-0">$95</div>
                                            <div className="text-muted mb-3">Daily Earnings</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-danger">
                                                -1%
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <div className="h1 m-0">621</div>
                                            <div className="text-muted mb-3">Products</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
									<span className="stamp stamp-md bg-secondary mr-3">
										<i className="fa fa-dollar-sign"></i>
									</span>
                                            <div>
                                                <h5 className="mb-1"><b><a href="#">132 <small>Sales</small></a></b>
                                                </h5>
                                                <small className="text-muted">12 waiting payments</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
									<span className="stamp stamp-md bg-success mr-3">
										<i className="fa fa-shopping-cart"></i>
									</span>
                                            <div>
                                                <h5 className="mb-1"><b><a href="#">78 <small>Orders</small></a></b>
                                                </h5>
                                                <small className="text-muted">32 shipped</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
									<span className="stamp stamp-md bg-danger mr-3">
										<i className="fa fa-users"></i>
									</span>
                                            <div>
                                                <h5 className="mb-1"><b><a href="#">1,352 <small>Members</small></a></b>
                                                </h5>
                                                <small className="text-muted">163 registered today</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
									<span className="stamp stamp-md bg-warning mr-3">
										<i className="fa fa-comment-alt"></i>
									</span>
                                            <div>
                                                <h5 className="mb-1"><b><a href="#">132 <small>Comments</small></a></b>
                                                </h5>
                                                <small className="text-muted">16 waiting</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="page-title">Timeline</h4>
                            <div className="row">
                                <div className="col-md-12">

                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-badge"><i className="flaticon-message"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                    <p>
                                                        <small className="text-muted"><i
                                                            className="flaticon-message"></i> 11 hours
                                                            ago via Twitter
                                                        </small>
                                                    </p>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-badge warning"><i className="flaticon-alarm-1"></i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge danger"><i className="flaticon-error"></i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-badge info"><i className="flaticon-price-tag"></i>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                    <hr/>
                                                    <div className="btn-group dropdown">
                                                        <button type="button"
                                                                className="btn btn-primary btn-sm dropdown-toggle"
                                                                data-toggle="dropdown">
													<span className="btn-label">
														<i className="fa fa-cog"></i>
													</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-badge success"><i
                                                className="flaticon-credit-card-1"></i></div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries
                                                        Vokalia and
                                                        Consonantia, there live the blind texts.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h4 className="page-title">Pricing</h4>
                            <div className="row justify-content-center align-items-center mb-1">
                                <div className="col-md-3 pl-md-0">
                                    <div className="card card-pricing">
                                        <div className="card-header">
                                            <h4 className="card-title">Basic</h4>
                                            <div className="card-price">
                                                <span className="price">$25</span>
                                                <span className="text">/mo</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="specification-list">
                                                <li>
                                                    <span className="name-specification">Customizer</span>
                                                    <span className="status-specification">14 days trial</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Chat History</span>
                                                    <span className="status-specification">No</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Statistics</span>
                                                    <span className="status-specification">14 days trial</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Support</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Live Support</span>
                                                    <span className="status-specification">No</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-block"><b>Get Started</b></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pl-md-0 pr-md-0">
                                    <div className="card card-pricing card-pricing-focus card-primary">
                                        <div className="card-header">
                                            <h4 className="card-title">Professional</h4>
                                            <div className="card-price">
                                                <span className="price">$35</span>
                                                <span className="text">/mo</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="specification-list">
                                                <li>
                                                    <span className="name-specification">Customizer</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Chat History</span>
                                                    <span className="status-specification">3 Month</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Statistics</span>
                                                    <span className="status-specification">3 Month</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Support</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Live Support</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-light btn-block"><b>Get Started</b></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-0">
                                    <div className="card card-pricing">
                                        <div className="card-header">
                                            <h4 className="card-title">Team</h4>
                                            <div className="card-price">
                                                <span className="price">$75</span>
                                                <span className="text">/mo</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="specification-list">
                                                <li>
                                                    <span className="name-specification">Customizer</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Chat History</span>
                                                    <span className="status-specification">1 Year</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Statistics</span>
                                                    <span className="status-specification">1 Year</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Support</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="name-specification">Live Support</span>
                                                    <span className="status-specification">Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-primary btn-block"><b>Get Started</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="page-title">Pricing 2</h4>
                            <div className="row justify-content-center align-items-center mb-5">
                                <div className="col-md-3 pl-md-0">
                                    <div className="card-pricing2 card-success">
                                        <div className="pricing-header">
                                            <h3 className="fw-bold">Standard</h3>
                                            <span className="sub-title">Lorem ipsum</span>
                                        </div>
                                        <div className="price-value">
                                            <div className="value">
                                                <span className="currency">$</span>
                                                <span className="amount">10.<span>99</span></span>
                                                <span className="month">/month</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>50GB Disk Space</li>
                                            <li>50 Email Accounts</li>
                                            <li>50GB Monthly Bandwidth</li>
                                            <li className="disable">10 Subdomains</li>
                                            <li className="disable">15 Domains</li>
                                        </ul>
                                        <a href="#" className="btn btn-success btn-border btn-lg w-75 fw-bold mb-3">Sign
                                            up</a>
                                    </div>
                                </div>
                                <div className="col-md-3 pl-md-0 pr-md-0">
                                    <div className="card-pricing2 card-primary">
                                        <div className="pricing-header">
                                            <h3 className="fw-bold">Business</h3>
                                            <span className="sub-title">Lorem ipsum</span>
                                        </div>
                                        <div className="price-value">
                                            <div className="value">
                                                <span className="currency">$</span>
                                                <span className="amount">20.<span>99</span></span>
                                                <span className="month">/month</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>60GB Disk Space</li>
                                            <li>60 Email Accounts</li>
                                            <li>60GB Monthly Bandwidth</li>
                                            <li>15 Subdomains</li>
                                            <li className="disable">20 Domains</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-border btn-lg w-75 fw-bold mb-3">Sign
                                            up</a>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-0">
                                    <div className="card-pricing2 card-secondary">
                                        <div className="pricing-header">
                                            <h3 className="fw-bold">Premium</h3>
                                            <span className="sub-title">Lorem ipsum</span>
                                        </div>
                                        <div className="price-value">
                                            <div className="value">
                                                <span className="currency">$</span>
                                                <span className="amount">30.<span>99</span></span>
                                                <span className="month">/month</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-content">
                                            <li>70GB Disk Space</li>
                                            <li>70 Email Accounts</li>
                                            <li>70GB Monthly Bandwidth</li>
                                            <li>20 Subdomains</li>
                                            <li>25 Domains</li>
                                        </ul>
                                        <a href="#" className="btn btn-secondary btn-border btn-lg w-75 fw-bold mb-3">Sign
                                            up</a>
                                    </div>
                                </div>
                            </div>

                            <h4 className="page-title">Customized Card</h4>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-info card-annoucement card-round">
                                        <div className="card-body text-center">
                                            <div className="card-opening">Welcome Rian,</div>
                                            <div className="card-desc">
                                                Congrats and best wishes for success in your brand new life!
                                                I knew that you would do this!
                                            </div>
                                            <div className="card-detail">
                                                <div className="btn btn-light btn-rounded">View Detail</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-round">
                                        <div className="card-body">
                                            <div className="card-title fw-mediumbold">Suggested People</div>
                                            <div className="card-list">
                                                <div className="item-list">
                                                    <div className="avatar">
                                                        <img src="../assets/img/jm_denis.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>
                                                    <div className="info-user ml-3">
                                                        <div className="username">Jimmy Denis</div>
                                                        <div className="status">Graphic Designer</div>
                                                    </div>
                                                    <button className="btn btn-icon btn-primary btn-round btn-xs">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div className="item-list">
                                                    <div className="avatar">
                                                        <img src="../assets/img/jm_denis.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>
                                                    <div className="info-user ml-3">
                                                        <div className="username">Chad</div>
                                                        <div className="status">CEO Zeleaf</div>
                                                    </div>
                                                    <button className="btn btn-icon btn-primary btn-round btn-xs">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div className="item-list">
                                                    <div className="avatar">
                                                        <img src="../assets/img/jm_denis.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>
                                                    <div className="info-user ml-3">
                                                        <div className="username">Talha</div>
                                                        <div className="status">Front End Designer</div>
                                                    </div>
                                                    <button className="btn btn-icon btn-primary btn-round btn-xs">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-post card-round">
                                        <img className="card-img-top" src="../assets/img/blogpost.jpg"
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="avatar">
                                                    <img src="../assets/img/jm_denis.jpg" alt="..."
                                                         className="avatar-img rounded-circle"/>
                                                </div>
                                                <div className="info-post ml-2">
                                                    <p className="username">Joko Subianto</p>
                                                    <p className="date text-muted">20 Jan 18</p>
                                                </div>
                                            </div>
                                            <div className="separator-solid"></div>
                                            <p className="card-category text-info mb-1"><a href="#">Design</a></p>
                                            <h3 className="card-title">
                                                <a href="#">
                                                    Best Design Resources This Week
                                                </a>
                                            </h3>
                                            <p className="card-text">Some quick example text to build on the card title
                                                and make
                                                up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary btn-rounded btn-sm">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-profile">
                                        <div className="card-header">
                                            <div className="profile-picture">
                                                <div className="avatar avatar-xl">
                                                    <img src="../assets/img/jm_denis.jpg" alt="..."
                                                         className="avatar-img rounded-circle"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user-profile text-center">
                                                <div className="name">Hizrian, 19</div>
                                                <div className="job">Frontend Developer</div>
                                                <div className="desc">A man who hates loneliness</div>
                                                <div className="social-media">
                                                    <a className="btn btn-info btn-twitter btn-sm btn-link" href="#">
                                                        <span className="btn-label just-icon"><i
                                                            className="flaticon-twitter"></i> </span>
                                                    </a>
                                                    <a className="btn btn-danger btn-sm btn-link" rel="publisher"
                                                       href="#">
                                            <span className="btn-label just-icon"><i
                                                className="flaticon-google-plus"></i> </span>
                                                    </a>
                                                    <a className="btn btn-primary btn-sm btn-link" rel="publisher"
                                                       href="#">
                                                        <span className="btn-label just-icon"><i
                                                            className="flaticon-facebook"></i> </span>
                                                    </a>
                                                    <a className="btn btn-danger btn-sm btn-link" rel="publisher"
                                                       href="#">
                                                        <span className="btn-label just-icon"><i
                                                            className="flaticon-dribbble"></i> </span>
                                                    </a>
                                                </div>
                                                <div className="view-profile">
                                                    <a href="#" className="btn btn-secondary btn-block">View Full
                                                        Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row user-stats text-center">
                                                <div className="col">
                                                    <div className="number">125</div>
                                                    <div className="title">Post</div>
                                                </div>
                                                <div className="col">
                                                    <div className="number">25K</div>
                                                    <div className="title">Followers</div>
                                                </div>
                                                <div className="col">
                                                    <div className="number">134</div>
                                                    <div className="title">Following</div>
                                                </div>
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
    debugger
    return {
        loginData: state,
    }
}
export default connect(mapStateToProps, {isLogin})(Dashboard)
