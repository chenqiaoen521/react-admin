import React from 'react';
import PageTitle from '@base/pageTitle';
import CategorySelector from '@base/category-selector';
import UploadFile from '@base/file-upload'
import {get} from '@api/base';
import {errorTips} from '@common/util';

export default class UpdateGoods extends React.Component {
  constructor(props) {
    super(props);
    this.loadCategory = this.loadCategory.bind(this);
  }
  onRef = (ref) => {
    this.categorySelector = ref
  }
  componentDidMount() {
    this._getCategory().then(res => {
      if (res.data.status == 0) {
        this.categorySelector._loadFirstCategory(0, res.data.data);
      } else {
        errorTips('品类出错了！~')
      }
    }).catch(err => {errorTips(err)})
  }
  loadCategory (id, callback) {
    this._getCategory(id).then(res => {
      if (res.data.status == 0) {
        callback && callback(res.data.data)
      } else {
        errorTips('品类出错了！~')
      }
    }).catch(err => {errorTips(err)})
  }
  _getCategory(id) {
    const url = '/manage/category/get_category.do';
    const params = {}
    if (id !== undefined && id !== null) {
      params['categoryId'] = id
    } else {
      params['categoryId'] = 0
    }
    return get(url, {params});
  }
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-inner">
  	      <PageTitle title="添加商品"></PageTitle>
          <div role="form">
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" htmlFor="name">商品名称</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="name" placeholder="请输入商品名称" />
              </div>
            </div>
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" htmlFor="desc">商品描述</label>
              <div className="col-md-6">
                <input type="text" className="form-control" id="desc" placeholder="请输入商品描述" />
              </div>
            </div>
            <CategorySelector 
              onRef={this.onRef}
              loadCategory={this.loadCategory}
            />
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" htmlFor="price">商品价格</label>
              <div className="col-md-2">
                <div className="input-group">
                  <input type="number" className="form-control" id="price" placeholder="请输入商品价格" />
                  <span className="input-group-addon">元</span>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" htmlFor="stock">商品库存</label>
              <div className="col-md-2">
                <div className="input-group">
                  <input type="number" className="form-control" id="stock" placeholder="请输入商品库存" />
                  <span className="input-group-addon">件</span>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label">商品图片</label>
              <div className="col-md-6">
                <UploadFile></UploadFile>
              </div>
            </div>
            <div className="form-group clearfix">
              <label className="control-label col-md-1 my-label" htmlFor="goodsDetails">商品详情</label>
              <div className="col-md-6">
                xxxxxxxx
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="col-md-2 col-md-offset-1">
                <button type="submit" className="btn btn-primary">提交</button>
              </div>
            </div>
          </div>
  	    </div>
  	  </div>
    );
  }
}