import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Cover from './Cover.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Categories from './Categories.jsx';

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
      <Footer />
    </div>
  );
};

export default Home;
