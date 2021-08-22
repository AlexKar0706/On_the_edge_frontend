import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game'
import MainPage from './components/MainPage'
import EntryPage from './components/EntryPage/EntryPage'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'


const routing = (
  <Router>
      <div className="page">
          <Switch>
              <Route exact path="/app" component={App} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/mainPage" component={MainPage} />
              <Route exact path="/" component={EntryPage} />
          </Switch>
      </div>
  </Router>
)

ReactDOM.render(
  routing, document.getElementById('root')
);
