import React from "react";
import { Route, Link } from 'react-router-dom'

import Home from './components/Home'
import PizzaForm from './components/PizzaForm'

const App = () => {
  return (
    <div className='container'>
      <nav>
        <h1 className='header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/' id='order-pizza'>Home</Link>
          <a href="#">Help</a>
        </div>
      </nav>

      <Route exact path='/pizza' render={props => {
        //Add items later
        return <PizzaForm {...props} />
      }} />
      <Route exact path='/' component={Home}/>
    </div>
  );
};
export default App;
