import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage"
import { Switch, Route } from "react-router-dom"
import Shop from "./pages/shop/shop"
import Header from "./components/header/header"
import SignIn from "./pages/sign-in/sign-in"
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
