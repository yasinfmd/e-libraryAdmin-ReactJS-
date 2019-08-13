import React, {Component,Fragment} from 'react'
import propsType from "prop-types";
import ButonGroup from "../ButonGroup/ButonGroup";

class IstatisticCard extends Component {
    constructor(props) {
        super(props);
        this.renderIstatisticCard = this.renderIstatisticCard.bind(this)
    }

    renderIstatisticCard(item, index) {
        return (
            <div className="col-sm-6 col-md-3" key={index}>
                <div className="card card-stats card-round">
            <div className="card-body ">
                <div className="row align-items-center">
                    <div className="col-icon">
                        <div className={item.icon}>
                            <i className={item.subicon}></i>
                        </div>
                    </div>
                    <div className="col col-stats ml-3 ml-sm-0">
                        <div className="numbers">
                            <p className="card-category">{item.title}</p>
                            <h4 className="card-title">{item.info}</h4>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>

                    {
                        this.props.IstatisticCardData.map((x, i) =>
                            this.renderIstatisticCard(x, i)
                        )
                    }
            </Fragment>

        )
    }
}
IstatisticCard.propTypes = {
    IstatisticCardData:propsType.array
};

export default IstatisticCard


