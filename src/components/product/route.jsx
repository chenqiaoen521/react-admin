import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProductList from '@cpts/product/list/index';
import UpdateGoods from '@cpts/product/update/index';

class ProductRouter extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Route path="/product/update" component={UpdateGoods} />
        <Redirect exact from="/product" to="/product/index" />
      </Switch>
    );
  }
}

export default ProductRouter;