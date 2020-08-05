import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import EYimg from '../images/ey.png';
import SantanderLogo from './logos/santander.png';
import BBVALogo from './logos/bbva.png';
import CaixabankLogo from './logos/caixabank.png';
import SabadellLogo from './logos/sabadell.png';
import BankiaLogo from './logos/bankia.png';

import './NavBar.css';

class NavBar extends Component {

  user;
  c;
  constructor(){
    super();
    this.user = localStorage.getItem("user");
    console.log(this.user);
     if(this.user != null){
       if(this.user === 'BBVA'){
          this.c = <img src={BBVALogo} className="logoBBVA" alt="Logo User" />
       }else if(this.user === 'Santander'){
          this.c = <img src={SantanderLogo} className="logoSantander" alt="Logo User" />
       }else if(this.user === 'Sabadell'){
        this.c = <img src={SabadellLogo} className="logoSabadell" alt="Logo User" />
       }else if(this.user === 'Caixabank'){
        this.c = <img src={CaixabankLogo} className="logoCaixabank" alt="Logo User" />
       }else if(this.user === 'Bankia'){
        this.c = <img src={BankiaLogo} className="logoBankia" alt="Logo User" />
       }
     }

  }

  render() {
    return (

      <div className="row">
        <div className="logoContainer">
          <img src={EYimg} className="logo" alt="Logo EY Blanco"/>
        </div>
        <div className="title">
          <span className="blk-tit">Blockchain.ey.com</span>
        </div>
        <div className="logoUser">
          {this.c}
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