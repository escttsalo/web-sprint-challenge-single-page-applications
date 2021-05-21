import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from 'react-router-dom'

import Home from './components/Home'
import PizzaForm from './components/PizzaForm'

const pizzaFormInit = {
  name: '',
  size: '',
  pepperoni: false,
  canadian_bacon: false,
  bacon: false,
  sausage: false,
  special: '',
}


const pizzaErrorsInit = {
  name: '',
  size: '',
}

const ordersInit = [];
const disabledInit = true;

const App = () => {

  //Initialize state
  const [formVals, setFormVals] = useState(pizzaFormInit);
  const [orders, setOrders] = useState(ordersInit);
  const [formErrors, setFormErrors] = useState(pizzaErrorsInit);
  const [disabled, setDisabled] = useState(disabledInit);

  //Post New Orders
  const postOrder = newOrder => {
    axios
      .post('https:reqres.in/api/orders', newOrder)
      .then( res => {
        console.log(res)
        setOrders([res.date, ...orders])
      })
      .catch( err => {
        console.log(err)
      })
      .finally(setFormVals(pizzaFormInit))
  }

  //On Input Change
  const changeForm = (name, value) => {
    setFormVals(
      {...formVals, [name]: value}
    )
  }

  //On Submit Form
  const submitForm = () => {
    const newOrder = {
      name: formVals.name.trim(),
      size: formVals.size.trim(),
      toppings: ['pepperoni', 'canadian_bacon','bacon','sausage'].filter(top => formVals[top]),
      special: formVals.special.trim()
    }

    postOrder(newOrder)
  }

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
        return <PizzaForm 
          {...props} 
          values={formVals}
          change={changeForm}
          submit={submitForm}
          disabled={disabled}
          errors={formErrors}
        />
      }} />
      <Route exact path='/' component={Home}/>
    </div>
  );
};
export default App;
