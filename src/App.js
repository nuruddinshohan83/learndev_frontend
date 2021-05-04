import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import User from "./components/userpage/User"
import Topnav from './components/topnav'
import HomePage from './components/newsfeed/Homepage';
import Test from "./test"
import UploadPost from './components/newsfeed/uploadpost';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import { AuthProvider } from './components/auth/auth';
import Porfile from './components/profile/profile';
import Postpage from './components/postpage/postpage';

function App() {
  localStorage.setItem("loggedin", false);
  localStorage.setItem("token", "");
  return (
    <Router>
      <div className="App">
        <AuthProvider>
        <Topnav />
       
        
        <Switch>
          <Route  path="/" exact component= {HomePage} />
          <Route path="/user/:userId"  component= {User} />
          <Route path="/post/:postId" component ={Postpage} />
          <Route path="/test" component ={Test} />
          <Route path="/uploadpost" component ={UploadPost} />
          <AuthProvider>
            <Route path="/signin" component ={SignIn} />
            <Route path="/signup" component ={SignUp} />
            <Route path="/profile" component ={Porfile} />
          </AuthProvider>
          
        </Switch>
        </AuthProvider>

      </div>
    </Router>
  );
}



export default App;
