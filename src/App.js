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

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special
    }
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PizzaForm
      value={formValues}
      update={updateForm}
      submit={submitForm}
      />
    </>
  );
};
export default App;
