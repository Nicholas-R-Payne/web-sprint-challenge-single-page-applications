import React from "react";
import { Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link id='order-pizza' to='/'>Order Pizza</Link>
      </div>

      <Route path='/'>

      </Route>
    </>
  );
};
export default App;