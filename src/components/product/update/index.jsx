import React from 'react';
import PageTitle from '@base/pageTitle';

export default class UpdateGoods extends React.Component {

  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
  	      <PageTitle title="添加商品"></PageTitle>
          <div role="form">
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" for="name">商品名称</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="name" placeholder="请输入商品名称" />
              </div>
            </div>
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" for="name">商品名称</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="name" placeholder="请输入商品名称" />
              </div>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" />请打勾
              </label>
            </div>
            <button type="submit" className="btn btn-default">提交</button>
          </div>
  	    </div>
  	  </div>
    );
  }
}