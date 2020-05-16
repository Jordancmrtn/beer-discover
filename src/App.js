import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import BeerList from './Components/BeersList';
import Beer from './Components/Beer';
import CtxBeers from './Components/CtxBeers'

import './App.css';

function App() {

  const [beers, SetBeers] = useState([])
  
  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers?per_page=10")
    .then(response => {
      SetBeers(response.data)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage : `url(${require('./Assets/bar3.png')})`}}>
        <CtxBeers.Provider value={beers}>
          <Switch>
            <Route exact path="/" component={BeerList} />
            <Route path="/beers/:id" component={Beer} />
          </Switch>
        </CtxBeers.Provider>
      </header>
    </div>
  );
}

export default App;
