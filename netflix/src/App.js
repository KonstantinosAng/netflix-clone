import Browse from './pages/Browse.js';
import Profiles from './pages/Profiles.js';
import Home from './pages/Home.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import React, { useEffect } from 'react';
import { auth } from './extras/firebase.js';
import { useDispatch } from 'react-redux';
import { login, logout } from './extras/userSlice.js';

function App() {

  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const authorization = auth.onAuthStateChanged((Auth) => {
      if (Auth) {
        dispatch(login({
          uid: Auth.uid,
          email: Auth.email
        }
        ));
      } else {
        dispatch(logout);
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
