import  React,{Component} from  'react'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu'
class Sidebar extends  Component{

    constructor(props) {
        super(props);

        //selector
        // id
        //title
        //icon  fas fa-table
        //submenu
        //
        //selectorid
        //to

        //name

        this.state={
            menuData:[
                {
                    selector:"#test",
                    selectorid:"test",
                    title:"Test -1 ",
                    icon:"fas fa-bars",
                    submenu:[
                        {
                            to:"/Deneme",
                            name:"Alt Menu"
                        },
                        {
                            to:"/Deneme2",
                            name:"Alt Menu2"
                        }
                    ]
                },
                {
                    selector:"#alt",
                    selectorid:"alt",
                    title:"Test -2 Alt Menusuz ",
                    icon:"fas fa-bars",
                    submenu:[],
                    to:"/ABC"
                },
            ]
        }
    }
    render(){
        return(
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">

                        <SidebarMenu menuData={this.state.menuData} />


                    </div>
                </div>
            </div>
        )
    }

}
export  default  Sidebar
