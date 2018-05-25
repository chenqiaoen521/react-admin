
import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Layout from '@cpts/layout/index';
import Home from '@cpts/home/index';
import UserList from '@cpts/userList/index';
import Login from '@cpts/login/index';
import ErrorPage from '@cpts/error/index';

class Container extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={props => (
          <Layout>
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect exact from="/" to="/home" />
              <Route component={UserList} />
              <Route component={ErrorPage}/>
            </Switch>
          </Layout>
        )} />
      </Switch>
    )
  }
}

export default Container;
