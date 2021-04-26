import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products'
import Reports from './Pages/Reports'
import Createtask from './Pages/Createtask'
import UpdateTask from './Pages/UpdateTask';

function App() {
  return (
    <>  
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' component={Products}/>
          <Route path='/reports' component={Reports} />
          <Route path='/createtask' component={Createtask} />
          <Route path='/updateTask/:id' component={UpdateTask} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
