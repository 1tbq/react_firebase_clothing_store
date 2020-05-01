import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats/HatsPage.component';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Switch>
    <Route exact path='/'     component={HomePage} />
    <Route exact path='/shop/hats' component={HatsPage} />
  </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
