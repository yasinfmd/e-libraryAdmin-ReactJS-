import React from "react";

const PageHeader = props=>(
    <div className="page-header">
        <h4 className="page-title">{props.pageTitle}</h4>
      /  <ul className="breadcrumbs">
        <li className="nav-home">
            <a href="#">
                <i className="flaticon-home"></i>
            </a>
        </li>
        <li className="separator">
            <i className="flaticon-right-arrow"></i>
        </li>
        <li className="nav-item">
            <a href="#">Satılan Kitaplar</a>
        </li>
        <li className="separator">
            <i className="flaticon-right-arrow"></i>
        </li>
        <li className="nav-item">
            <a href="#">Basic Tables</a>
        </li>
    </ul>
    </div>

)
export  default  PageHeader
