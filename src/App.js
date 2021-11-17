import "./App.css";
import {AnimeContextProvider} from "./context/AnimeContext";
import AnimeContainer from "./components/TopAnime/AnimeContainer";
import MangaContainer from "./components/TopManga/MangaContainer"
import GlobalStyles from "./components/GlobalStyles";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProvider from "./context/UserProvider";
import Login from "./components/Login/Login";

function App() {
  GlobalStyles();
  return (
    <div className="App">
      <UserProvider>
      <AnimeContextProvider>
        <BrowserRouter>
        <Navigation />
        <Routes>
        <Route path="/" exact component={Login}/>
        <Route path="/TopAnime" exact component={AnimeContainer}/>
        <Route path="/TopManga" exact component={MangaContainer}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/DetailsPage" exact component={Login}/>
        </Routes>
        </BrowserRouter>
      </AnimeContextProvider>
      </UserProvider>
    </div>
  );
}

export default App;
