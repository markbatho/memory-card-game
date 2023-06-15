/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const flags = [
  { country: 'Argentina', flag: 'ar' },
  { country: 'Austria', flag: 'at' },
  { country: 'Belgium', flag: 'be' },
  { country: 'Bulgaria', flag: 'bg' },
  { country: 'Brazil', flag: 'br' },
  { country: 'Canada', flag: 'ca' },
  { country: 'Switzerland', flag: 'ch' },
  { country: 'China', flag: 'cn' },
  { country: 'Cuba', flag: 'cu' },
  { country: 'Germany', flag: 'de' },
  { country: 'Egypt', flag: 'eg' },
  { country: 'Finland', flag: 'fi' },
  { country: 'Greece', flag: 'gr' },
  { country: 'Hungary', flag: 'hu' },
  { country: 'Israel', flag: 'il' },
  { country: 'India', flag: 'in' },
  { country: 'Italy', flag: 'it' },
  { country: 'Japan', flag: 'jp' },
  { country: 'South Korea', flag: 'kr' },
  { country: 'Pakistan', flag: 'pk' },
  { country: 'Poland', flag: 'pl' },
  { country: 'Portugal', flag: 'pt' },
  { country: 'Serbia', flag: 'rs' },
  { country: 'San Marino', flag: 'sm' },
  { country: 'USA', flag: 'us' },
];

function App() {
  const [flagsAvailable, setFlagsAvailable] = useState(flags.slice());
  const [flagsSelected, setFlagsSelected] = useState([]);
  const [flagsClicked, setFlagsClicked] = useState([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (level > 5) {
      setFlagsAvailable(flags.slice());
      setFlagsSelected([]);
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
  }, [level]);

  function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
