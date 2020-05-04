import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HatsPage from './pages/hats/HatsPage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './components/sing-in-and-signup/sing-in-and-signup.component';
import HomePage from './components/homepage/homepage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  state = {
    currentUser: null
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=>console.log(this.state));
        });
      }
      //If we dont get a user back from firebase set it to null
      this.setState({currentUser:null})
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
