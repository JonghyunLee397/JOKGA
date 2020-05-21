import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>

        <Switch>
          <Route>
            <Home path='/' exact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
