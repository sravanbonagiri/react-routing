import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Shop from './Shop'
import About from './About'
import LifeCycle from './LifeCycle'
import ItemDetail from './itemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/lifecycle" exact component={LifeCycle}/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
