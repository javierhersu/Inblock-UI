import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import EYimg from '../images/ey.png';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (

      <div className="row">
        <div className="logoContainer">
          <img src={EYimg} className="logo" alt="Logo EY Blanco"/>
        </div>
        <div className="title">
          <span className="blk-tit">Blockchain.ey.com</span>
        </div>
      </div>

      /* <div className="NavBar">
        <div className="link-container">
          <Link to="/page1" className="link">Página 1</Link>
        </div>
        <div className="link-container">
          <Link to="/page2" className="link">Página 2</Link>
        </div>
      </div> */
    );
  }

}

export default NavBar;