import React from 'react';
import ReactDOM from 'react-dom'

let FileStackUpload = React.createClass({
  propTypes:function(){
    return {
      formFieldName: React.PropTypes.string,
      onUpload: React.PropTypes.func,
      onRemove: React.PropTypes.func,
    }
  } ,

  getInitialState: function(){
    return {
      flashMsg: "No picture selected",
      // successMsg: "Image succesfully uploaded!",
      localFileUploaded: false
      // successUploaded: false
    }
  },

  _uploadBtnJSX: function(configOps){
    let styleObj = {position : 'relative'};
    typeof configOps.style === 'object' ? Object.assign(styleObj,configOps.style) : null
    
    return (
      <button
        style={styleObj}
        className={configOps.elClassNames}> 
              {configOps.msgPrompt}
            <input onChange={this._handleFileUpload} 
                    type='file'
                    id={this.props.formFieldId || 'fileInputField'} 
                    ref="filebtn" 
                    style={{
                        position: 'absolute', top: "0px", left: "0px", 
                        opacity: 0,
                        width: "100%", height: "100%",   
                    }}/>
      </button>
    )
  },

  _handleFileUpload: function(evt){
    let uploadedFileEl = ReactDOM.findDOMNode(this.refs.filebtn) 
    let file = uploadedFileEl.files[0]
    let fileReader = new FileReader()
    console.log('file>>>', file)
    if (file && file.type.match('image.*')){
      fileReader.readAsDataURL(file)
      fileReader.addEventListener('load', (Blob)=>{
        console.log('Blob>>>>>', Blob)
        this.setState({
          localFileUploaded: true,
          fileInfo_imgBlob: Blob,
          fileInfo_file: file
        })
        if (typeof this.props.onUpload === 'function') this.props.onUpload(Blob, uploadedFileEl) 
      })

    } else {
      this.setState({
        flashMsg: "Not valid file type"
      })
    }
  },

  _handleClear: function(){
    if (typeof this.props.onRemove === 'function') this.props.remove(Blob, uploadedFileEl) 

    this.setState({
      localFileUploaded: false,
      fileInfo_imgBlob: '',
      fileInfo_file: ''
    })
  },

  _showBtnsJSX: function(localFileIsUploaded){
    let configOps = {}

    configOps.style = {
        marginRight: '10px'
      }
  

    if (localFileIsUploaded) {
      configOps.elClassNames = "btn btn-info btn-md"
      configOps.msgPrompt = "SELECT A DIFFERENT PICTURE"

      return [
      <button style={configOps.style} className="btn btn-danger btn-md" onClick={this._handleClear}>REMOVE THIS PICTURE</button>,
      <button style={configOps.style} className="btn btn-success btn-md" onClick={this.props.onSubmit}>SUBMIT THIS PICTURE</button>,
      this._uploadBtnJSX(configOps)
      ]
    } else {
      configOps.elClassNames = "btn btn-info btn-md"
      configOps.msgPrompt = "UPLOAD A NEW PICTURE!"
      return (
        this._uploadBtnJSX(configOps)
      )  
    }
  },

  _showLoadedFile: function(localFileIsUploaded){
    if(localFileIsUploaded && this.state.fileInfo_imgBlob){
      return (
        <div id='previewImg' style={{margin: "12px 0 0 0"}}>
          <h6 className="bg-warning" style={{padding: "5px"}}>
            {this.state.fileInfo_file.name} 
            &nbsp;&nbsp;
            <span className="text-muted">({Math.round(this.state.fileInfo_file.size/1000)} KB)</span>
          </h6>
          <img
            style={{maxWidth: "400px", display: "block"}} 
            src={this.state.fileInfo_imgBlob.target.result}/>
        </div> 
      )
    } else {
      return(
        <div>
          <h6 className="text-muted">{this.state.flashMsg}</h6>
        </div>
      )
    }
  },

  render: function(){
    return (
      <div >
        {this._showBtnsJSX(this.state.localFileUploaded)}      
        {this._showLoadedFile(this.state.localFileUploaded)}
      </div>
    )
  }
});

    
export default FileStackUpload