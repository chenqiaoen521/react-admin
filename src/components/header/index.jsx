import React from 'react';
import storage from 'good-storage';
import {logout} from '@api/user';
import {errorTips} from '@common/util';
class TopNav extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar navbar-default top-navbar" role="navigation">
          <div className="navbar-header">
              <a className="navbar-brand" href="index.html"><b>In</b>sight</a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle" href="javascript:;" >
                <i className="fa fa-user fa-fw"></i>
                  <span>欢迎，{storage.get('userInfo') && storage.get('userInfo').username}回来！</span>
                <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li><a href=""><i className="fa fa-user fa-fw"></i> User Profile</a>
                </li>
                <li><a href=""><i className="fa fa-gear fa-fw"></i> Settings</a>
                </li>
                <li className="divider"></li>
                <li>
                <a href="javascript:;" onClick={() => this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw"></i>退出登录
                </a>
                </li>
              </ul>
            </li>
          </ul>
      </nav>
    );
  }
  // 退出登录
  onLogout() {
    logout().then(res => {
      storage.remove('userInfo');
      this.props.history.push('/login');
    }, errMsg => {
      errorTips(errMsg)
    })
  }
}

export default TopNav;