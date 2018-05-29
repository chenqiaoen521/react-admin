import React from 'react';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '1',
      searchKeyword: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    });
  }
  onSubmit() {
    this.props.searchGoods(this.state.searchType, this.state.searchKeyword)
  }
  render() {
    return (
      <div className="row search-wrap">
        <div className="col-md-12">
          <div action="" className="form-inline">
            <div className="form-group">
              <select className="form-control" name="searchType" onChange={this.onChange}>
                <option value="1">按商品ID查询</option>
                <option value="2">按商品名称查询</option>
              </select>
            </div>
            <div className="form-group">
              <input name="searchKeyword" onChange={this.onChange} type="text" placeholder="关键词" className="form-control"/>
            </div>
            <button onClick={this.onSubmit} className="btn btn-primary">搜索</button>
          </div>
        </div>
      </div>
    );
  }
}