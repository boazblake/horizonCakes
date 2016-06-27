import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

const frostNfill = [
  'Chocolate Buttercream, ', 'Vanilla Buttercream, ', 'Almond Buttercream, ', 'Nutella Buttercream, ', 
  'Mocha Buttercream, ', 'Bavarian Cream, ', 'Strawberry puree Filling, ', 'Raspberry puree Filling, ', 
  'lemon curd Filling, ', 'Dark Chocolate Ganache, ', 'Milk Chocolate Ganache, ', 
  'Fruit Flavored Buttercream of your choice, ', 'Fresh fruit can also be added '
]

const cakeNcup = [
  'Chocolate, ', 'Vanilla Bean, ', 'White, ' , 'Red Velvet, ', 'Almond, ', 'Strawberry, ', 'Raspberry, ', 'Lemon' 
]



class Menu extends React.Component {
  render(){
    let divStyleImg = {
      width:300 + 'px ',
      display:'block'
    }

     let divStyleHeading = {
      color:'pink',
      fontFamily:'Frijole'
    }

     let divStyleLeft = {
      display:'inline-block',
      width: 40 + '%',
      margin: 30 + 'px',
      fontFamily:'Amatic SC',
      fontSize: 30 + 'px'

    }

     let divStyleRight = {
      display:'inline-block',
      width: 50 + '%',
      margin: 30 + 'px',
      fontFamily:'Amatic SC',
      fontSize: 30 + 'px'
    }

     let divStyleBottom = {
      bottom:'10px',
      display:'block',
      margin: 30 + 'px',
      fontFamily:'Abril Fatface' 
    }


    return (
      <div>
        <img style={divStyleImg} src='./assets/images/menuPic.jpg'/>
        <div className='left' style={divStyleLeft}>
          <h1 style={divStyleHeading}>FROSTINGS AND FILLINGS</h1>
          <p> {frostNfill}</p>
        </div>
        <div className='right' style={divStyleRight}>
          <h1 style={divStyleHeading}>CAKE AND CUPCAKE FLAVORS</h1>
          <p>{cakeNcup}</p>
        </div>
        <div className='bottom' style={divStyleBottom}>
          <h3 style={divStyleHeading}>All cakes are covered in Marshmallow Fondant and
          are enrobed in chocolate ganache before the fondant is applied</h3>
        </div>
      </div>
    )
  }
}


export default Menu