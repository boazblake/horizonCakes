import React, { Component } from 'react';

export default class SelectedProduct extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    this.state = {
      productStatus: (this.props.productStatus)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      productStatus: nextProps.productStatus
    })
  }

  render(){
    let fontColor = (this.props.productStatus) ? '#c0392b' : '#bdc3c7';
    console.log('fontColor', fontColor, 'product slected: ', (this.props.productStatus) )

    let divStyle =  {
      color: fontColor
    }


    return(
      <button className="btn btn-link heart right"
              onClick={this.props.selectProduct}>
        <i style={divStyle} className="fa fa-heart" aria-hidden="true"></i>
      </button>
    )
  }
}
