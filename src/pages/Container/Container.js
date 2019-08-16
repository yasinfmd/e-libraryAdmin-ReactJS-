import  React,{Component,Fragment} from  'react'
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import MainPanel from "../../shared/MainPanel";
import Footer from "../../shared/Footer";

class Container extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Sidebar/>
                <div className="main-panel">
                    <div className="content">
                        <MainPanel/>
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}
export  default  Container
