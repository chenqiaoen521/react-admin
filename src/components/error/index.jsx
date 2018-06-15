import React from 'react';
import PageTitle from '@base/pageTitle';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '@store/index';
//import {observer, inject} from 'mobx-react';
//@inject('appState') @observer
class ErrorPage extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    
    setInterval(() => {
      this.count = this.props.count;
      this.count ++ ;
      this.props.login(this.count);
    }, 1500)
  }
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title="出错了"></PageTitle>
            <div className="row">
              <div className="col-md-12">
                ===  {this.props.count} === 
                <Link to="/">点我返回首页</Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  count: state.entries.count
})
const mapDispatchToProps = {
  login
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);