
import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Layout from '@cpts/layout/index';
import Home from '@cpts/home/index';
import Login from '@cpts/login/index';

const Hot = () => (
  <div id="page-wrapper">HOT</div>
  );
class Container extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={props => (
          <Layout>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/hot" component={Hot} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        )} />
      </Switch>
    )
  }
}

export default Container;
