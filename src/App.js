import './App.css';
import Nav from './components/nav'
import Newsfeed from './components/newsfeed'
import Sidebar from './components/sidebar'
import Topnav from './components/topnav'
function App() {
  return (
    <div className="App">
      <Topnav />
      <div className="container main-con">
        <Nav />
        <Newsfeed />
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
