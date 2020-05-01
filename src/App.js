import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats/HatsPage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/shop/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
