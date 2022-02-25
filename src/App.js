import React from "react";
import { Route, Link } from 'react-router-dom';

import PizzaForm from './PizzaForm'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
      </div>

      <Route path='/pizza'>
        <PizzaForm />
      </Route>
    </>
  );
};
export default App;