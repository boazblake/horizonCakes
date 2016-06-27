import React from 'react'
import SocialMedia from './socialMedia'

class Footer extends React.Component {
  render(){

    const boaz = {
      name:'<Boaz/>',
      href:'https://boazblake.github.io/portfolio'
    }


    return (
      <div>
      <p>Built with <span className="glyphicon glyphicon-heart"></span> 
      by<a href={boaz.href}> {boaz.name} </a>
      </p>
      </div>
    )
  }
}

class Footer2 extends React.Component {
  render(){

    return (
      <div>
        <SocialMedia />
      </div>
    )
  }
}



export default Footer