import  React,{Component} from  'react'
import propsType from 'prop-types'

class Modal extends  Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            this.props.content?this.props.content.map((x)=>
                             <div className="row mt-5">
                                 <div className="col-3">Yazar Bilgileri</div>
                                 <div className="col-3">{x.authorsname} {x.authorslastname} </div>
                                 <div className="col-3">{x.authorsage} </div>
                                 <div className="col-3">{x.authorscountry} </div>
                             </div>

                            ):null
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Tamam</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

Modal.propTypes={
    content:propsType.array
}
export  default  Modal
