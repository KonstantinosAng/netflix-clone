import Browse from "./pages/Browse.js";
import Profiles from "./pages/Profiles.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import LoadingPage from "./pages/LoadingPage.js";
import NotFound from "./pages/NotFound.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./extras/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./extras/userSlice.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [_, loading] = useAuthState(auth);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const authorization = auth.onAuthStateChanged((Auth) => {
      if (Auth) {
        dispatch(
          login({
            displayName: Auth.displayName,
            uid: Auth.uid,
            email: Auth.email,
            photoUrl: Auth.photoURL,
          })
        );
      } else {
        dispatch(logout);
        window.history.replaceState("", "Netflix", "/");
      }
    });
    return authorization;
  }, [dispatch]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="app">
      {!user ? (
        <Home />
      ) : (
        <Router basename="/">
          <Switch>
            <Route path="/" exact component={Profiles} />
            <Route path="/profiles" exact component={Profiles} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/browse" exact component={Browse} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
