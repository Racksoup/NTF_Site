import React from 'react';
import './Cover.scss';
import Panda from '../../../Assets/images/Panda.png';

const Cover = () => {
  return (
    <div className='Cover'>
      <div className='Header'>
        <h1>Panda NFT s</h1>
        <img src={Panda} alt='Panda' className='HeaderIcon' />
        <h3>Home to millions of the worlds best NFT's</h3>
      </div>

      <div className='Bottom'>
        <div className='VLine'></div>
        <div className='Bottom-Content'>
          <p>Daily Point Prizes</p>
          <div className='HLine'></div>
          <p>Weekly Giveaways</p>
          <div className='HLine'></div>
          <p>$50 Sign-up Bonus</p>
        </div>
        <div className='VLine'></div>
      </div>
      <div className='CallToAction'>
        <button className='BuyBtn'>BUY NFT'S</button>
        <button className='LoginBtn'>LOGIN</button>
      </div>
    </div>
  );
};

export default Cover;
