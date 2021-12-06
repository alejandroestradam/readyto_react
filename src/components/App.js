import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login';
import Properties from './Properties/Properties';
import Property from './Property';
import Signin from './Signin';

const App = () => {
  return (
    <Router>
          <Switch>
            <Route path ="/property">
              <Property />
            </Route>
            <Route path ="/properties">
              <Properties />
            </Route>
            <Route path ="/login">
              <Login />
            </Route>
            <Route path ="/signin">
              <Signin />
            </Route>
            <Route path ="/">
              <Home />
            </Route>
            </Switch>
    </Router>
  );
}

export default App;

