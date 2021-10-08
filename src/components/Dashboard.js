import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <Link to="/table" >TABLE PAGE</Link>
            <h1>Logged in . This is dashboard</h1>
        </>
    );
}

export default Dashboard;