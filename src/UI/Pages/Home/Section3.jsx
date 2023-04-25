import React from 'react';
import './Section3.scss';
import IcecreamCone from '../../../Assets/images/IcecreamCone.png';

const Section3 = () => {
  const Item = () => {
    return (
      <div className='Item'>
        <img src={IcecreamCone} alt='IcecreamCone' />
        <h5>Ice Cream Cone</h5>
      </div>
    );
  };

  return (
    <div className='Section3'>
      <h2>Best NFT Deals</h2>
      <div className='Content'>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Section3;
