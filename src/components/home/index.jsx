import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';

const Hot=()=>(<div>
	HHH11SSHAI
	</div>);
class Home extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <Route path="home" Component={Hot}/>
      </div>
    );
  }

}

export default Home;