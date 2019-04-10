import React, { Component } from 'react';
import First from './first';
import Second from './Second';
import {  Route,BrowserRouter } from 'react-router-dom'
import Main from './Main';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <div className="battleTitle">
        
          <Route path="/" exact component = {Main} />
          <Route path="/brand1" exact component = {First} />
          <Route path="/brand2" exact component = {Second} />
        </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
