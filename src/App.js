import React from 'react';
import './App.scss';
import Home from './UI/Pages/Home/Home.jsx';
import { store } from './Redux/store';

import { Provider } from 'react-redux';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Provider store={store}>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
};

export default App;

//login
//single
//multi
//catagories
//mobile
