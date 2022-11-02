import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../popup/components/Home';
import About from '../popup/components/About';

const Tabs = () => {
   return (
      <div>
         <h2>Tabs Page</h2>
         <ul>
            <li>
                <a href='#/about'>About</a>
            </li>
            <li>
                <a href='#/'>Home</a>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </div>
   );
};

export default Tabs;