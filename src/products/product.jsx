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
    let bkgColor = (productStatus) ? '#3498db' : '#bdc3c7';

    this.state = {
      productStatus: productStatus,
      bkgColor: bkgColor
    }      

    this.handleOnSelect = this.handleOnSelect.bind(this);
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

  render() { 
    let imgSrc = `https://www.filestackapi.com/api/file/`+this.props.product.imgLink.split('/')[5]
    let bkgColor = (this.props.product.productSelected) ? '#3498db' : '#bdc3c7';

    let divStyle =  {
      backgroundColor: bkgColor
    }

    console.log(this.props)

    return (
      <div style={divStyle} className="row">
        <div className="imgBox">
         <img id="productImage" src={imgSrc}/>
        </div>
        <div className="col-xs-2 center">
         description: {this.props.product.description}
        </div>
        <div className="col-xs-5 center">
          ID: {this.props.product.id}
        </div>
        <div className="col-xs-3 center">
          uploadDate: { Moment(this.props.product.uploadDate)
            .format('MMM Do YYYY, h:mm:ss a')}
        </div>
        <div className="col-xs-2 center">
          <RemoveProduct id={this.props.product.id}/>
          <SelectedProduct selectProduct={this.handleOnSelect} productSelected={this.state.productStatus}/>
        </div>
      </div>
    );
  }
}