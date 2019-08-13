import  React,{Component} from  'react'
import propsType from 'prop-types'

class Select extends  Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (

                <select value={this.props.selected} className={this.props.clases} onChange={this.props.selectChange}>
                    {
                        this.props.optionVal.map((x)=>
                            <option value={x.key} key={x.key}>{x.title}</option>
                        )
                    }
                </select>
        );
    }

}
Select.propTypes = {
    selected:propsType.any,
    selectChange:propsType.func,
    optionVal:propsType.array,
    clases:propsType.string
};
export  default Select
