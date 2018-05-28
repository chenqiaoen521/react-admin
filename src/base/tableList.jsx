import React from 'react';

export default class TableList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      firstLoading: true
    }
  }
  componentWillReceiveProps() {
    this.setState({
      firstLoading: false
    })
  }

  render() {
    let tableHeader = this.props.tableHeads.map((item, i) =><th key={i}>{item}</th>);
    let listError =(
        <tr>
          <td style={{textAlign:'center'}} colSpan={this.props.tableHeads.length}>
            {this.state.firstLoading ?  "正在加載中。。。。" : "沒有找到相應的結果"}
          </td>
        </tr>
      )
    ;
    let listBody = this.props.renderBody().length > 0 ? this.props.renderBody() : listError;
    return (
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover dataTable no-footer">
            <thead>
              <tr>
                {tableHeader}
              </tr>
            </thead>
            <tbody>
              {listBody}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}