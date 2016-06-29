import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'


class Home extends React.Component {

  render(){

    return (
      <div id="splashPage" className="component">
        <img className="animated slideInRight" id="logo" src='./assets/images/logo_pic.png'/>
        <h1 className="animated zoomIn" id="title">The Flour Girl Cake Company</h1>
        <img className="animated slideInLeft" id="girl" src='./assets/images/french-girl-in-cafe.jpg'/>
      </div>
    )
  }
}


export default Home