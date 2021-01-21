import React, { useState } from 'react'
import {
  BrowserRouter as Router,   // BrowserRouter is the router implementation for HTML5 browsers
  Route,   // Route is the conditionally shown component based on matching a path to a URL.
  Redirect,  //Redirect navigates to home when any other URL is used
  Switch   // Switch returns only the first matching route rather than all matching routes.
} from 'react-router-dom'
import Home from './pages/Home.js'
import SearchResults from './pages/SearchResults.js'
import Focus from './pages/Focus.js'
import Navigation from './components/Navigation.js'
import { SearchContext } from './context/search.js'
import './App.css';


const App = () => {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({})

  const setData = (data) => {
    setAnimeData(data)  // sets data for the search results page
  }

  const setSingle = (data) => {
    setSingleData(data)  // sets data for the focus page
  }

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then((response) => response.json());
  };

  return (
    <SearchContext.Provider
      value={{ search, animeData, setData, singleData, setSingle }}
    >
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/searchresults" exact>
              <SearchResults />
            </Route>
            <Route path="/focus" exact>
              <Focus />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>

      </Router>
    </SearchContext.Provider>
  )
};


export default App;
