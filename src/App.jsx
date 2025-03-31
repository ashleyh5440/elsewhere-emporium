import React from 'react';
import { useRoutes } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import { Power3, gsap } from 'gsap';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';

function App({ router }) {

  // if (!router) {
  //   return<div>Loading...</div>;
  // }

  // const routeResult = useRoutes(router); 

  return (
    <main>
      <Navigation />
      {routeResult}
    </main>
  );
}

export default App;
