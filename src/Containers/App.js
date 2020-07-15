import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from '../Components/Homepage/Homepage';
import ShopPage from '../Components/ShopPage/ShopPage';
import Header from '../Components/header/header';



function App() {
  return (
    <div>
    <Header/>
      <Switch>
      	<Route exact path='/' component={HomePage}/>
      	<Route path ='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
