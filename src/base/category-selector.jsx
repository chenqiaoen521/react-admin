import React from 'react';
import {get} from '@api/base';
import {errorTips} from '@common/util';
export default class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCategoryList : [],
      firstCategoryId : 0,
      secondCategoryList : [],
      secondCategoryId : 0
    }
    this._selectCategory = this._selectCategory.bind(this);
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  _loadFirstCategory(id, list) {
    this.setState({
      firstCategoryId: id,
      firstCategoryList: list
    })
  }
  renderCagegory(list) {
    return list.map((item, i) => {
      return (<option key={item.id} value={item.id}>{item.name}</option>)
    })
  }
  render() {
    return (
      <div className="form-group clearfix">
        <label className="control-label col-md-1 my-label">所属分类</label>
        <div className="col-md-3">
          <select name="" onChange={this._selectCategory} id="" className="form-control">
            <option value="">请选择一级分类</option>
            {this.renderCagegory(this.state.firstCategoryList)}
          </select>
        </div>
        {
          this.state.secondCategoryList.length > 0 ? (<div className="col-md-3">
            <select name="" id="" className="form-control">
              <option value="">请选择二级分类</option>
              {this.renderCagegory(this.state.secondCategoryList)}
            </select>
          </div>) : null
        }
      </div>
    );
  }
  _selectCategory(e) {
    const id = e.target.value
    if (id) {
      this.props.loadCategory(id, list => {
        this.setState({
          secondCategoryList : list,
          secondCategoryId : id   
        })
      })
    }
  }
}