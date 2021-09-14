import './App.css';
import AnimeContainer from './components/AnimeContainer';
import GlobalStyles from './components/GlobalStyles';

function App() {
  GlobalStyles();
  return (
    <div className="App">
      <AnimeContainer></AnimeContainer>
    </div>
  );
}

export default App;
