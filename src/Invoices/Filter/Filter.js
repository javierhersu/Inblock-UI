import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Filter.css';
import { useHistory } from "react-router-dom";
import { ReactTable } from 'react-table';
import EthereumImage from './images/loading.gif';
import imgSearch from './images/search_icon.png';

class Filter extends Component {

    boton;
    loading;
    constructor(props) {
        super(props);
        this.state = {
            upload: false
        }
        this.boton = this.getNumNotifications();
    }

    getNumNotifications() {
        var num = 10;

        if(num == 0){
           return <button id="notificationButton" onClick={this.openNav}> {num} </button>
        } else {
           return <button id="notificationButton2" onClick={this.openNav}> {num} </button>
        }   
    }

    openNav() {
        console.log('Open Nav');
    }



    search() {
        console.log('Search');
    }

    render() {

        var upload = true;
        var load;

        function uploading() {
            console.log('Upload XML 2');
            upload = true;
        }

        if(upload != false)
            load = <img src={EthereumImage} className="imagenLoading" alt="loading" />;
        else 
            load = <div></div>;

     
        return (
            <div className="filterContainer">
                <div className="buttons">
                    <div className="filter">
                        <div className="columnaButton">
                            {load}
                            <button id="actionButton" className="tooltip" onClick={uploading}>Uploading</button>
                            <img src={imgSearch} className="searchIcon" alt="Search" onClick={this.search} />
                            {this.boton}
                        </div>
                    </div>
                </div>
                <div>
                    <span class="headerLabel">Filter</span>
                </div>
                <div class="container">
                    <div class="filtersContainer">
                        <div class="filterSelectContainer">
                            <select  class="frm_input">
                                <option value="" selected disabled hidden>Select Status</option>
                                <option selected disabled>Select Status</option>
                                <option value="false">Not Disabled</option>
                                <option value="true">Disabled</option>
                            </select>
                            <select class="frm_input">
                                <option value="" selected disabled hidden>Select Type</option>
                                <option selected disabled>Select Type</option>
                                <option value="false">Not Validated</option>
                                <option value="true">Validated</option>
                            </select>
                            <select class="frm_input">
                                <option value="" disable selected hidden>Select Company</option>
                                <option selected disabled>Select Company</option>
                                <option value="Company A">Company A</option>
                            </select>
                        </div>
                    </div>
                    <div class="buttonsContainer">
                        <button class="buttonFilter">
                            <span>Apply</span>
                        </button>
                        <button class="buttonReset">
                            <span>Reset</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Filter;