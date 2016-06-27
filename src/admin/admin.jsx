import React from 'react'
import ReactDOM from 'react-dom'
import filepickerWrapper from './filePicker'
import FileStackUpload from './_fileUpload'
import Secrets from '../../secrets'
const Horizon = require('@horizon/client');

const horizon = Horizon({ authType: 'unauthenticated' });

let jensCakes = horizon('jensCakes');

filepickerWrapper()

console.log('filepicker loaded onto window', filepicker)

class Admin extends React.Component {
  
  _handleImgUpload(blob, domEl) {
    console.log('blob', blob)
    console.log('domEl', domEl)
    this.setState({
      uploadedImgEl: domEl,
      uploadedBlob:blob
    })
  }

  _createRecord(){
    let productData =  this.state.uploadedBlob
 
    this._uploadToFileStack(
      this.state.uploadedImgEl, 
      productData, 
      this._saveToReThinkDB
    )
  }
 
  _uploadToFileStack(imgDataEl, productData, cb){
    console.log('apikeyFileStack',Secrets.apikeyFileStack)
    filepicker.setKey(Secrets.apikeyFileStack)

    filepicker.store(
      imgDataEl,
      function(Blob){
        console.log('sucessfully saved!!', Blob)
        console.log('imgDataEl!!', imgDataEl)
        cb(productData, Blob)
        
/////chnage state of _fileuplaod to display ""succesfully uplaoded


      },
      function(err){
        console.log('err', err.toString())
      }
    );
  }

  _saveToReThinkDB(productData, Blob){
    productData.imgLink = Blob.url;
    productData.size = Blob.size/1000;
    productData.name = Blob.filename;
    console.log('productData for rethinkDB', productData);
    console.log('Blob', Blob);
    jensCakes.store(Blob);
  }

  render(){
    return (
      <div>
        <h1>Upload Your stuff here!</h1>
        <FileStackUpload onSubmit={this._createRecord.bind(this)} onUpload={this._handleImgUpload.bind(this)}/>
        <div id='previewImg'></div>
        </div>
    )
  }
}


export default Admin