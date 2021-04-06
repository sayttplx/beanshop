import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Screens
import LandingScreen from './screens/LandingScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';
import StatusScreen from './screens/StatusScreen'


// Components
import Cart from './components/Cart';



function App() {

  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <LandingScreen />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/menu">
          <MenuScreen />
        </Route>

        <Route path="/about">
          <AboutScreen />
        </Route>

        <Route path="/status">
          <StatusScreen />
        </Route>


      </Switch>




    </Router>
  );
}

export default App;
