import React, { component } from 'react';
import Product from '../products/product';

export default class Products extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    let productJSX = this.props.products.map((product, i) => {
      return <Product product={product} key={i} />
    });
    return (
      <div className="container-fluid">
        {productJSX}
      </div>
    );
  }
}
