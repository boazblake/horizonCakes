import React from 'react'
import NavBar from './navBar'

class Header extends React.Component {

  render(){
      let divStyle = {
    display:'inline-block',
    width:'80%',
  }

    return (
    <NavBar />
    )
  }
}


export default Header