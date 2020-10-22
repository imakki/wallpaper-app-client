import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import SignIn from './components/SignIn';
import './styles/main.css';

function App() {
  return (
    <div className="bg-white h-screen">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
