import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import User from "./components/userpage/User"
import Topnav from './components/topnav'
import Test from './Test';
import HomePage from './components/newsfeed/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Topnav />
        <Switch>
          <Route  path="/" exact component= {HomePage} />
            
          <Route path="/user/:userId"  component= {User} />
          {/* 
          <Router path="/user/:userId"  >
            <User />
          </Router >
          */}
          
          <Route path = "/test" >
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
