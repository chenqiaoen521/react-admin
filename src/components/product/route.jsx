import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProductList from '@cpts/product/list/index';

class ProductRouter extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Redirect exact from="/product" to="/product/index" />
      </Switch>
    );
  }
}

export default ProductRouter;