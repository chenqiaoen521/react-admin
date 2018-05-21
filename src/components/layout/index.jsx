import React from 'react';
import './theme.css';
import TopNav from '@cpts/header/index';
import SideNav from '@cpts/side/index';
import Home from '@cpts/home/index';

class	Layout extends React.Component{
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        <Home />
      </div>
    );
  }
}

export default Layout;