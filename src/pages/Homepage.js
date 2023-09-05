import React from 'react';
import Header from '../components/Header';
import Users from '../components/Users';
import '../style/Homepage.css';

const Homepage = () => {
    return (
        <div>
            <Header/>
            <Users/>
        </div>
    );
};

export default Homepage;