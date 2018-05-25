import React from 'react';
import PageTitle from '@base/pageTitle';
import Pagination from 'rc-pagination';
import {get} from '@api/base';
import 'rc-pagination/assets/index.css';
import {errorTips} from '@common/util';
const PAGE_SIZE = 15;

export default class UserList extends React.Component{
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title="用户列表"></PageTitle>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover dataTable no-footer">
                <thead>
                  <tr>
                    <th>
                      ID
                    </th>
                    <th>
                      用戶名
                    </th>
                    <th>
                      密碼
                    </th>
                    <th>
                      電子郵件
                    </th>
                    <th>
                      聯繫電話
                    </th>
                    <th>
                      創建時間
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderBody()}
                </tbody>
              </table>
            </div>
            <Pagination 
              current={this.state.current}
              total={this.state.total}
              pageSize={this.state.pageSize}
              onChange= {(current, pageSize) => {this.onChange(current, pageSize)}}
            />
          </div>
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
      list: [],
      firstLoading: true
    }
  }
  renderBody() {
    let listError = (
      <tr>
        <td style={{textAlign:'center'}} colSpan="5">
          {this.state.firstLoading ?  "正在加載中。。。。" : "沒有找到相應的結果"}
        </td>
      </tr>
    );
    if (this.state.list.length > 0) {
      return this.state.list.map((item, i) => {
      const trClass = i % 2 === 0 ? 'gradeA odd' : 'gradeA even';
      return (<tr key={i + trClass} className={trClass}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{new Date(item.createTime).toLocaleString()}</td>
      </tr>)
      });
    } else { 
      return listError;
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
    const url = '/manage/user/list.do';
    get(url, {params}).then(res => {
      if (res.data.status === 0) {
        this.setState({
          total: res.data.data.pages,
          pageSize: res.data.data.pageSize,
          current: res.data.data.pageNum,
          list: res.data.data.list
        }, ()=> {
          this.setState({
            firstLoading: false
          })
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
