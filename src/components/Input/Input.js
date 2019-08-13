import React,{Component} from 'react'
import propsType from 'prop-types'
import ButonGroup from "../ButonGroup/ButonGroup";
class Input extends  Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <input type={this.props.type} className={this.props.class} value={this.props.value} placeholder={this.props.placeholder}
                       onChange={this.props.onChange} onInput={this.props.onInput} />
            </div>
        );
    }

}

Input.propTypes = {
    type:propsType.string,
    class:propsType.string,
    value:propsType.string,
    placeholder:propsType.string,
    onChange:propsType.func,
    onInput:propsType.func

};

export default  Input
