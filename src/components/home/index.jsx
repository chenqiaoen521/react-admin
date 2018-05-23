import React from 'react';
import pageTitle from '@base/pageTitle';

class Home extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <page-title title="首页">
            <button className="btn-warning">dasd</button>
          </page-title>
        </div>
      </div>
    );
  }
}

export default Home;