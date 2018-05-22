import React from 'react';
import pageTitle from '@base/pageTitle';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props['title'] ='asdadsd')
  }
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <pageTitle>
            <button className="btn-warning">dasd</button>
          </pageTitle>
        </div>
      </div>
    );
  }
}

export default Home;