import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import Landing from './components/Landing'
import About from './components/About'
import Profile from './components/Profile';
import Status from './components/Status';
import Cart from './components/Cart'
import "./styles/status.css"
import './styles/about.css'
import './styles/navbar.css'
import './styles/landing.css'
import './styles/menu.css'

function App() {
  return (
    <Router>
      <div className="App">


        <Switch>

          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/nav">
            <Navbar />
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
