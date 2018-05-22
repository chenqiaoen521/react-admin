import React from 'react';
import './theme.css';
import TopNav from '@cpts/header/index';
import SideNav from '@cpts/side/index';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from '@cpts/home/index';

class Layout extends React.Component{
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Layout;