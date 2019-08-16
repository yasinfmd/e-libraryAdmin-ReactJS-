import  React,{Component} from  'react'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu'
import {Login} from "../router/Login";
import {Dashboard} from "../router/Dashboard";
import {BookList, EditBook, SoldBooks, SoldBooksDetail} from "../router/Books";
import {AuthorsList} from "../router/Authors";
class Sidebar extends  Component{

    constructor(props) {
        super(props);
        this.state={
            routes:[
                {
                    selector:"#dashboard",
                    selectorid:"dashboard",
                    title:"Anasayfa",
                    clases:"nav-item active",
                    icon:"fas fa-bars",
                    to:"/Anasayfa",
                    submenu:[]
                },
                {
                  clases:"nav-item active",
                    title:"Yazarlar",
                    icon:"fas fa-bars",
                    submenu:[],
                    to:"/Yazarlar"
                },
                {
                    clases:"nav-item active",
                    selector:"#books",
                    selectorid:"books",
                    title:"Kitaplar ",
                    icon:"fas fa-bars",
                    submenu:[
                        {
                            to:"/SatilanKitaplar",
                            name:"Satılan Kitaplar"
                        },
                        {
                            to:"/KitapListesi",
                            name:"Kitap Listesi"
                        }
                    ],

                },
            ],
        }
    }
    render(){
        return(
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">

                        <SidebarMenu menuData={this.state.routes} />


                    </div>
                </div>
            </div>
        )
    }

}
export  default  Sidebar
