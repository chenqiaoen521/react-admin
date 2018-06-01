import React from 'react';
import FileUpload from './file-uploader';
export default class UploadFile extends React.Component {
  render(){
    const options={
      baseUrl:'http://admintest.happymmall.com/manage/product/upload.do',
      fileFieldName: 'upload_file',
      chooseAndUpload: true,
      dataType: 'json',
      uploadSuccess: res => {
        console.log(res);
      },
      uploadError: err => {
        console.log(err);
      }
    }
    return (
      <FileUpload options={options}>
        <button className="btn btn-warning" ref="chooseAndUpload">请选择图片</button>
      </FileUpload>
    )
  }
}