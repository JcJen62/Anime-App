import "./App.css";
import React from 'react'
import {AnimeContextProvider} from "./context/AnimeContext";
import GlobalStyles from "./components/GlobalStyles";
import Navigation from "./components/Navigation";
import { Route } from 'react-router-dom'
import { Login, SignUp } from './components/Login/Login'
import { Dashboard } from "./components/Login/Login";
import { IdentityContextProvider } from 'react-netlify-identity';
import AnimeContainer from './components/TopAnime/AnimeContainer'
import MangaContainer from './components/TopManga/MangaContainer'
import AnimeDetails from './components/Details/AnimeDetails'
import MangaDetails from './components/Details/MangaDetails'
import './site.css'

function App() {
  GlobalStyles();
  const url = 'https://dgm3790.jeremyjensen.net/'
  return (
    <div className="App">
      <IdentityContextProvider url={url}>
      <AnimeContextProvider>

        <Navigation />
        <Route path="/Login" exact>
          <Login />
        </Route>

        <Route path="/SignUp" exact>
          <SignUp />
        </Route>

        <Route path="/Dashboard" exact>
          <Dashboard />
        </Route>

        <Route path="/" exact>
          <AnimeContainer />
        </Route>
        <Route path="/TopManga" exact>
          <MangaContainer />
        </Route>
        <Route path="/AnimeDetails" exact>
          <AnimeDetails />
        </Route>
        <Route path="/MangaDetails" exact>
          <MangaDetails />
        </Route>
      </AnimeContextProvider>
      </IdentityContextProvider>
    </div>
  );
}

export default App;
