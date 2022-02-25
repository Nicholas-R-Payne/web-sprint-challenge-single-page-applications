import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import PizzaForm from './PizzaForm'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  ham: false,
  special: ''
}

const initialPizzaOrder = [];

const App = () => {

  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrder);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setPizzaOrders([res.data, ...pizzaOrders])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
      </div>

      <Route path='/pizza'>
        <PizzaForm values={formValues} update={updateForm} submit={submitForm} />
      </Route>
    </>
  );
};
export default App;