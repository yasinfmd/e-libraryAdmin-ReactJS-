import  React,{Component,Fragment} from  'react'

import IstatisticCard from  '../../components/IstatisticCard/IstatisticCard'
class IstatisticsCards extends Component{
    constructor(props) {
        super(props);
        //
        //
        //icon-big text-center icon-primary bubble-shadow-small
        //title

        //info
        this.state={
            IstatisticCardData:[{
                subicon:"flaticon-users",
                icon: "icon-big text-center icon-info bubble-shadow-small",
                title:"Satışlar",
                info:"500"
            },
                {
                    subicon:"flaticon-coins text-success",
                    icon: "icon-big text-center icon-primary bubble-shadow-small",
                    title:"Satışlar 2",
                    info:"5863"
                }
            ]
        }
    }
    render() {
        return(
            <Fragment>
            <h4 className="page-title">{this.props.title}</h4>
            <div className="row">
                <IstatisticCard  IstatisticCardData={this.state.IstatisticCardData} />
            </div>
            </Fragment>
        )
    }

}
export  default  IstatisticsCards
