import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Invoices.css';
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import NavBar from "../NavBar2/NavBar";
import Table from "./Table/Table";
import Filter from "./Filter/Filter";

class Invoices extends Component {


  render() {
    return (
      <div className="invoiceContainer">
        <NavBar />
        <Header />
        <Filter />
        <Table />

      </div>
    );
  }

}

export default Invoices;