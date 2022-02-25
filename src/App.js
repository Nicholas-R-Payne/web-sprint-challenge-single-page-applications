import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';

import PizzaForm from './PizzaForm'

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
      </div>

      <Route path='/pizza'>
        <PizzaForm values={formValues} />
      </Route>
    </>
  );
};
export default App;