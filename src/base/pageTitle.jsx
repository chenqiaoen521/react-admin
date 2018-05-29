import React from 'react';
export default class PageTitle extends React.Component {
  componentWillMount() {
    document.title = this.props.title + '-  HJ';
  }
  render() {
    return (
      <div className="row">
  	    <div className="col-md-12">
          {this.props.prepend ? this.props.children : ''}
  	      <h1 className="page-header">{this.props.title}</h1>
  	      {!this.props.prepend ? this.props.children : ''}
  	    </div>
  	  </div>
    );
  }
}