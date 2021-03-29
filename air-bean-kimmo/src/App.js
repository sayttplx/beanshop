import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile';
import Status from './components/Status';
import Cart from './components/Cart'

function App() {
  return (
    <Router>
      <div className="App">


        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/nav">
            <Navigation />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/status">
            <Status />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
