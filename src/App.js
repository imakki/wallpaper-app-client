import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FavouriteImagePage from './components/FavouriteImagePage';
import HomePage from './components/HomePage';
import Register from './components/Register';
import SignIn from './components/SignIn';
import './styles/main.css';

function App() {
  return (
    <div className="bg-white h-screen">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/favourites" component={FavouriteImagePage} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
