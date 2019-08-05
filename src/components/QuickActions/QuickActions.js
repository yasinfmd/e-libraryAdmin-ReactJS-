import React, {Component} from 'react'

import QuickAction from '../../components/QuickAction/QuickAction'

class QuickActions extends Component {
    constructor(props) {
        super(props);
        //icon
        //title
        this.state = {
            quickActionsData: [{
                title: "Deneme",
                icon: "flaticon-file-1"
            },

                {
                    title: "Deneme",
                    icon: "flaticon-file-1"
                },
                {
                    title: "Deneme",
                    icon: "flaticon-file-1"
                },
                {
                    title: "Deneme",
                    icon: "flaticon-file-1"
                }, {
                    title: "Deneme",
                    icon: "flaticon-file-1"
                }


            ]
        }

    }

    render() {
        return (
            <li className="nav-item dropdown hidden-caret">
                <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                    <i className="fas fa-layer-group"></i>
                </a>
                <QuickAction quickActionsData={this.state.quickActionsData}/>
            </li>

        )
    }

}

export default QuickActions
