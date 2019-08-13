import  React,{Component} from  'react'
class Error extends  Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">OOOOPS!</div>
                            </div>
                            <div className="card-body">
                                <div className="card-sub">
                                    Beklenmeyen Bir Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyin
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
export  default Error
