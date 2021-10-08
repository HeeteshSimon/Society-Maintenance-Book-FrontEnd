import React from 'react';
import { Link } from 'react-router-dom';

const FileComp = () => {
    return (
        <>
            <Link to="/table" >TABLE PAGE</Link>
            <h1>Logged in . This is FileComp</h1>
        </>
    );
}

export default FileComp;