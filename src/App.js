import React from 'react';
import './App.scss';
import Home from './UI/Pages/Home/Home.jsx';
import Categories from './UI/Pages/Categories/Categories.jsx';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App-Main'>
      <div className='App-Background' />
      <div className='App-Content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Categories' element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

//login
//single
//multi
//catagories
//mobile
