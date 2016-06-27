import React, { Component } from 'react';
import Products from './products/products';
import Home from './home';
import Menu from './menu';
import About from './about';


//Include our nwly installed horizon client
const Horizon = require('@horizon/client');
const horizon = Horizon();


//This init the 'jensCakes' collection inside of the ReThinkDb
const jensCakes = horizon('jensCakes');

class App extends React.Component {
//init our state with the built in constructor function
constructor(props){
  super(props);
  this.state ={
    products: []
  }
}

componentDidMount() {
  jensCakes.watch().subscribe(
    (jensCakes) => {
      console.log('watch subscribe')
      let allProductsbyDate = jensCakes.sort((a, b) => {
        return b.date - a.date;
      })
      this.setState({products: allProductsbyDate});
    },
    (err) => {console.log(err);}
  );
}

  //passing the message as a prop to the messages component for querying the db for jensCakes

  render(){
    return (
      <div>
        <Home />
        <Products products={this.state.products}/>
        <Menu />
        <About />
      </div>
    );
  }
}

export default App;