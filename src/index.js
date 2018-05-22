import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@cpts/App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Container from '@cpts/layout/container';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Container} />
          </Switch>
        </BrowserRouter>
      </Component>
    </AppContainer>,
    document.getElementById('root')
  );
};
render(App)
// 模块热替换的 API
if (module.hot) {
  module.hot.accept(App, () => {
    render(App)
  });
}

registerServiceWorker();
