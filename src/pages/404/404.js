import  React,{Component} from  'react'

class NotFound extends Component{
    constructor(props) {
        super(props);

    }
componentDidMount() {
        console.log(this.props)
}

    render() {
        return (
            <div className="container">
                <div className="row" style={{paddingTop: "10%"}}>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title text-center">HOOOPSSSS ! </h4>
                            </div>
                            <div className="card-body">
                                ARADIGINIZ YOK

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}
export  default  NotFound
