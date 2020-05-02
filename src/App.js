import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HatsPage from './pages/hats/HatsPage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './components/sing-in-and-signup/sing-in-and-signup.component';
import HomePage from './components/homepage/homepage.component';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  state = {
    currentUser: null
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/shop/hats' component={HatsPage} />
            <Route exact path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
