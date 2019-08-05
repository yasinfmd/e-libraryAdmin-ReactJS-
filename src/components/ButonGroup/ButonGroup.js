import  React,{Component,Fragment} from 'react'

class ButonGroup extends Component{

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <Fragment>
                <div className={"btn-group"}>
                <button type="button" className="btn btn-primary" style={{margin:"10px"}}>İncele</button>
                <button type="button" className="btn btn-secondary" style={{margin:"10px"}}>Test Et </button>
                <button type="button" className="btn btn-success" style={{margin:"10px"}}>Kaydet</button>
                <button type="button" className="btn btn-danger" style={{margin:"10px"}}>Sil</button>
                <button type="button" className="btn btn-warning" style={{margin:"10px"}}>Güncelle</button>
                <button type="button" className="btn btn-info" style={{margin:"10px"}}>Detaya Git</button>
                </div>
            </Fragment>
        )
    }

}
export  default  ButonGroup
