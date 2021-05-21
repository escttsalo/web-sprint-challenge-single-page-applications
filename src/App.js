import React from "react";
import { Route, Link } from 'react-router-dom'

import Home from './components/Home'

const App = () => {
  return (
    <div className='container'>
      <nav>
        <h1 className='header'>Lambda Eats</h1>
        <div className='nav-links'>
          <a href="#">Home</a>
          {/* <Link to='/' id='order-pizza'>Home</Link> */}
          <a href="#">Help</a>
        </div>
      </nav>

      
      <Route path='/' component={Home}/>
    </div>
  );
};
export default App;
