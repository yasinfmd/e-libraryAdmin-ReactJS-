import React, {Component} from 'react'
import propsType from 'prop-types'
class TableBody extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger
        return (
            <tbody>
                {
                 this.props.tableRow.map((x,i)=>
                    <tr key={i}>
                        {
                            this.props.tableColumn.map((j,z)=>
                            <td key={z}>{x[j.col]}</td>
                            )
                        }
                    </tr>
                 )
                }

            </tbody>
        )
    }

}
TableBody.propTypes = {
    tableRow: propsType.array,
    tableColumn:propsType.array
};
export default TableBody
