import React from 'react';
import PageTitle from '@base/pageTitle';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';
import {get} from '@api/base';
import 'rc-pagination/assets/index.css';
import {errorTips} from '@common/util';
import TableList from '@base/tableList';
const PAGE_SIZE = 15;
class ProductList extends React.Component{
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title="商品管理"></PageTitle>
          <TableList renderBody={this.renderBody} tableHeads={['商品ID','商品信息','价格','状态','操作']}>
          </TableList>
          <Pagination 
            current={this.state.current}
            total={this.state.total}
            pageSize={this.state.pageSize}
            onChange= {(current, pageSize) => {this.onChange(current, pageSize)}}
          />
        </div>
      </div>
    );
  }
  constructor(props) {
    super(props)
    this.state = {
      pageSize: PAGE_SIZE,
      total: 0,
      current: 1,
      list: []
    }
    this.renderBody = this.renderBody.bind(this);
  }
  onSetProductStatus (id, status) {
    let newStatus = status === 1 ? 2: 1;
    if(window.confirm('确定要执行操作吗？')) {
      status = newStatus;
      this.state.list.forEach(item => {
        if (item.id === id) {
          item.status = newStatus
        }
      })
      this.setState({
        list: this.state.list
      })
    }
  }
  renderBody() {
    if (this.state.list.length > 0) {
      return this.state.list.map((item, i) => {
      const trClass = i % 2 === 0 ? 'gradeA odd' : 'gradeA even';
      return (<tr key={i + trClass} className={trClass}>
        <td>{item.id}</td>
        <td>{item.subtitle}</td>
        <td>{item.price}</td>
        <td>
          <span>{item.status === 1 ? '在售' : '已下架'}</span>
          <button onClick={ () => {this.onSetProductStatus(item.id, item.status)}}>{item.status !== 1 ? '在售' : '已下架'}</button>
        </td>
        <td>
          <Link to={`/product/detail/${item.id}`}>查看详情</Link><br />
          <Link to={`/product/update/${item.id}`}>编辑</Link>
        </td>
      </tr>)
      });
    } else { 
      return [];
    }
  }
  componentWillMount() {
    const params = {
      pageSize: PAGE_SIZE,
      pageNum: 1
    }
    this._getData(params)
  }
  _getData(params) {
    const url = '/manage/product/list.do';
    get(url, {params}).then(res => {
      if (res.data.status === 0) {
        this.setState({
          total: res.data.data.pages,
          pageSize: res.data.data.pageSize,
          current: res.data.data.pageNum,
          list: res.data.data.list
        })
      } else if (res.data.status === 10) {
        this.props.history.push('/login');
      }else {
        errorTips(res.data.msg)
      }
    })
  }
  onShowSizeChange() {

  }
  onChange(current, pageSize) {
    const params = {
      pageSize: this.state.pageSize,
      pageNum: current
    }
    this._getData(params)
  }
}

export default ProductList;