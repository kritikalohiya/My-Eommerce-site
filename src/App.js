import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Details from './Components/Products/ProductDetails/Details';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/productslist" component={Products}/>
        <Route exact path="/productdescription/:id" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
