import React, {Component, Fragment, Suspense} from 'react';
import {Router,Route} from 'react-router-dom'
import history from './history/history'
import Dashboard from "./pages/Dashboard/Dashboard";
import SoldBooks from './pages/SoldBooks/SoldBooks'
import Login from './pages/Login/Login'

class App extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
        <Fragment>
            <Router history={history}>
                  <div className="wrapper">
                    <Route path="/" exact  component={Login}></Route>
                    <Route path="/Anasayfa" exact  component={Dashboard}></Route>
                      <Route path="/SatilanKitaplar" exact  component={SoldBooks}></Route>
                </div>
            </Router>
        </Fragment>
            /*
            *
            *
            * */
        /*    <BrowserRouter>

                {
                    this.state.islogin ? (<div className="wrapper">
                        <Header/>
                        <Sidebar/>
                        <div className="main-panel">
                            <div className="content">
                                <MainPanel/>
                                <Route path="/Dashboard" exact  component={Dashboard}></Route>
                            </div>
                            <Footer/>

                        </div>
                    </div>) : <Login/>
                }
            </BrowserRouter>*/
        )

    }


}

export  default  App
