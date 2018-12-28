import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact
        </Switch>
      </Router>
    )
  }
}

export default App;
