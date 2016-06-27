import React from 'react'


class NavBar extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-warning">
        <ul className="nav navbar-nav container-fluid">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          <li className="nav-item active">
            <a className="nav-link" href="/#home">HOME <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#menu">MENU</a>
          </li>
          <li class="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">GALLERIES <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="/#galleries/cakes">CAKES</a></li>
                      <li><a href="/#galleries/cupcakes">CUPCAKES</a></li>
                    </ul>
                  </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">ABOUT</a>
          </li>
        </ul>
      </nav>
      )
  }
}

export default NavBar