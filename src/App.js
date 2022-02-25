import React, { useState } from "react";
import axios from 'axios';

import PizzaForm from './PizzaForm';

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
}

function App () {

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PizzaForm values={formValues} update={updateForm} submit={submitForm} />
    </>
  );
};

export default App;
