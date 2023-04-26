import React from 'react';
import './Sales.scss';
import Eagle from '../../../Assets/images/Eagle.png';

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
          </div>
        </div>
        <div className='Box' style={{ marginTop: '19rem' }}>
          <h3>Largest Sales</h3>
          <div className='Inner'>
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
      <img src={Eagle} alt='NFT Art' />
      <div className='PriceLine'>
        <p className='Dollar'>$</p>
        <p className='Price'>400</p>
      </div>
      <p>Seller: Genesis</p>
      <p>Buyer: Genesis</p>
    </div>
  );
};

export default Sales;
