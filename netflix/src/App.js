import Browse from './pages/Browse.js';
import Profiles from './pages/Profiles.js';
import Login from './pages/Login.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {

  const user = null;

  return (
    <div className="app">
      <Router>
          {!user ? ( <Login /> ) : (
          <Switch>
          <Route path='/' exact component={Browse}/>
          <Route path='/profiles' exact component={Profiles} />
          <Route path='/browse' exact component={Browse} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
