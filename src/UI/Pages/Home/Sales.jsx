import React from 'react';
import './Sales.scss';
import Eagle from '../../../Assets/images/ColorMan.jpg';

const Sales = () => {
  return (
    <div className='Sales'>
      <div className='Content'>
        <div className='Box' style={{ marginTop: '10rem' }}>
          <h3>Recent Transactions</h3>
          <div className='Inner'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <div className='Box' style={{ marginTop: '19rem' }}>
          <h3>Largest Sales</h3>
          <div className='Inner'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <div className='Item'>
      <h5>genesis</h5>
      <div className='Gradient' />
      <img src={Eagle} alt='NFT Art' />
      <div className='InfoLine' style={{ marginTop: '.8rem' }}>
        <p>Seller</p>
        <p>Georgieo</p>
      </div>
      <div className='InfoLine'>
        <p>Buyer</p>
        <p>Martino</p>
      </div>
      <div className='Divider'></div>
      <div className='PriceLine'>
        <p className='Dollar'>$</p>
        <p className='Price'>400</p>
      </div>
    </div>
  );
};

export default Sales;
