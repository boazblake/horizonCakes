import React from 'react'
import ReactDOM from 'react-dom'
import filepickerWrapper from './filePicker'
import FileStackUpload from './_fileUpload'
import Secrets from '../../secrets'
import Moment from 'moment'
import Description from './description'



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

  _handleAddDescription(evt) {
    let descriptionforImage = evt.target.value
    console.log('descriptionforImage', descriptionforImage)
    this.setState({
      descriptionforImage
    })
  }


  _createRecord(){
    let productData =  this.state.uploadedBlob
    productData.description = this.state.descriptionforImage
 
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
        cb(productData, Blob)
        
/////chnage state of _fileuplaod to display ""succesfully uplaoded


      },
      function(err){
        console.log('err', err.toString())
      }
    );
  }

  _saveToReThinkDB(productData, Blob){
    var now = Date.now();
    let productDataforDB = {};
    productDataforDB.imgLink = Blob.url;
    productDataforDB.size = Blob.size/1000;
    productDataforDB.name = Blob.filename;
    productDataforDB.uploadDate = now;
    productDataforDB.description = productData.description;
    console.log('productData for rethinkDB', productData);
    console.log('productDataforDB', productDataforDB);
    console.log('Blob', Blob);
    jensCakes.store(productDataforDB);
  }

  render(){
    return (
      <div>
        <h1>Upload Your stuff here!</h1>
        <Description addDescription={this._handleAddDescription.bind(this)}/>
        <FileStackUpload onSubmit={this._createRecord.bind(this)} onUpload={this._handleImgUpload.bind(this)}/>
        <div id='previewImg'></div>
      </div>
    )
  }
}


export default Admin