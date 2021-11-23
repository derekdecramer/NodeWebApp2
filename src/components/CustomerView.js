import React, { useState, useEffect } from 'react';
import Customers from "./Customers.js";

const CustomerView = (props) => {
    const [accounts, setAccounts] = useState([]);

    const getData = () => {
        fetch('accounts.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setAccounts(myJson)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    let accounts2 = [];

    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        if (account.customer_id == localStorage.getItem("customerID")) {
            accounts2.push(account);
        }
    }

    if (accounts2.length == 0) {
        return (
            <div className="app-container">
                <Customers specific={localStorage.getItem("customerID")} />
                <br></br>
                <p>This customer has no accounts associated with them.</p>
            </div>
        );
    } else {
        return (
            <div className="app-container">
                <Customers specific={localStorage.getItem("customerID")} />
                <br></br>
                <table>
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Contest ID</th>
                            <th>Rating</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            accounts2 && accounts2.length > 0 && accounts2.map((account) => (
                                <tr key={account.id}>
                                    <td>{account.customer_id}</td>
                                    <td>{account.address}</td>
                                    <td>{account.city}</td>
                                    <td>{account.state}</td>
                                    <td>{account.zip_code}</td>
                                    <td>{account.contest_id}</td>
                                    <td>{account.rating}</td>
                                    <td>{account.created_date}</td>
                                </tr>

                            ))}

                    </tbody>
                </table>
            </div>
        );
    }

};





export default CustomerView;