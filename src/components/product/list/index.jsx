import React from 'react';
import PageTitle from '@base/pageTitle';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';
import {get} from '@api/base';
import 'rc-pagination/assets/index.css';
import {errorTips, successTips} from '@common/util';
import TableList from '@base/tableList';
import Search from '@base/search';
import './index.css';
const PAGE_SIZE = 15;
class ProductList extends React.Component{

  render() {
    const tableT = [{name: '商品ID', wid: '10%'},{name: '商品信息', wid: '25%'},{name: '价格', wid: '10%'},{name: '状态', wid: '10%'},{name: '操作', wid: '15%'}];
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle prepend={true} title="商品管理">
            <div className="page-header-right">
              <Link to="/product/update" className="btn btn-primary">
                <i className="fa fa-plus"></i>
                <span>添加商品</span>
              </Link>
            </div>
          </PageTitle>
          <Search searchGoods={this.searchGoods}/>
          <TableList renderBody={this.renderBody} tableHeads={tableT}>
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
    this.searchGoods = this.searchGoods.bind(this);
  }

  onSetProductStatus (id, status) {
    let newStatus = status === 1 ? 2: 1;
    if(window.confirm('确定要执行操作吗？')) {
      status = newStatus;
      
      this._set_sale_status(id, newStatus).then(res => {
        console.log(res)
        if(res.data.status === 0) {
          successTips(res.data.data)
          this.state.list.forEach(item => {
            if (item.id === id) {
              item.status = newStatus
            }
          })
          this.setState({
            list: this.state.list
          })
        } else if (res.data.status === 1)
        errorTips(res.data.data)
      }, err => {
        errorTips(err)
      });
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
          <div>{item.status === 1 ? '在售' : '已下架'}</div>
          <button className="btn btn-xs btn-warning" onClick={ () => {this.onSetProductStatus(item.id, item.status)}}>{item.status !== 1 ? '在售' : '已下架'}</button>
        </td>
        <td>
          <Link className="opear" to={`/product/detail/${item.id}`}>查看详情</Link><br />
          <Link className="opear" to={`/product/update/${item.id}`}>编辑</Link>
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
    const url = '/manage/product/list.do';
    this.url = url;
    this._getData(params)
  }
  _getData(params) {
    get(this.url, {params}).then(res => {
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
  searchGoods(type, name) {
    const url = '/manage/product/search.do';
    this.url = url;
    const params = {
      pageNum: 1,
      pageSize: this.state.pageSize
    };
    if (type == 1) {
      Object.assign(params, {productId: name})
    } else if (type == 2) {
      Object.assign(params, {productName: name})
    } else {
      errorTips('类型错误！~')
    }
    this._getData(params)
  }
  async _set_sale_status(id, status) {
    const url = '/manage/product/set_sale_status.do';
    let params = {
      productId: id,
      status
    }
    return await get(url, {params});
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