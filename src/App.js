import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FavouriteImagePage from './components/FavouriteImagePage';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Register from './components/Register';
import SignIn from './components/SignIn';
import './styles/main.css';

function App() {
  return (
    <div className="bg-white h-screen">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/favourites" component={FavouriteImagePage} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={SignIn} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
