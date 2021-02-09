import Browse from './pages/Browse.js';
import Profiles from './pages/Profiles.js';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import React, { useEffect } from 'react';
import { auth } from './extras/firebase.js';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './extras/userSlice.js';

function App() {

  const user = useSelector(selectUser);
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
          <Route path='/profiles' exact component={!user ? Home : Profiles} />
          <Route path='/profile' exact component={!user ? Home : Profile} />
          <Route path='/browse' exact component={!user ? Home : Browse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
