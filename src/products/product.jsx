import React, { Component } from 'react';
import Moment from 'moment';
import SelectedProduct from './selectedProduct';
import RemoveProduct from './removeProduct';

const Horizon = require('@horizon/client');
const horizon = Horizon({ authType: 'unauthenticated' });
const jensCakes = horizon('jensCakes');

export default class Product extends Component {
  constructor(props){
    super(props);
    let productStatus = (this.props.product.productSelected);

    this.state = {
      productStatus: productStatus,
      showDescription:false
    }      

    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleShowDescription = this.handleShowDescription.bind(this);
  }

  handleOnSelect() {
    let selected = {
        id:this.props.product.id,
        productSelected: false
      }

    let unSelected = {
      id:this.props.product.id,
      productSelected: true
    }

    let productSelectionStatus = (this.state.productStatus) ? selected : unSelected
    jensCakes.update(productSelectionStatus);
    this.setState({
      productStatus: (!this.state.productStatus)
    })
  }

  handleShowDescription(evt){
    evt.preventDefault();
    if (this.state.showDescription) {
      return this.setState({
        showDescription:false
      })
    } else {
      return this.setState({
        showDescription:true
      })
    }
  }


  render() { 
    let imgSrc = `https://www.filestackapi.com/api/file/`+this.props.product.imgLink.split('/')[5]
    let showHide = (this.state.showDescription) ? "col-xs-2 center show" : "col-xs-2 center hide";

    return (
      <div className="row">
        <div className="imgBox clearfix">
          <img id="productImage" src={imgSrc} />
          <a data-pin-do="bookmark" data-pin-shape="round" href="https://www.pinterest.com/pin/create/button/">
          </a>
          <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=124&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId" width="124" height="46" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
          <SelectedProduct selectProduct={this.handleOnSelect} productStatus={this.state.productStatus}/>
        </div>
        <div className="col-xs-2 center " onClick={this.handleShowDescription}>
          <p className="lead">{ Moment(this.props.product.uploadDate).format('MMM Do YYYY') }</p>
        </div>
        <div className={showHide} >
          description: 
          <p className="lead">{this.props.product.description}</p>
        </div>
        <div className="col-xs-2 left">
          <RemoveProduct selectionStatus={this.state.productStatus} id={this.props.product.id}/>
        </div>
      </div>
    );
  }
}