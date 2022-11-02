import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Popup from './popup'

function init() {
   const appRoot = document.createElement('div');
   document.body.appendChild(appRoot);
   if (!appRoot) {
      throw new Error("Can't find App Root")
   }
   const root = createRoot(appRoot);
   console.log("Popup root:",appRoot);
   root.render(
   <Router>
      <Popup />
   </Router>)
}

init();