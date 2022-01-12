import React from 'react';
import { Link } from 'react-router-dom';
import './Home/Home.css';

function NotFound() {
    return (
        <div className='Landing'>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"></link>  
            <h1>Error 404: Page not found :(</h1>
            <Link to="/">Home Page</Link>
        </div>
    );
}

export default NotFound;