import React from 'react';
import './theme.css';
import TopNav from '@cpts/header/index';
import SideNav from '@cpts/side/index';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

class Layout extends React.Component{
  render() {
    return (
      <div id="wrapper">
        <TopNav {...this.props}/>
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;