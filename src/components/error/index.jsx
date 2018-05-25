import React from 'react';
import PageTitle from '@base/pageTitle';
import {Link} from 'react-router-dom';
class ErrorPage extends React.Component{
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title="出错了"></PageTitle>
            <div className="row">
              <div className="col-md-12">
                <Link to="/">点我返回首页</Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;