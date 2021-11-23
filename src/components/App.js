//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Contests from "./Contests.js";
import Customers from "./Customers.js";
import CustomerView from "./CustomerView";

const App = () => {
    return (
        <div className="App">
            <h1>Admin Panel</h1>
            <Home />
            <Routes>
                <Route path="/" element={<Customers specific="0"/>} />
                <Route path="contests" element={<Contests />} />
                <Route path="customers" element={<Customers specific="0"/>} />
                <Route path="customerview" element={<CustomerView />} />
            </Routes>
        </div>
    );

    
};




export default App;
//export default Contests;
