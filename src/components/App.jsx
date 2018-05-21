import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import React from 'react';
import Layout from '@cpts/layout/index';
import Home from '@cpts/home/index';
class App extends React.Component {
	render() {
    return (
      <BrowserRouter>
      	<Switch>
      		<Route exact path="/" component={Layout} />
      	</Switch>
      </BrowserRouter>
    );
  }
}
export default App