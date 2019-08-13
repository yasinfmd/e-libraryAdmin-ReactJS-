import  React,{Component,Fragment} from  'react'
import IstatisticCard from  '../../components/IstatisticCard/IstatisticCard'
import propsType from "prop-types";
class IstatisticsCards extends Component{
    constructor(props) {
        super(props);
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
                <IstatisticCard  IstatisticCardData={this.props.cardData} />
            </div>
            </Fragment>
        )
    }

}
IstatisticsCards.propTypes = {
title:propsType.string,
 cardData:propsType.array
};
export  default  IstatisticsCards
