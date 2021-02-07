import Browse from './Browse.js';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/' exact component={Browse} />
          <Route path='/browse' component={Browse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
