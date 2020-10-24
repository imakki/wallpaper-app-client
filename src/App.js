import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import FavouriteImagePage from './components/FavouriteImagePage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import SignIn from './components/SignIn';
import './styles/main.css';

function App() {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/favourites" component={FavouriteImagePage} />
        <Route path="/register" component={Register} />
        <Route path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
