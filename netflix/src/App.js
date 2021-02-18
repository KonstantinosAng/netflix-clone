import Browse from './pages/Browse.js';
import Profiles from './pages/Profiles.js';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import LoadingPage from './pages/LoadingPage.js';
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
      {!user ? Home:
        <Router>
          <Switch>
            <Route path='/' exact component={Browse}/>
            <Route path='/profiles' exact component={Profiles} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/browse' exact component={Browse} />
            <Route path='/loading' exact component={LoadingPage} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
