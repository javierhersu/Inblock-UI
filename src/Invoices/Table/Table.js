import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Table.css';
import { useHistory } from "react-router-dom";
import { ReactTable } from 'react-table';


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 5
        }
    }

    // renderTableData() {
    //     return this.state.invoices.map((invoice, index) => {
    //         const { invoiceID, uploading, company, amount, discount, existence, issue, maturity } = invoice //destructuring
    //         return (
    //            <tr key={invoiceID}>
    //               <td>{invoiceID}</td>
    //               <td>{uploading}</td>
    //               <td>{company}</td>
    //               <td>{amount}</td>
    //               <td>{discount}</td>
    //               <td>{existence}</td>
    //               <td>{issue}</td>
    //               <td>{maturity}</td>
    //            </tr>
    //         )
    //      })
    // }

    // renderTableHeader() {
    //     let header = Object.keys(this.state.invoices[0])
    //     return header.map((key, index) => {
    //         return <th key={key}>{key.toUpperCase()}</th>
    //     })
    // }

    render() {
     
        return (
            <div className="tableContainer">
            <h1>Table</h1>
            {/* <table id='invoices'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table> */}

            </div>
        );
    }

}

export default Table;