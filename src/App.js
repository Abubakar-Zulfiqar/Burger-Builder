import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Burger } from './Components';
import store from './Redux/store';

import './App.css';



const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Burger />} />
        </Routes>
      </Router>
    </Provider>
  </>
)

export default App;