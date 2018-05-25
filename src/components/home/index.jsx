import React from 'react';
import PageTitle from '@base/pageTitle';
import {get} from '@api/base';
import {errorTips} from '@common/util';
import {BrowserRouter, Switch, Route, Link, Redirect, NavLink} from 'react-router-dom';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCount: '-',
      productCount: '-',
      userCount: '-'
    }
  }
  componentWillMount() {
    this._getData()
  }
  _getData () {
    const url = '/manage/statistic/base_count.do'
    get(url).then(res => {
      if (res.data.status === 0) {
        this.setState(res.data.data)
      }else {
        errorTips(res.data.msg)
      }
    })
  }
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
          <PageTitle title="首页">
          </PageTitle>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-green green">
                <div className="panel-left pull-left green">
                  <i className="fa fa-bar-chart-o fa-5x"></i>
                </div>
                <div className="panel-right pull-right">
                  <h3>{this.state.orderCount}</h3>
                   <Link to="/order"><strong>订单数</strong></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-blue blue">
                <div className="panel-left pull-left blue">
                  <i className="fa fa-shopping-cart fa-5x"></i>
                </div>  
                <div className="panel-right pull-right">
                  <h3>{this.state.productCount}</h3>
                  <Link to="/product"><strong>产品数量</strong></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="panel panel-primary text-center no-boder bg-color-red red">
                <div className="panel-left pull-left red">
                  <i className="fa fa fa-comments fa-5x"></i>
                </div>
                <div className="panel-right pull-right">
                  <h3>{this.state.userCount}</h3>
                  <Link to="/user"><strong>用户数量</strong></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;