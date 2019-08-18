import  React,{Component,Fragment} from 'react'
import propsType from 'prop-types'
class ButonGroup extends Component{

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <Fragment>
                <div className={"btn-group"}>
                <button type="button" className="btn btn-primary" style={{margin:"10px",display:this.props.Visible}}>İncele</button>
                <button type="button" className="btn btn-success" style={{margin:"10px",display:this.props.saveVisible}}>Kaydet</button>
                <button type="button" data-toggle="tooltip" data-placement="top" title={this.props.deleteBtnToolTip}  className="btn btn-sm btn-danger" style={{margin:"10px",display:this.props.deleteVisible}} onClick={this.props.deleteClick}>
                    <i className={this.props.deleteBtnIcon}></i>

                </button>
                <button data-toggle="tooltip"
                        onClick={this.props.editBtnClck}
                        data-placement="top" title={this.props.editBtnToolTip} className="btn btn-warning btn-sm" style={{margin:"10px",display:this.props.editVisible}}>
                    <i className={this.props.editBtnIcon}></i>
                    </button>
                <button data-toggle="tooltip" data-placement="top" title={this.props.infoBtnToolTip}
                        onClick={this.props.infoBtnClck}
                        type="button" className="btn btn-sm btn-info" style={{margin:"10px",display:this.props.detailVisible}}>
                    <i className={this.props.infoBtnIcon}></i>
                    </button>
                </div>
            </Fragment>
        )
    }

}
ButonGroup.propTypes = {
    detailVisible:propsType.string,
    Visible:propsType.string,
    editVisible:propsType.string,
    saveVisible:propsType.string,
    deleteClick: propsType.func,
    deleteVisible:propsType.string,
    infoBtnToolTip:propsType.string,
    infoBtnIcon:propsType.string,
    deleteBtnIcon:propsType.string,
    deleteBtnToolTip:propsType.string,
    infoBtnClck:propsType.func,
    editBtnClck:propsType.func,
    editBtnToolTip:propsType.string,
    editBtnIcon:propsType.string


};
export  default  ButonGroup
