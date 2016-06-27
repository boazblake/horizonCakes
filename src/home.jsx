import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'


class Home extends React.Component {

  render(){
    let divStyleLogo = {
      width:300 + 'px',
      display: 'block'
    }

    let divStyleImg = {
      width:300 + 'px',
      float:'right',
      display: 'block'

    }


    let divStyleTitle = {
      textAlign:'center',
      color:'pink',
      display: 'block',
      fontFamily: 'Frijole',
      fontSize: '50px'
    }




    return (
      <div>
        <img style={divStyleLogo} src='./assets/images/logo_pic.png'/>
        <h1 style={divStyleTitle}>The Flour Girl Cake Company</h1>
        <img style={divStyleImg} src='./assets/images/french-girl-in-cafe.jpg'/>
      </div>
    )
  }
}


export default Home