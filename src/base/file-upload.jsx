import React from 'react';
const FileUpload = require('react-fileupload');
export default class FileUpload extends React.Component {
  render(){
    const options={
      baseUrl:'/manage/product/upload.do',
      fileFieldName: 'upload_file',
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
        <button ref="chooseBtn">choose</button>
        <button ref="uploadBtn">upload</button>
      </FileUpload>
    )         
  }
}