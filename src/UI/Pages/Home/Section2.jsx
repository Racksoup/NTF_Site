import React from 'react';
import './Section2.scss';
import Panda from '../../../Assets/images/Panda.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
  const getScrollPos = () => {
    let ele = document.getElementById('Carousel');
    let tape = document.getElementById('Tape2');

    let scrollDist = ele.scrollLeft + ele.clientWidth;
    let tapeWidth = tape.clientWidth;

    if (scrollDist >= tapeWidth * 2) {
      ele.scrollLeft = tapeWidth - ele.clientWidth;
    }

    if (scrollDist <= ele.clientWidth) {
      ele.scrollLeft = tapeWidth;
    }
  };

  const Item = () => {
    return (
      <div className='Item'>
        <img src={Panda} alt='Panda' />
        <div className='Info'>
          <h5>Panda NFT</h5>
          <p>Panda Art Copyright Sold On Etherium</p>
        </div>
      </div>
    );
  };

  const ScrollClick = (dir) => {
    let carousel = document.getElementById('Carousel');

    let scroll;
    if (dir == 'Right') {
      scroll = 320;
    }
    if (dir == 'Left') {
      scroll = -320;
    }

    carousel.scroll({
      left: carousel.scrollLeft + scroll,
      top: carousel.scrollTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='Section2'>
      <div className='Carousel' id='Carousel' onScroll={() => getScrollPos()}>
        <div className='ScrollStart' onClick={() => ScrollClick('Left')}>
          <FontAwesomeIcon icon={faChevronLeft} className='Iconx' />
        </div>
        <div className='ScrollEnd' onClick={() => ScrollClick('Right')}>
          <FontAwesomeIcon icon={faChevronRight} className='Iconx' />
        </div>
        <div className='Tape' id='Tape1'>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className='Tape' id='Tape2'>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Section2;
