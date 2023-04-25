import React from 'react';
import './Section1.scss';
import Basketball from '../../../Assets/images/Basketball.png';
import Gaming from '../../../Assets/images/Gaming.jpg';
import StockChart from '../../../Assets/images/StockChart.png';
import ColorMan from '../../../Assets/images/ColorMan.jpg';
import ArtSpiral from '../../../Assets/images/ArtSpiral.jpg';
import BTC from '../../../Assets/images/BTC.png';

const Section1 = () => {
  return (
    <div className='Section1'>
      <h2>Browse NFTs</h2>

      <div className='Categories'>
        <button className='Item Item-1'>
          <img src={Basketball} alt='Basketball' />
          <h4 className='Title'>Sport's</h4>
        </button>
        <button className='Item Item-2'>
          <img src={Gaming} alt='Gaming' />
          <h4 className='Title'>Gaming</h4>
        </button>
        <button className='Item Item-3'>
          <img src={StockChart} alt='StockChart' />
          <h4 className='Title'>Business</h4>
        </button>
        <button className='Item Item-4'>
          <img src={ColorMan} alt='ColorMan' />
          <h4 className='Title'>Celebrities</h4>
        </button>
        <button className='Item Item-5'>
          <img src={ArtSpiral} alt='ArtSpiral' />
          <h4 className='Title'>Art</h4>
        </button>
        <button className='Item Item-6'>
          <img src={BTC} alt='BTC' />
          <h4 className='Title'>Crypto</h4>
        </button>
      </div>
    </div>
  );
};

export default Section1;
