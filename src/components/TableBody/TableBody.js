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
                 this.props.tableRow.map((x)=>
                    <tr>
                        {
                            this.props.tableColumn.map((j)=>
                            <td>{x[j.title]}</td>
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
