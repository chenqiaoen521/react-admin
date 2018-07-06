import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Container from '@cpts/layout/container';
import Layout from '@cpts/layout/index';
import Home from '@cpts/home/index';
import UserList from '@cpts/userList/index';
import Login from '@cpts/login/index';
import ErrorPage from '@cpts/error/index';
import ProductRouter from '@cpts/product/route';
import storage from 'good-storage';
import {routes} from '@router/index';
import { renderRoutes } from 'react-router-config'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout {...this.props}>
    	    {renderRoutes(routes)}
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App