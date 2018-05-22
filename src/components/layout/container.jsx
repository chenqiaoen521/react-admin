
import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Layout from '@cpts/layout/index';
import Home from '@cpts/home/index';
const Hot = () => (
  <div id="page-wrapper">HOT</div>
  );
class Container extends React.Component{
  render() {
    return (
      <Layout>
      	<Switch>
          <Route path="/home" component={Home} />
          <Route path="/hot" component={Hot} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Layout>
    )
  }
}

export default Container;
