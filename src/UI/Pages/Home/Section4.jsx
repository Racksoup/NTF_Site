import React from 'react';
import './Section4.scss';
import IcecreamCone from '../../../images/IcecreamCone.png';

const Section4 = () => {
  const Item = (place) => {
    return (
      <div className={`Item ${place.place}`}>
        <img src={IcecreamCone} alt='IcecreamCone' />
        <h5>Ice Cream Cone</h5>
      </div>
    );
  };

  return (
    <div className='Section4'>
      <div className='ContentBG'>
        <div className='Content'>
          <div className='Half Left'>
            <Item place='Item-1' />
            <Item place='Item-2' />
            <Item place='Item-3' />
            <Item place='Item-4' />
            <Item place='Item-5' />
            <Item place='Item-6' />
          </div>
          <div className='Half Right'>
            <h4>
              Explore NFT's created by the worlds top artists, celebrities, and finance experts
            </h4>
            <h5>Buy NFT's registered on all blockchains</h5>
            <button className='BuyBtn'>
              <div className='Inner'>
                <p>Explore NFT's</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
