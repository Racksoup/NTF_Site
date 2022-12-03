import React from 'react';
import './Section0.scss';
import HomeScreen from '../../../images/HomeScreen.png';
import Panda from '../../../images/Panda.png';

const Section0 = () => {
  return (
    <div className='Section0'>
      <img src={HomeScreen} alt='HomeScreen' className='background' />
      <h1 className='Header'>
        Panda NFT s
        <img src={Panda} alt='Panda' className='HeaderIcon' />
      </h1>

      <div className='HeaderBtns'>
        <img src={Panda} alt='Panda' className='Icon' />
        <div className='Btns'>
          <button className='Btn'>
            <p className='Text'>Sign-up</p>
          </button>
          <p className='SignIn'>Sign-in</p>
        </div>
      </div>

      <div className='Right'>
        <div className='Perks'>
          <div className='Item'>
            <p className='Text'>Daily Point Prizes</p>
          </div>
          <div className='Divider Divider-1'></div>
          <div className='Item'>
            <p className='Text'>Weekly Giveaways</p>
          </div>
          <div className='Divider Divider-2'></div>
          <div className='Item'>
            <p className='Text'>$50 Sign-up Bonus</p>
          </div>
        </div>

        <button className='BuyBtn'>
          <div className='Inner'>
            <p className='Text'>Buy NFTs</p>
          </div>
        </button>

        <p className='FlavorText'>Home to millions of the worlds best NFTs</p>
      </div>
    </div>
  );
};

export default Section0;
