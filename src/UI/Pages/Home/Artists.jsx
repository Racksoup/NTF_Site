import React from 'react';
import './Artists.scss';
import ColorMan from '../../../Assets/images/ColorMan.jpg';

const Artists = () => {
  return (
    <div className='Artists'>
      <div className='Content'>
        <div className='TopLine'>
          <h4>our artists</h4>
          <button className='BrowseBtn'>browse nft's</button>
        </div>
        <div className='Bottom'>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <div className='Item'>
      <img src={ColorMan} alt='Artist' />
      <h5>Jamie</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu. Morbi tincidunt
        augue interdum velit euismod.
      </p>
    </div>
  );
};

export default Artists;
