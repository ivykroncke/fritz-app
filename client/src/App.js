import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import ShowOneSport from './components/ShowOneSport'

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={ShowOneSport} />
        </Switch>
      </Router>
    )
  }
}

export default App;
