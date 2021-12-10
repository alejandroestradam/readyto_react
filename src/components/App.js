import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddProperty from './AddProperty';
import Home from './Home/Home';
import Login from './Login';
import Navbar from './Navbar';
import Properties from './Properties/Properties';
import Property from './Property';
import Signin from './Signin';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);

  const callbackFunction = (childData) => {
    console.log('data: ', childData);
    setisLoggedIn(childData);
  }

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
          <Switch>
            <Route path ="/property">
              <Property />
            </Route>
            <Route path="/addproperty">
              <AddProperty />
            </Route>
            <Route path ="/properties">
              <Properties />
            </Route>
            <Route path ="/login">
              <Login parentCallback={callbackFunction}/>
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

