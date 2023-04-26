import React from 'react';
import './Categories.scss';
import ArtSpiral from '../../../Assets/images/ArtSpiral.jpg';
import Basketball from '../../../Assets/images/Basketball.png';
import ColorMan from '../../../Assets/images/ColorMan.jpg';
import Gaming from '../../../Assets/images/Gaming.jpg';
import StockChart from '../../../Assets/images/StockChart.png';
import Vector1 from '../../../Assets/images/Vector1.png';

const Categories = () => {
  return (
    <div className='Categories'>
      <img src={Vector1} alt='Curve' className='Curve' />
      <div className='Content'>
        <h3>BROWSE</h3>
        <h2>NFT'S</h2>
        <div className='Content-Items'>
          <div className='Item' style={{ backgroundImage: `url(${Basketball})` }}>
            <h4>SPORT'S</h4>
          </div>
          <div className='Item' style={{ backgroundImage: `url(${Gaming})` }}>
            <h4>gaming</h4>
          </div>
          <div className='Item' style={{ backgroundImage: `url(${StockChart})` }}>
            <h4>business</h4>
          </div>
          <div className='Item' style={{ backgroundImage: `url(${ColorMan})` }}>
            <h4>celebrities</h4>
          </div>
          <div className='Item' style={{ backgroundImage: `url(${ArtSpiral})` }}>
            <h4>art</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
