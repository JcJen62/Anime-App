import "./App.css";
import {AnimeContextProvider} from "./context/AnimeContext";
import AnimeContainer from "./components/AnimeContainer";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  GlobalStyles();
  return (
    <div className="App">
      <AnimeContextProvider>
        <AnimeContainer />
      </AnimeContextProvider>
    </div>
  );
}

export default App;
