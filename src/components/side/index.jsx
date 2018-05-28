import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect, NavLink} from 'react-router-dom';
class SideNav extends React.Component{
  render() {
    return (
      <nav className="navbar-default navbar-side">
          <div className="sidebar-collapse">
              <ul className="nav" id="main-menu">
                  <li>
                    <NavLink activeClassName="active-menu" to="/home"><i className="fa fa-dashboard"></i>首页</NavLink>
                  </li>
                  <li className="active">
                    <a href="#"><i className="fa fa-sitemap"></i>商品<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse in">
                      <li>
                        <NavLink activeClassName="active-menu" to="/product">商品管理</NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="active-menu" to="/product-category">品类管理</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="active">
                    <a href="#"><i className="fa fa-desktop"></i>订单</a>
                    <ul className="nav nav-second-level collapse in">
                      <li>
                        <NavLink activeClassName="active-menu" to="/order">订单管理</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i>用户</a>
                    <ul className="nav nav-second-level collapse in">
                    <li>
                      <NavLink activeClassName="active-menu" to="/user">用户管理</NavLink>
                    </li>
                  </ul>
                  </li>
                  <li>
                      <a href="tab-panel.html"><i className="fa fa-qrcode"></i> Tabs &amp; Panels</a>
                  </li>
                  
                  <li>
                      <a href="table.html"><i className="fa fa-table"></i> Responsive Tables</a>
                  </li>
                  <li>
                      <a href="form.html"><i className="fa fa-edit"></i> Forms </a>
                  </li>
                  <li>
                      <a href="empty.html"><i className="fa fa-fw fa-file"></i> Empty Page</a>
                  </li>
              </ul>

          </div>
      </nav>
    );
  }
}

export default SideNav;