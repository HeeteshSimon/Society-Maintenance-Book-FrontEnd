import React from 'react';
import { Link } from 'react-router-dom';

const TableComp = () => {
    return (
        <>
            <Link to="/dashboard"> Dashboard</Link>
            <h1>Logged in . This is TableComp</h1>
        </>
    );
}

export default TableComp;