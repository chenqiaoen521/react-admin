import React from 'react';
class TopNav extends React.Component{
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
                  <span>欢迎，admin回来！</span>
                <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                </li>
                <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                </li>
                <li className="divider"></li>
                <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                </li>
              </ul>
            </li>
          </ul>
      </nav>
    );
  }
}

export default TopNav;