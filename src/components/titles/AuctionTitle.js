import React from 'react';

const AuctionTitle = () => {
    return (
        <div className='auction-title'>
            <img src={require('../../images/logos/auction-logo.png')} alt=''/>
            <h1>Salles aux enchères</h1>
        </div>
    );
};

export default AuctionTitle;