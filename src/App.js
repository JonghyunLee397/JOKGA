import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/home';
import Menu from './components/menu';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'stretch',
            width: '100%',
            height: '100%',
            flex: 1,
            minHeight: '100%'
          }}
        >
          <header
            style={{
              flexShrink: 1
            }}
          >
            <Header />
          </header>
          <div
            style={{
              flex: 1
            }}
          >
          <Switch>
            <Route path='/' exact>
              <Home  />
            </Route>
            <Route path='/menu' exact>
              <Menu />
            </Route>
          </Switch>
          </div>
          <footer
            style={{
              flexShrink: 1
            }}
          >
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
