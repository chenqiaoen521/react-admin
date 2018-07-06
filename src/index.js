import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@cpts/App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Container from '@cpts/layout/container';
//import appState from '@store/app';
//import {Provider} from 'mobx-react';
import {Provider} from 'react-redux';
import store from '@store/index';
import axios from 'axios';

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = 'zhangsan';
    return config;
  },
  err => {
    return Promise.reject(err);
  });
axios.interceptors.response.use(
    response => {
      console.log('response='+response)
      return response;
    },
    error => {
      console.log(error);
    return Promise.reject(error) 
});
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Container} />
            </Switch>
          </BrowserRouter>
        </Component>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// 模块热替换的 API
if (module.hot) {
  module.hot.accept(App, () => {
    render(App)
  });
} else {
  render(App)
}

registerServiceWorker();
