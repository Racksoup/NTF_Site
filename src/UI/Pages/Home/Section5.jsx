import React from 'react';
import './Section5.scss';
import Octopus from '../../../images/Octopus.svg';
import Emu from '../../../images/Emu.svg';
import Eagle from '../../../images/Eagle.svg';
import Cat from '../../../images/Cat.png';
import Camel from '../../../images/Camel.png';

const Section5 = () => {
  return (
    <div className='Section5'>
      <h2>Browse Your Favorite Artitst and Celebrities</h2>
      <div className='Content'>
        <button className='Item'>
          <h4>Octopus</h4>
          <img src={Octopus} alt='Octopus' />
        </button>
        <button className='Item'>
          <h4>Cat</h4>
          <img src={Cat} alt='Cat' />
        </button>
        <button className='Item'>
          <h4>Eagle</h4>
          <img src={Eagle} alt='Eagle' />
        </button>
        <button className='Item'>
          <h4>Emu</h4>
          <img src={Emu} alt='Emu' />
        </button>
        <button className='Item'>
          <h4>Camel</h4>
          <img src={Camel} alt='Camel' />
        </button>
      </div>
    </div>
  );
};

export default Section5;
