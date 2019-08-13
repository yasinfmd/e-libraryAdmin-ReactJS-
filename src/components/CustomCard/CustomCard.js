import  React,{Component,Fragment} from  "react"
import propsType from 'prop-types'
class CustomCard extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="col-md-6">
                <div className="card card-post card-round">
                    <p className={"text-center mt-3"}>                Yazar Ve Kitap Bilgileri
                    </p>
                    <div className="separator-solid"></div>
                    <img className="card-img-top" src={this.props.titleImg}
                         alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-category text-info mb-1">Yazar Bilgileri</p>
                        {this.props.authorsInfo.map((x)=>
                            <div>
                            <div className="d-flex">
                                <div className="avatar">
                                    <img src={x.authorimg} alt="..."
                                         className="avatar-img rounded-circle"/>
                                </div>
                                <div className="info-post ml-2">
                                    <p className="username"> Adı Soyadı :  {x.authorsname}  {x.authorslastname}</p>
                                    <p className="date text-muted">Yaşı : {x.authorsage}</p>
                                    <p className="date text-muted">Ülkesi : {x.authorscountry}</p>
                                </div>


                            </div>
                            <div className="separator-solid"></div>
                            </div>
                            )}




                    </div>
                    <div className="card-body">
                        <p className="card-category text-info mb-1">Kitap Bilgileri</p>
                        <div className="d-flex">
                            <div className="avatar">
                                <img src={this.props.titleImg} alt="..."
                                     className="avatar-img rounded-circle"/>
                            </div>
                            <div className="info-post ml-2">
                                <p className="username"> Kitap Adı :  {this.props.bookname}  </p>
                                <p className="date text-muted">Sayfa Sayısı : {this.props.pagecount}</p>
                                <p className="date text-muted">Kitap Türü : {this.props.typename}</p>
                                <p className="date text-muted">Yayın Tarihi : {this.props.releasedate}</p>
                            </div>
                        </div>
                        <div className="separator-solid"></div>
                    </div>
                </div>


            </div>
        )
    }

}
CustomCard.propTypes = {
    /// titleImg
    //subImg
    //name -lastname
    //age
    //country

    /*
    *
    * */
    authorsInfo:propsType.array,
    titleImg:propsType.string,
    subImg:propsType.string,
    country:propsType.string,
    bookname:propsType.string,
    pagecount:propsType.string,
    typename:propsType.string,
    releasedate:propsType.string

};

export default  CustomCard
