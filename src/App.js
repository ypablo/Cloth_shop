import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage"
import { Switch, Route } from "react-router-dom"
import Shop from "./pages/shop/shop"
import Header from "./components/header/header"
import SignIn from "./pages/sign-in/sign-in"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
