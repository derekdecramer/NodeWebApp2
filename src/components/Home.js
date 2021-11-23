import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <Link to="/contests">Contests</Link>
                <br></br><br></br>
                <Link to="/customers">Customers (Home)</Link>
            </nav>
            <br></br>
        </>
    );
};

export default Home;