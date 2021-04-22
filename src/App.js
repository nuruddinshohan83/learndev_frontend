import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/newsfeed/nav'
import Newsfeed from './components/newsfeed/newsfeed'
import Sidebar from './components/newsfeed/sidebar'
import Topnav from './components/topnav'
function App() {
  return (
    <Router>
      <div className="App">
        <Topnav />
        <Switch>
          <Route>
            <div className="container main-con">
              <Nav />
              <Newsfeed />
              <Sidebar/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
