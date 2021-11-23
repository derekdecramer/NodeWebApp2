import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useFitText from "use-fit-text";
import {
    useTable,
    useMemo,
    getRowId,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
} from "react-table"

const Customers = (props) => {

    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();
    const { fontSize, ref } = useFitText();

    const getData = () => {
        fetch('customers.json'
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
                setCustomers(myJson)
            });
    }

    useEffect(() => {
        getData()
    }, [])


   

    if (props.specific == "0") {
        return (
            <div className="app-container">
                <table>

                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Active</th>
                            <th>Account Manager ID</th>
                            <th>Reason For Joining</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers && customers.length > 0 && customers.map((customer) => (

                            <tr key={customer.id} data-item={customer} 
                                onClick={() => {
                                    localStorage.setItem('customerID', customer.id);
                                    navigate('/customerview');
                                }
                            }>
                                
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.active}</td>
                                <td>{customer.account_manager_id}</td>
                                <td ref={ref} style={{ fontSize}}> { customer.reason_for_joining }</td>
                                <td>{customer.created_date}</td>
                            </tr>


                        ))}

                    </tbody>
                </table>
            </div>
        );
    } else {

        let customers2 = [];
        for (var i = 0; i < customers.length; i++) {
            var customer = customers[i];
            
            if (customer.id == props.specific) {
                customers2.push(customer);
                break;
            }
        }


        
        
        return (
            <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Active</th>
                            <th>Account Manager ID</th>
                            <th>Reason For Joining</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers2 && customers2.length > 0 && customers2.map((customer) => (
                            <tr key={customer.id} data-item={customer} height="50px">
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.active}</td>
                                <td>{customer.account_manager_id}</td>
                                <td>{customer.reason_for_joining}</td>
                                <td>{customer.created_date}</td>
                            </tr>


                        ))}

                    </tbody>
                </table>
            </div>
        );
        
    }

};

export default Customers;