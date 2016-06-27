import React, { Component } from 'react';

export default class SelectedProduct extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    
    this.state = {
      productSelected: this.props.productSelected
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      productSelected: nextProps.productSelected
    })
  }

  render(){   
    return(
      <button className="btn btn-success"
              onClick={this.props.selectProduct}>
                <span className="glyphicon glyphicon-check"></span>
              </button>
    )
  }
}
