import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Tabs from './tabs'

function init() {
   const appRoot = document.createElement('div');
   document.body.appendChild(appRoot);
   if (!appRoot) {
      throw new Error("Can't find App Root")
   }
   const root = createRoot(appRoot);
   console.log("Tabs root:",appRoot);
   root.render(
   <Router>
      <Tabs />
   </Router>)
}

init();