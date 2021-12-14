import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddProperty from './AddProperty';
import Home from './Home/Home';
import Login from './Login';
import Navbar from './Navbar';
import Properties from './Properties/Properties';
import Signin from './Signin';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = React.useState({
    status: false,
    name: '',
    token: ''
});
const [selectedProperty, setselectedProperty] = React.useState({

});

  const callbackFunction = (childData) => {
    setisLoggedIn(childData);
  }
  const callback = (Data) => {
    setselectedProperty(Data);
  }

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
          <Switch>
            <Route path="/addproperty">
              <AddProperty />
            </Route>
            <Route path ="/properties">
              <Properties parentCallback={callback} isLoggedIn={isLoggedIn}/>
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

