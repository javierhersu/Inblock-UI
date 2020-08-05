import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router'
import { withRouter } from "react-router-dom";
import './Header.css';
import spanishImage from "./images/spanish-language.png";
import englishImage from "./images/english-language.png";
import logoutIcon from "./images/icon_logout.svg";


class Header extends Component {

    user;
    userHeader;
    c;

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.user = localStorage.getItem("user");
        console.log("USER: "+this.user);
        this.userHeader = this.user.toUpperCase();
        localStorage.setItem("language", "english");
        this.c = <img className="icon_language" src={englishImage} alt="English Icon" />
    }

    logout(event) {
        event.preventDefault();
        this.props.history.push('login');
      }

    changeLanguage() {
        var language = localStorage.getItem("language");
        if(language === 'english') {
            language = 'spanish';
            this.c = <img className="icon_language" src={englishImage} alt="English Icon" />
        } else {
            language = 'english'
            this.c = <img className="icon_language" src={spanishImage} alt="Spanish Icon" />
        }
        console.log(language)

        localStorage.setItem("language", language);
    }

  render() {
    return (
        <div className={this.user}>
            <div className="menuItemsLeftDashboard">
                <p><a href="#" className="nonSelectedItem">Invoices Overview</a></p>
            </div>
            <div className="menuItemsLeftDashboard">
                <p><a href="#" className="nonSelectedItem">Invoices Uploading</a></p>
            </div>
            <div className="menuItemsLeftDashboard">
                <p><a href="#" className="nonSelectedItem">Dashboard Overview</a></p>
            </div>
            <div className="menuItemsLeftDashboard">
                <p><a href="#" className="nonSelectedItem">Dashboard Detail</a></p>
            </div>
            <div className="menuItemsRight">
                <button className="buttonLanguage" onClick={this.changeLanguage.bind(this)}>{this.c}</button>
                <div className="logout">
                    <img className="icon_logout" src={logoutIcon} onClick={this.logout.bind(this)}/>
                </div>
            </div>
            <div className="menuItemsRight2">
                <span className="user">{this.userHeader}</span>
            </div>
        </div>
    );
  }

}

export default Header;