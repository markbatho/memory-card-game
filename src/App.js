import { useEffect, useState } from 'react';
import Card from './components/Card';

const flags = [
  { id: 0, country: 'Argentina', flag: 'ar' },
  { id: 1, country: 'Austria', flag: 'at' },
  { id: 2, country: 'Belgium', flag: 'be' },
  { id: 3, country: 'Bulgaria', flag: 'bg' },
  { id: 4, country: 'Brazil', flag: 'br' },
  { id: 5, country: 'Canada', flag: 'ca' },
  { id: 6, country: 'Switzerland', flag: 'ch' },
  { id: 7, country: 'China', flag: 'cn' },
  { id: 8, country: 'Cuba', flag: 'cu' },
  { id: 9, country: 'Germany', flag: 'de' },
  { id: 10, country: 'Egypt', flag: 'eg' },
  { id: 11, country: 'Finland', flag: 'fi' },
  { id: 12, country: 'Greece', flag: 'gr' },
  { id: 13, country: 'Hungary', flag: 'hu' },
  { id: 14, country: 'Israel', flag: 'il' },
  { id: 15, country: 'India', flag: 'in' },
  { id: 16, country: 'Italy', flag: 'it' },
  { id: 17, country: 'Japan', flag: 'jp' },
  { id: 18, country: 'South Korea', flag: 'kr' },
  { id: 19, country: 'Pakistan', flag: 'pk' },
  { id: 20, country: 'Poland', flag: 'pl' },
  { id: 21, country: 'Portugal', flag: 'pt' },
  { id: 22, country: 'Serbia', flag: 'rs' },
  { id: 23, country: 'San Marino', flag: 'sm' },
  { id: 24, country: 'USA', flag: 'us' },
];

function App() {
  const [flagsAvailable, setFlagsAvailable] = useState(flags.slice());
  const [flagsSelected, setFlagsSelected] = useState([]);
  const [flagsClicked, setFlagsClicked] = useState([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (level > 5 || isGameOver) {
      setFlagsAvailable(flags.slice());
      setFlagsSelected([]);
      setIsGameOver(false);
      setLevel(1);
      return;
    }

    const flagsAvailableCopy = flagsAvailable.slice();
    const flagsSelectedCopy = flagsSelected.slice();

    for (let i = 0; i < 5; i++) {
      const index = generateRandomNumber(0, flagsAvailableCopy.length - 1);
      flagsSelectedCopy.push(flagsAvailableCopy[index]);
      flagsAvailableCopy.splice(index, 1);
    }

    setFlagsAvailable(flagsAvailableCopy);
    setFlagsSelected(flagsSelectedCopy);
  }, [level, isGameOver]);

  useEffect(() => {
    if (flagsSelected.length === 0) return;
    if (flagsSelected.length === flagsClicked.length) {
      setFlagsClicked([]);
      setLevel(level + 1);
    }
  }, [flagsClicked]);

  function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  function shuffleFlagsSelected() {
    setFlagsSelected(flagsSelected.slice().sort(() => Math.random() - 0.5));
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Memory Card Game</h1>
          <div className="scores">
            <div className="level">Level: {level}</div>
            <div className="score">Score: {score}</div>
            <div className="best-score">Best Score: {bestScore}</div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="cards">
          {flagsSelected.map((flag) => (
            <Card
              key={flag.id}
              country={flag.country}
              countryId={flag.id}
              flagId={flag.flag}
              shuffle={shuffleFlagsSelected}
              flagsClicked={flagsClicked}
              setFlagsClicked={setFlagsClicked}
              score={score}
              setScore={setScore}
              bestScore={bestScore}
              setBestScore={setBestScore}
              level={level}
              setLevel={setLevel}
              setIsGameOver={setIsGameOver}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
