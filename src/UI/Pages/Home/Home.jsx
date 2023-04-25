import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Section0 from './Section0.jsx';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';

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
      {nav ? <Navbar /> : null}
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Home;
