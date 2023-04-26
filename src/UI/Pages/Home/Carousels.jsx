import React from 'react';
import './Carousels.scss';
import ColorMan from '../../../Assets/images/ColorMan.jpg';

const Carousels = () => {
  return (
    <div className='Carousels'>
      <div className='Content'>
        <h4 style={{ marginTop: '2rem' }}>new nft's</h4>
        <div className='Carousel'>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <h4 style={{ marginTop: '5rem' }}>top nft's</h4>
        <div className='Carousel'>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <button className='BrowseBtn'>browse nft's</button>
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <div className='Item'>
      <div className='Gradient'></div>
      <img src={ColorMan} alt='NFT' />
      <div className='PriceLine'>
        <p className='Dollar'>$</p>
        <p className='Price'>500</p>
      </div>
      <p className='Item-Info'>Water Bottle</p>
    </div>
  );
};

export default Carousels;
