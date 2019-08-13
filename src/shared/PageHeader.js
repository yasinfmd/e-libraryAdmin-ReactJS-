import React from "react";

const PageHeader = props=>(
    <div className="page-header">
          <ul className="breadcrumbs">
        <li className="nav-home">
            <a href="#">
                <i className="flaticon-home"></i>
            </a>
        </li>
        <li className="separator">
            <i className="flaticon-right-arrow"></i>
        </li>
        <li className="nav-item">
            <a href="#">{props.pageTitle}</a>
        </li>
    </ul>
    </div>

)
export  default  PageHeader
