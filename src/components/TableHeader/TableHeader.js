import React, {Component} from 'react'
import propsType from 'prop-types'
class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this)
    }

    renderTitle(x, i) {
        return (
                <th>{x.title}</th>
        )
    }

    render() {
        return (
            <thead>
            <tr>

            {
                this.props.titleData.map((x, i) =>
                    this.renderTitle(x, i)
                )
            }
            </tr>
            </thead>
    )
    }

}
TableHeader.propTypes = {
    titleData: propsType.array
};
export default TableHeader
