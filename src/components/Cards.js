import React from 'react';

const Cards = ({user}) => {
    return (
        <div className='userDetails'>
            <img src={user.picture.large} alt="user profile picture"/>
            <h1>{user.name.first}</h1>
            <h1>{user.name.last}</h1>
            <h2>{user.location.country}</h2>
        </div>
    );
};

export default Cards;