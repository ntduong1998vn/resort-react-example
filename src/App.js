import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";
import Home from './pages/Home.js';
import Rooms from './pages/Rooms.js'
import SingleRoom from './pages/SingleRoom.js'
import Error from './pages/Error.js'

import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
