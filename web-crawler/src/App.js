import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import CrawlerComponent from './components/CrawlerComponent';
import CrawledListComponent from './components/CrawledListComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavComponent />

        <Switch>
          <Route path='/crawler'>
            <CrawlerComponent />
          </Route>
          <Route path='/crawledList'>
            <CrawledListComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
