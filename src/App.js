// import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import Profile from './pages/profile';
import Login from './pages/login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
