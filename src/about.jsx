import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

class About extends React.Component {
  render(){

    let divStyleWrapper = {
      display: 'inline-block',
      width: 80 + '%'
    }


    let StyleBkgImg = {
      width:300 + 'px',
      position: 'absoute',
      right: 10 + 'px',
      display: 'block'
    }


    let divStyleWRapperTxt = {
      display: 'block',
      color: 'pink',
      textAlign: 'center',
      width:50 + '%'
    }

    return (
      <div className='aboutWrapper' style={divStyleWrapper}>
        <img style={StyleBkgImg} src='./assets/images/about_pic.jpg'/>
        <br/>
        <div className='txtWrapper' style={divStyleWRapperTxt}>
          <email ><h1><i className="fa fa-envelope" aria-hidden="true"></i></h1><h2>Jennifer@TheFlourGirlCakeCompany.Com</h2></email>
          <br/>
          <tel ><h1><span className="glyphicon glyphicon-phone"></span></h1><h2>832.434.6120</h2></tel>
          <br/>
        </div>
      </div>
    )
  }
}


export default About