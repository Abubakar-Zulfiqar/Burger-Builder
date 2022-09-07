import React from 'react';
// import React, { Suspense, lazy } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Burger } from './Components/index'

import './App.css';

// const Hooks = lazy(() => import("./Components/Hooks"));
// const Navbar = lazy(() => import("./Components//Navbar/Navbar"));
// const Burger = lazy(() => import("./Components/Burger/Burger"));


const App = () => (
  <>
    <Navbar />
    <div className="burgerContent">
      <Burger />
    </div>
    {/* <Footer /> */}
    {/* <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/home" element={<Navbar />} />
          <Route path="/home" element={<Burger />} />
        </Routes>
      </Suspense>
    </Router> */}
  </>
)

export default App;