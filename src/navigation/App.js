import { BrowserRouter as Router , Redirect, Route, Switch } from 'react-router-dom';
import About from '../screens/About';
import Home from '../screens/Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content" style={{padding: 20}}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component ={About}/>
            <Redirect to="/about" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;