import "./App.css";
import {AnimeContextProvider} from "./context/AnimeContext";
import AnimeContainer from "./components/TopAnime/AnimeContainer";
import MangaContainer from "./components/TopManga/MangaContainer"
import GlobalStyles from "./components/GlobalStyles";
import Navigation from "./components/Navigation";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { IdentityContextProvider } from 'react-netlify-identity';

function App() {
  GlobalStyles();
  const url = 'https://dgm3790.jeremyjensen.net/'
  return (
    <div className="App">
      <IdentityContextProvider url={url}>
      <AnimeContextProvider>

        <Navigation />
        <BrowserRouter>
        <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/TopAnime" exact>
          <AnimeContainer />
        </Route>
        <Route path="/TopManga" exact>
          <MangaContainer />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        </Switch>
        </BrowserRouter>

      </AnimeContextProvider>
      </IdentityContextProvider>
    </div>
  );
}

export default App;
