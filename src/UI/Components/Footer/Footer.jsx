import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Content'>
        <div className='Half'>
          <div className='Col'>
            <h4 className='Title'>Merch</h4>
            <div className='Line' />
            <p className='Item'>NFTs</p>
            <p className='Item'>Crypto</p>
            <p className='Item'>Gear</p>
            <p className='Item'>Fitness</p>
            <p className='Item'>Accessories</p>
            <p className='Item'>Tech</p>
          </div>
          <div className='Col'>
            <h4 className='Title'>Navigation</h4>
            <div className='Line' />
            <p className='Item'>Login</p>
            <p className='Item'>Create Account</p>
            <p className='Item'>Profile</p>
            <p className='Item'>Cart</p>
            <p className='Item'>Wishlist</p>
            <p className='Item'>Orders</p>
          </div>
          <div className='Col'>
            <h4 className='Title'>Info</h4>
            <div className='Line' />
            <p className='Item'>About</p>
            <p className='Item'>Contact</p>
          </div>
        </div>
        <div className='Half'>
          <div className='Col Right-Col'>
            <div className='Title'>Newsletter</div>
            <div className='Line' />
            <p className='Item'>Enter your email to subscribe to our newsletter</p>
            <input type='text' className='Input' placeholder='Email' />
            <button className='Btn'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='EndBG' />
    </div>
  );
};

export default Footer;
