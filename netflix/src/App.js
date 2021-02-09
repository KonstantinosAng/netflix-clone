import Browse from './pages/Browse.js';
import Profiles from './pages/Profiles.js';
import Home from './pages/Home.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import React, { useEffect } from 'react';
import { auth } from './extras/firebase.js';

function App() {

  const user = null;

  useEffect(() => {
    const authorization = auth.onAuthStateChanged((Auth) => {
      if (Auth) {

      } else {

      }
    })
    return authorization;
  }, [])

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/' exact component={!user ? Home : Browse}/>
          <Route path='/profiles' exact component={Profiles} />
          <Route path='/browse' exact component={!user ? Home : Browse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
