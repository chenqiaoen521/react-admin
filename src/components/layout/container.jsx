
import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Layout from '@cpts/layout/index';
import Home from '@cpts/home/index';
import UserList from '@cpts/userList/index';
import Login from '@cpts/login/index';
import ErrorPage from '@cpts/error/index';
import ProductRouter from '@cpts/product/route';
import storage from 'good-storage';
class Container extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={props => {
          if (storage.get('userInfo')) {
            return (
              <Layout {...props}>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/product" component={ProductRouter} />
                  <Redirect exact from="/" to="/home" />
                  <Route path="/user" component={UserList} />
                  <Route component={ErrorPage}/>
                </Switch>
              </Layout>
              )
          } else {
            return (<Redirect to="/login" />)
          }
          
        }} />
      </Switch>
    )
  }
}

export default Container;
