import Browse from './pages/Browse.js';
import Profiles from './pages/Profiles.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/' exact component={Profiles} />
          <Route path='/browse' component={Browse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
