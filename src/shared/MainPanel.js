import  React,{Component} from 'react'
import  {NavLink} from "react-router-dom";
class MainPanel extends  Component{


    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="panel-header bg-primary-gradient">
                <div className="page-inner py-5">
                    <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                        <div>
                            <h2 className="text-white pb-2 fw-bold">Anasayfa</h2>
                            <h5 className="text-white op-7 mb-2">Hoşgeldiniz Yasin Dalkılıç</h5>
                        </div>
                        <div className="ml-md-auto py-2 py-md-0">
                            <NavLink to="/SatilanKitaplar" className="btn btn-white btn-border btn-round mr-2 ">

                            Satılan Kitaplar
                            </NavLink>
                            <NavLink to="/KitapListesi" className="btn btn-secondary btn-round ">
                             Kitap Listesi
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export  default  MainPanel
