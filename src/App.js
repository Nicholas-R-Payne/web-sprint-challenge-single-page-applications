import React, { useEffect, useState } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import PizzaForm from './PizzaForm';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  ham: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialPizzaOrder = [];
const initialDisabled = true;

const App = () => {

  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setPizzaOrders([res.data, ...pizzaOrders])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'bacon', 'ham'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    postOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
      </div>

      <Route path='/pizza'>
        <PizzaForm values={formValues} update={updateForm} submit={submitForm} disabled={disabled} errors={formErrors} />
        {pizzaOrders.map(order => {
          return (
            <div key={order.id}>
              <p>Name: {order.name}</p>
              <p>Size: {order.size}</p>
              <p>Toppings: {order.toppings}</p>
              <p>Special Instructions: {order.special}</p>
            </div>
          )
        })}
      </Route>
    </>
  );
};
export default App;