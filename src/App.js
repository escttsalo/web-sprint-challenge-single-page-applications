import React from "react";
import { Route, Link } from 'react-router-dom'

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

      
    </div>
  );
};
export default App;
