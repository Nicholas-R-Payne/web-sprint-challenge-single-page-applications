import React from "react";
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
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
