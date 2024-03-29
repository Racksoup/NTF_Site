import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Cover from './Cover.jsx';
import Sales from './Sales.jsx';
import Categories from './Categories.jsx';
import Info from './Info.jsx';
import Artists from './Artists.jsx';
import Carousels from './Carousels.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Home = () => {
  const [nav, toggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > window.innerHeight) {
        toggleNav(true);
      }
      if (window.scrollY <= window.innerHeight) {
        toggleNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Home' id='Home'>
      {/* {nav ? <Navbar /> : null} */}
      <Cover />
      <Categories />
      <Sales />
      <Info />
      <Artists />
      <Carousels />
      <Footer />
    </div>
  );
};

export default Home;
